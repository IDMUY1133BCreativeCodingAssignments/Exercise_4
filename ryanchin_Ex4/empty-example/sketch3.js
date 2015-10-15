var hello = [];
var bg1;
var bg2;
var bg3;
var bg4;
var bg5;
var fox;
var dog;
var animal;
var astronaut;
var room;
var gooball;
var names = [];
var images = [];
var imageIndex = 0;
var x = 1000;



function preload(){
    hello = loadStrings("data/hello.txt");
    bg1 = loadImage("data/forest.jpg");
    fox = loadImage("data/fox.png");
    dog = loadImage("data/dog.png");
    bird = loadImage("data/bird.png");
    animal = [fox, dog, bird];
    bg2 = loadImage("data/space.jpg");
    astronaut = loadImage("data/astronaut.png");
    room = loadImage("data/room.jpg");
    gooball = loadImage("data/goo.png");
    doorclosed = loadImage("data/doorclosed.jpg");
    dooropen = loadImage("data/dooropen.jpg");
    names = ["data/doorclosed.jpg","data/dooropen.jpg"];
    for(var i=0; i<names.length; i++){
        images[i] = loadImage(names[i]);
    }
    

}

function setup() {
    createCanvas(1280, 720);
    frameRate(60);
    noCursor();
}

function draw() {
    background(0);
    if(frameCount>-1 && frameCount<601){
        greeting(); //says hello in many languages
    }
    if(frameCount>600 && frameCount<1801){
        scene1();
    }
    if(frameCount>1800 && frameCount<3001){
        scene2();
    }
    if(frameCount>3000 && frameCount<4201){
        scene3();
    }
    if(frameCount>4200 && frameCount<5401){
        scene4();
    }
    if(frameCount>5400 && frameCount<6601){
        scene5();
    }
    
    if(frameCount = 4200){
        frameCount = (frameCount + 1) % 4200;
    }
    
    
    
    framecounter();
}

function framecounter(){
    textSize(18);
    textAlign(LEFT);
    fill(255);
    text(frameCount,50,50); // <-- I'm following the reference exactly as it is. Can't figure out why it's not drawing the frameCount!!!
}

function greeting(){
    noFill();
    stroke(255);
    strokeWeight(1);
    ellipse(width/2,height/2,400+random(-1,1),400+random(-1,1))
    if(frameCount<500){var hellotype = int(map(mouseX,width/2-200,width/2+200,0,30));} else {var hellotype = int(random(0,30));}
    fill(255);
    textFont("Helvetica");
    textAlign(CENTER);
    textSize(20);
    text(hello[hellotype],width/2+5,height/2);
}

function scene1(){
    image(bg1,-100,-100,width+200,height+200);
    image(animal[0], mouseX ,600, 120, 140, 100);
    image(animal[1], map(mouseX,0,width,width,0), 400, 120, 140, 100);
    x = x-random(3);
    image(animal[2], x, 150, 120, 140, 100);
    

    
}

function scene2(){
    push();
    translate(random(-5,5),random(-5,5));
    image(bg2, -100,-100,width+200,height+200);  
    image(astronaut, mouseX-70, mouseY-50, 140, 100);
    pop();
    text("Space Mission = ABORTED",1000,200);

}

function scene3(){
    image(room,-100,-100,1380,820);

    image(images[imageIndex],270, 230, 140, 280);
    
    image(gooball,mouseX-50,mouseY-50,100,100);
    
}

function mousePressed(){
    imageIndex = int(random(images.length));
}
    

function scene4(){
    text("this exercise was challenging", width/2, height/2);
}

function scene5(){
    
}