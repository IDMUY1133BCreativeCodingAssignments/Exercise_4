//declaring...
var sky;//sky pic
var grass;//grass pic
var cloud;//cloud pic
var daff;//daffodil pic

var d=0;//dimming increment

var clouds=[];//clouds array

var myfont;//font style
var poem;//all poem tezt

var linenum=0;//tracks/counts line number
var twinkle=false;
var x=0

function preload(){//preloading all needed data
    sky=loadImage("data/sky.jpg");
    grass=loadImage("data/grass.png");
    cloud=loadImage("data/cloud.png");
    daff=loadImage("data/goldendaffodils.png");
    poem=loadStrings("data/poem.txt");
    myfont=loadFont("data/Notera_PersonalUseOnly.otf");
}//close preload
    
function setup(){  
    createCanvas(1280,720);//size of sky pic  
    //make 5 clouds
    for(var i=0;i<5;i++){
        clouds[i]=new Cloud();
    }//close for
    
    textFont(myfont,52);
    
}//close setup

function draw(){
    tint(color(255*(1-d)));//tint sky, adjusts with dim var
    image(sky,0,0);

    //loop through each cloud
    tint(color(255*(1-d/2)));
    for (var i=0;i<clouds.length;i++){
        clouds[i].move();
        clouds[i].display();
    }//close for loop
    
    image(grass,0,450,width, 270);
    
    //daffodil grid pattern based on mouse loc - inspired by GD p.4.0 page 288
    var tilecountx=mouseX/160+1;//constrain how many daffodils can appear by columns and rows
    var tilecounty=mouseY/240+1;
    var stepX=width/tilecountx;
    var stepY=250/tilecounty;//to only make grid pattern along the ground
    for(var gridY=470;gridY<height;gridY+=stepY/2){//slightly overlaps eachother, both x and y
        for (var gridX=0;gridX<width;gridX+=stepX*(2/3)){
            image(daff,gridX,gridY,stepX,stepY);
        }
    }
    
   
    line=poem[linenum]//goes through line by line poetry
    fill(0,x);
    stroke(255,x);
    text(line,100,100+x);
    
    x=x+15;//adjusts text location and transparency
    constrain(x,0,255);

}//close draw
    
function keyPressed(){//enter key makes setting dimmer and go to next line of poetry
    if (keyPressed==="ENTER"||"RETURN"){
        linenum++
        x=0
        if (linenum>poem.length-1){
            linenum=0;
            d=0;
        }
        else if ((linenum>2)&&(linenum<8)){//starts after lines introducing title and author
            d=d+.15//gets dimmer until a certain point of poem
        }
        else if (linenum>16){
            d=d-.15//gets brighter again after a certain point of poem
        }
    }//close if
}//close keypressed

function Cloud(){//object cloud
    this.xpos=random(width);//place cloud randomly up top
    this.ypos=random(100);
    this.cloudhe=random(150,200);//size cloud randomly w/i set parameters
    this.cloudwi=random(250,400);
    this.speed=random(3);//random speed across interface
}//close cloud

//cloud move method
Cloud.prototype.move=function(){//move
    if(this.xpos>width){
        this.xpos=-this.cloudwi//start back offscreen
        this.ypos=random(200);
        this.speed=random(3);
    }//close if
    this.xpos=this.xpos+this.speed;//adjusting x pos to make it move by inc speed
}//close move cloud

//cloud display method
Cloud.prototype.display=function(){
    image(cloud,this.xpos,this.ypos,this.cloudwi,this.cloudhe);//display image
}//close display cloud

//figured out how to work with objects on javascript by this link: http://coursescript.com/notes/interactivecomputing/objects/  :)

