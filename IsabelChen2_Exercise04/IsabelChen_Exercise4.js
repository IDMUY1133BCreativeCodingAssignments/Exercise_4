var butterfly;
var butterfly2;
var sun;
var cloud0;
var cloud1;
var cloud2;
var handmade;
var font1;
var x = 0;
var y = 350;
var z = 100;
var value=0;
var spin = 0;
var txt = "Hello. Today will be a great day.";

function preload(){
    sun = loadImage("data/Sun.png");
    cloud0 = loadImage("data/Cloud_00.png");
    butterfly = loadImage("data/Abstract Butterfly.png");
    butterfly2 = loadImage("data/Abstract Butterfly2.png");
    cloud1 = loadImage("data/Cloud_01.png");
    cloud2 = loadImage("data/Cloud_02.png");
    handmade = loadFont('data/NexaRustHandmade.otf'); //it says that the loadfont is not defined
    font1 = loadFont('data/font1.otf');
    

    
} //end preload

function setup(){
    createCanvas(1000, 900);
    noCursor();
    
} //end setup

function draw(){
    background(109, 173, 186);
    
    push(); //sun will spin
    rotate(spin);
    imageMode(CENTER);
    image(sun, 0, 0);
    spin += 0.005;
    pop();

    
    image(cloud0, x, 200); //clouds will be moving across the screen
    image(cloud1, y, 220);
    image(cloud2, z, 150);
    
    x = x - 2;
    y = y - 3;
    z = z - 4;
    
    if(x < - 750){
        x = width;
    }
    if(y < - 1150){
        y = width;
    }
    if(z < - 900){
        z = width;
    }
    
    if(mouseIsPressed){
        image(butterfly2, mouseX - 50, mouseY - 50); //cursor will be a butterfly!
        fill(50);
    } else {
        image(butterfly, mouseX - 50, mouseY - 50);
        fill(255);
    }
    
    noStroke();
    textFont(font1, 50); //font wont be defined
    text(txt, mouseX + 75, mouseY);
    
    //letters are not varying
    for (var i = 0; i < txt.length(); i++) { 
        textSize(random(15, 50));
        text(txt.char(i), mouseX + 75, mouseY);
        x += textWidth(txt.char(i));
    }
    
    
} //end draw



//cursor function did not work when I put it into the draw function even though its the same exact code as the one that is working right now
/*function cursor(){
    
    if(mouseIsPressed){
        image(butterfly2, mouseX - 50, mouseY - 50); //cursor will be a butterfly!
    } else {
        image(butterfly, mouseX - 50, mouseY - 50);
    }
    
    
} //end mousePressed*/