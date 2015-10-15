var water;
var horizon;
var waves;
var mew;
var lapras;
var vaporeon;
var x = 850;
var y = 860;
var spin = 0;

function preload(){
    horizon = loadImage("data/horizon.jpg");
    waves = loadImage("data/waves.gif");
    mew = loadImage("data/mew.gif");
    lapras = loadImage("data/lapras.gif");
    vaporeon = loadImage("data/vaporeon.gif");
}

function setup(){
    createCanvas(1500,1500);
}

function draw (){
    image(horizon, 0, 0, 500, 500);
    image(waves, 0, 200, 500, 400);
    
    //mew movement
    scale(0.13);
    push();
    rotate(spin);
    image(mew, 1000, 1200);
    spin+=-0.02;
    pop();
    
    //lapras movement
    scale(3);
    image(lapras, 400, x);
    x-=0.5;
    if (x < 840){
        x = 850;
    }
    
    image(vaporeon, 860, y);
    y+=0.2;
    if (y > 865){
        y = 860
    }
    
    
}

