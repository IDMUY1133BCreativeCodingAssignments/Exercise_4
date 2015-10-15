//goal is to have a spinning ferris wheel in the center 
//the sky is made up of a collage of photos (from my cony island trip)
//I'd also like the time of day to change (shown by the change of sky color)

var  snap, sign, scary2, scary, morebird, love, wall, blurryys,us2, us, paul, bird, food, names, ferris, animal,wins,senia,jae,betty,jaeface,seniaface,turtle;

var spin;
var color;
var x= 250
var speed= 1;
var speedg= -1;
var y= 0;
var star;
var g= 350;

function preload(){
   snap = loadImage("data/snap.PNG");
   sign= loadImage("data/sign.JPG");
    scary2= loadImage("data/scary2.PNG"); scary=loadImage("data/scary.PNG");
    morebird=loadImage("data/morebird.PNG");
    love=loadImage("data/love.JPG");
wall=loadImage("data/wall.JPG");
 blurryus=loadImage("data/blurryus.JPG");
 us2=loadImage("data/us2.JPG");

  us=loadImage("data/us.JPG");
    paul=loadImage("data/paul.JPG");
  bird=loadImage("data/bird.PNG");
    food=loadImage("data/food.JPG");
    names=loadImage("data/names.JPG");
    ferris=loadImage("data/ferris.JPG");
    animal=loadImage("data/animal.JPG");
    wins=loadImage("data/wins.JPG");
    senia=loadImage("data/senia.JPG");
    jae=loadImage("data/jae.JPG");
    betty=loadImage("data/betty.PNG");
    jaeface=loadImage("data/jaeface.JPG");
    seniaface=loadImage("data/seniaface.JPG");
    turtle=loadImage("data/turtle.JPG");
                                    
spin = loadImage("data/imageedit_1_5035011954.gif");
    
    star=loadImage("data/imageedit_1_8162934720.gif");
    
}

function setup(){
   createCanvas(800, 800);
    
}


function draw(){
    background(255);
    //image(img,100,25);
    image(snap, 0, 0);
    image(scary2, 100, 0);
    image(wins,250,0);
    image(paul,550,-100);
    image(food,700,0);
    image(us,0,150);
    image(ferris,300,150);
    image(wall,450,150);
    image(turtle,600,150);
    image(betty,0,300);
    image(bird,150,300);
    image(us2,300,415);
    image(jaeface,600,300);
     image(seniaface,750,300);
    image(sign,0,566);
     image(names,150,566);
     image(morebird,650,566);
    
    if(mouseX>=402){
     fill(50,50,x,200);
    sky();
    }
     if(mouseX<402 && mouseX>=402-11){
     fill(50,30,x-17,200);
    sky();
    }
    
    if(mouseX<402-11 && mouseX>=402-22){
     fill(50,30,x-(2*17),200);
    sky();
    }
    if(mouseX<402-22 && mouseX>=402-33){
     fill(30,30,x-(17*3),200);
    sky();
    }
    if(mouseX<402-33 && mouseX>=402-44){
     fill(20,0,x-(17*4),200);
    sky();
    }
     if(mouseX<402-44 && mouseX>=402-55){
     fill(10,0,x-(17*5),200);
    sky();
    }
     if(mouseX<402-55 && mouseX>=402-66){
     fill(10,0,x-(17*6),200);
    sky();
    }
     if(mouseX<402-66 && mouseX>=402-77){
     fill(10,0,x-(17*7),200);
    sky();
    }
     if(mouseX<402-77 && mouseX>=402-88){
     fill(5,0,x-(17*8),200);
    sky();
    }
     if(mouseX<402-88 && mouseX>=402-99){
     fill(5,0,x-(17*9),200);
    sky();
    }
     if(mouseX<402-99 && mouseX>=402-110){
     fill(5,0,x-(17*10),200);
    sky();
    }
     if(mouseX<402-110 && mouseX>=402-121){
     fill(5,0,x-(17*11),200);
    sky();
    }
     if(mouseX<402-121 && mouseX>=402-132){
     fill(5,0,x-(17*12),200);
    sky();
    }
     if(mouseX<402-132){
     fill(5,0,x-(17*13),200);
    sky();
    }
    
    
   angleMode(RADIANS);
//http://p5js.org/reference/#/p5/angleMode
   
    //wheel
    push();
    translate(270, 530);
    translate(132,114);
    var a = atan2(mouseY-644, mouseX-402);
    rotate(a);
    image(spin, -132,-114);
    pop();
    
    //base
    fill(150);
    noStroke();
    rect(388,715, 30, 10);
    rect(388,735, 33, 10);
    stroke(1);
    triangle(402, 644, 392, 800, 362, 800);
    triangle(402, 644, 412, 800, 444, 800);
 
   //text
    strokeWeight(1);
    stroke(200,0,0);
    fill(255);
    textSize(25);
    textFont("Impact");
    text("Wonder", width/2-39 ,644);
    text("Wheel", width/2-31 ,666);
    
  
    move();

    image(star,y,200);
    again();
  
   
}

function sky(){
    rect(0,0,800,800);
    
}

//function star(){
  //image(star, y, 350); 
//}

function move(){
    y = y + speed;
    //g = g+speedg; 
}
    
    function again(){
    if (y > width){
       y=-250
    }
}
