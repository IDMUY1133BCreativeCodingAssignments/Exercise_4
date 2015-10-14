//declaring...
var sky;//sky pic
var grass;//grass pic
var cloud;//cloud pic
var daff;//daffodil pic
var d=0;//dimming increment
var clouds=[];//clouds array

function preload(){//preloading all needed data
    sky=loadImage("data/sky.jpg");
    grass=loadImage("data/grass.png");
    cloud=loadImage("data/cloud.png");
    daff=loadImage("data/goldendaffodils.png");
}//close preload
    
function setup(){  
    createCanvas(1280,720);//size of sky pic  
    
    //make 5 clouds
    for(var i=0;i<5;i++){
        clouds[i]=new Cloud();
    }//close for
}//close setup

function draw(){
    loadPixels();//

    sky.loadPixels();//main bg

for(var y = 0; y < height; y++){//displaying by pixel
    for( var x = 0; x < width; x++){//nested loop to go through all pix
        var loc = (x + y * width) * 4;
        var r = sky.pixels[loc  ];
        var g = sky.pixels[loc + 1];
        var b = sky.pixels[loc + 2];

        var dim = 1-d//enter key will adjust var d
    
        r *= dim;//adjusts brightness/dimness of sky image
        g *= dim;
        b *= dim;
              
        r= constrain(r, 50, 255);//to prevent complete blackout
        g= constrain(g, 50, 255);
        b= constrain(b, 50, 255);

        pixels[loc  ] = r;
        pixels[loc + 1] = g;
        pixels[loc + 2] = b;
        pixels[loc + 3] = 255;//adjusting values...
        }//close for loop x
    }//close for loop y
    updatePixels();
    
    //loop through each cloud
    for (var i=0;i<clouds.length;i++){
        clouds[i].move();
        clouds[i].display();
    }//close for loop

}//close draw
    
    
//    var xcontrol=map(mouseX,0,width,0,sky.width-width);
//    var ycontrol=map(mouseY,0,height,0,sky.height-height);
//    copy(sky,xcontrol,ycontrol,640,360,0,0,width,height);
//
//
//}
//
function keyPressed(){//enter key makes sky setting dimmer
    if (keyPressed==="ENTER"||"RETURN"){
        d=d+.2
    }//close if
}//close keypressed

function Cloud(){//object cloud
    this.xpos=random(width);//place cloud randomly up top
    this.ypos=random(200);
    this.cloudhe=random(150,250);//size cloud randomly w/i set parameters
    this.cloudwi=random(250,400);
    this.speed=random(3);//random speed across interface
    this.brightness=color(255);//brightness (to adjust with sky...)
}//close cloud

//cloud move method
Cloud.prototype.move=function(){//move
    if(this.xpos>width){
        this.xpos=-300//start back offscreen
        this.ypos=random(200);
    }//close if
    this.xpos=this.xpos+this.speed;//adjusting x pos to make it move by inc speed
}//close move cloud

//cloud display method
Cloud.prototype.display=function(){
    image(cloud,this.xpos,this.ypos,this.cloudwi,this.cloudhe);//display image
    tint(this.brightness);//tint image (aka the dimness/brightness)
}//close display cloud

//figured out how to work with objects on javascript by this link: http://coursescript.com/notes/interactivecomputing/objects/  :)
