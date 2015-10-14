var sky;
var grass;
var cloud;
var daff;
var cloudx = 0;
var d=0;

function preload(){
    sky=loadImage("data/sky.jpg");
    grass=loadImage("data/grass.png");
    cloud=loadImage("data/cloud.png");
    daff=loadImage("data/goldendaffodils.png");
}
    
function setup(){  
    createCanvas(1280,720);  

}

function draw(){
    loadPixels();

    sky.loadPixels();//main bg

for(var y = 0; y < height; y++){//displaying by pixel
    for( var x = 0; x < width; x++){
        var loc = (x + y * width) * 4;
        var r = sky.pixels[loc  ];
        var g = sky.pixels[loc + 1];
        var b = sky.pixels[loc + 2];

        var dim = 1-d
    
        r *= dim;
        g *= dim;
        b *= dim;
              
        r= constrain(r, 50, 255);
        g= constrain(g, 50, 255);
        b= constrain(b, 50, 255);

        pixels[loc  ] = r;
        pixels[loc + 1] = g;
        pixels[loc + 2] = b;
        pixels[loc + 3] = 255;
        }
    }
    updatePixels();
    
    image(cloud,cloudx,100,250,200);
    cloudx=cloudx+1
    if (cloudx>width){
        cloudx=0;
    }

}
    
    
//    var xcontrol=map(mouseX,0,width,0,sky.width-width);
//    var ycontrol=map(mouseY,0,height,0,sky.height-height);
//    copy(sky,xcontrol,ycontrol,640,360,0,0,width,height);
//
//
//}
//
function keyPressed(){
    if (keyPressed==="ENTER"||"RETURN"){
        d=d+.2
    }
}

