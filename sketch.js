//goal is to have a spinning ferris wheel in the center 
//the sky is made up of a collage of photos (from my cony island trip)
//I'd also like the time of day to change (shown by the change of sky color)

var  snap, sign, scary2, scary, morebird, love, wall, blurryys,us2, us, paul, bird, food, names, ferris, animal,wins,senia,jae,betty,jaeface,seniaface,turtle;

var spin;
var color;
var x= 250

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
    image(paul,550,0);
    image(food,700,0);
    image(us,0,150);
    image(ferris,300,150);
    
    if(mouseX>=402){
     fill(15,0,x,200);
    sky();
    }
     if(mouseX<402 && mouseX>=402-11){
     fill(15,0,x-17,200);
    sky();
    }
    
    if(mouseX<402-11 && mouseX>=402-22){
     fill(15,0,x-(2*17),200);
    sky();
    }
    if(mouseX<402-22 && mouseX>=402-33){
     fill(15,0,x-(17*3),200);
    sky();
    }
    if(mouseX<402-33 && mouseX>=402-44){
     fill(10,0,x-(17*4),200);
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
   
    push();
    translate(270, 530);
    translate(132,114);
    var a = atan2(mouseY-644, mouseX-402);
    rotate(a);
    image(spin, -132,-114);
    pop();
   
    strokeWeight(1);
    stroke(200,0,0);
    fill(255);
    textSize(25);
    textFont("Impact");
    text("Wonder", width/2-39 ,644);
    text("Wheel", width/2-31 ,666);
  
   
}

function sky(){
    rect(0,0,800,800);
    
}


