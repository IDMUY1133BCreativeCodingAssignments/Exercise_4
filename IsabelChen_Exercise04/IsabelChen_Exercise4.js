var butterfly;
var abstract;
var img;
var sun;
var cloud0;
var cloud1;
var cloud2;
var handmade;
var font1;
var x = 0;
var y = 350;
var z = 100;

function preload(){
    img = loadImage("data/Vassily_Kandinsky_1923.jpg");
    sun = loadImage("data/Sun.png");
    cloud0 = loadImage("data/Cloud_00.png");
    butterfly = loadImage("data/Abstract Butterfly.png");
    abstract = loadImage("data/Colorful Abstract Painting.jpg");
    cloud1 = loadImage("data/Cloud_01.png");
    cloud2 = loadImage("data/Cloud_02.png");
    handmade = loadFont('data/NexaRustHandmade.otf');
    font1 = loadFont('data/font1.otf');

    
} //end preload

function setup(){
    createCanvas(1000, 900);
    noCursor();
} //end setup

function draw(){
    background(109, 173, 186);
    image(sun, 50, 50);
    image(butterfly, mouseX - 50, mouseY - 50);
    image(cloud0, x, 200);
    image(cloud1, y, 220);
    image(cloud2, z, 150);
    
    x = x - 5;
    y = y - 6;
    z = z - 7;
    
    if(x < - 750){
        x = width;
    }
    if(y < - 1150){
        y = width;
    }
    if(z < - 900){
        z = width;
    }
    
} //end draw

function mousePressed(){ //pixelating and changing colors when mouse is pressed
    loadPixels();
    img.loadPixels();
    
   /* for(var i = 0; i < pixels.length; i++){
        var rand = random(255);
        pixels[i] = rand;
    }*/
    
    for( var x = 0; x < width; x++){
        for( var y = 0; y < height; y++){
            
            //locate each pixel
            //get the color values
            var loc = (x + y * width) * 4;
            
            var r = img.pixels[loc ];
            var g = img.pixels[loc + 1];
            var b = img.pixels[loc + 2];
            
            
            r *= adjustBrightness;
            g *= adjustBrightness;
            b *= adjustBrightness;
            
            r = constrain(r, 0, 255);
            g = constrain(g, 0, 255);
            b = constrain(b, 0, 255);
            
            // load the pixels back after crunching them
            
            pixels[loc ] = r;
            pixels[loc + 1] = g;
            pixels[loc + 2] = b;
            pixels[loc + 3] = 255;
            
            /*if( x % 2 == 0){ //if we are in an even column
                pixels[loc ] = 255; // R values
                pixels[loc + 1] = 255; // G values
                pixels[loc + 2] = 255; // B values
                pixels[loc + 3] = 255; // A values
            }
            else {
                pixels[loc ] = 0;
                pixels[loc + 1] = 0;
                pixels[loc + 2] = 0;
                pixels[loc + 3] = 255;
            }*/
        }
    }
    
    updatePixels();
    
} //end mousePressed