var water;
var horizon;
var waves;
var mew;
var lapras;
var vaporeon;
var wingull;
var x = 850;
var y = 860;
var z = 565;
var z1 = 0;
var spin = 0;
var str1 = "Pokemon";
var h = 0;

function preload(){
    horizon = loadImage("data/horizon.jpg");
    waves = loadImage("data/waves.gif");
    mew = loadImage("data/mew.gif");
    lapras = loadImage("data/lapras.gif");
    vaporeon = loadImage("data/vaporeon.gif");
    wingull = loadImage("data/wingull.png");
}

function setup(){
    createCanvas(690,500);
}

function draw (){
    image(horizon, 0, 0, 500, 500); // background of horizon
    image(waves, 0, 200, 500, 400); // cropped out transparent image of ocean wave I made in photoshop
    
    //mew movement
    scale(0.13); //scales the image down, because it was really large
    push(); 
    rotate(spin); //I didn't want it to spin and go off the screen. I initially wanted it to spin around a certain point, but it seems like it's set to spin around (0,0) and I couldn't find how to change that.
    image(mew, 1000, 1200);
    spin+=-0.02; //messing with the number to alter the speed 
    pop();
    
    //lapras movement
    scale(3);
    image(lapras, 400, x);
    x-=0.5;
    if (x < 840){ //moving the lapras up and resetting it once it gets back to 850. I initally wanted this to also descend at the same rate, but couldn't get another if function to work the way I wanted to.
        x = 850;
    }
    
    //vaporeon
    image(vaporeon,800, y);
    y+=0.2;
    if (y > 865){ //Similar problem with the lapras, it's just moving it down at a certain rate and restarting once it gets to 860.
        y = 860;
    }
    
    //Pelipper (but I used Wingull by accident)
    scale(2);
    image(wingull, z, z1);    
        z-=1;
        //What I tried to do here was to make the bird move up and down as it moved across horizontally, but I couldn't get it to move back up, as it would just descend a certain amount and keep moving horizontally.
        /*var h = .3;
        if(z1 < 40){
            z1 += h;            
        }
        h = -.6;
        */
        z1+=.8;
        if(z1 > 520){
            z1=-20;
            z=585;
        }
    if(h<100000){ //large number so it takes longer to stay on the screen
    h+=.3; //using a variable for the opacity so that it can change over time
    textSize(60);
    strokeWeight(2);
    stroke(255, 0, 0, h);
    fill(255,245,60,h);
    text(str1, 200,120);
    }
}

