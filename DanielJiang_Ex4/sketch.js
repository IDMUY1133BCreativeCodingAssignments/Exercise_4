var ratchet;
var ratchet1;
var boxnumberX;
var boxnumberY;
var nextX;
var nextY;
var gridX;
var gridY;
var rust;
var myText;
var spin=0;

function preload(){
    ratchet=loadImage("data/ratchet1.jpg");
    ratchet1=loadImage("data/ratchet2.jpg");
    rust=loadFont("./data/NexaRustScriptL.otf");
}

function setup(){
    createCanvas(800,800);
    background(255);
    myText="W  H  A  T  A  R  E  T  H  O  S  E  ?  ?  ?";
    
}

function draw(){
    repeater();
    textshenanegans();
}

function repeater(){
    boxnumberX=mouseX/100;
    boxnumberY=mouseY/100;
    nextX=width/boxnumberX;
    nextY=height/boxnumberY;
    for (gridY=0; gridY<height; gridY+=nextY){
        for(gridX=0; gridX<width; gridX+=nextX){
            if (mouseX<width/2){
                image(ratchet,gridX,gridY,nextX,nextY);
            }
            if (mouseX>width/2){
                image(ratchet1,gridX,gridY,nextX,nextY);
            }
            
        }
    }
}


function textshenanegans(){
    stroke(random(0,255),random(0,255),random(0,255));
    textFont(rust,15);
    text(myText,mouseX,mouseY);

}
