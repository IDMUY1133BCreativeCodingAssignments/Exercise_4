var bg;
var boxnumberX;
var boxnumberY;
var nextX;
var nextY;
var gridX;
var gridY;
var boxwidth;
var boxheight;
var boxnumber;
var killmepls;
var rust;
var myText;

function preload(){
    bg=loadImage("data/BG (2).jpg");
    rust=loadFont("data/NexaRustScriptL.otf");
}

function setup(){
    createCanvas(1024,768);
    background(255);
    myText="brbrbrbrbrbbrbrbrbrbrbrbbrbrbrbrbrbbrbrbrbrbrbrbrbrbbrbrbrbrbr";
    
}

function draw(){
    repeater();
  //  cropTiles();
}

function repeater(){
 /*   boxnumberX=mouseX+2;
    boxnumberY=mouseY+2;
    nextX=width/boxnumberX;
    nextY=height/boxnumberY;
    for (gridY=0; gridY<height; gridY+=nextY){
        for(gridX=0; gridX<width; gridX+=nextX){
            image(bg,gridX,gridY,nextX,nextY);
        }
    }
}
*/

function textshenanegans(){

}
    

/*
function cropTiles(){
    boxwidth=width/boxnumberY;
    boxheight=height/boxnumberX;
    boxnumber=boxnumberX*boxnumberY;
    imageTiles= killmepls[boxnumber];
    var i=0;
    for(gridY=0;gridY<boxnumberY;gridY++){
        for(gridX=0;gridX<boxnumberX;gridX++){
            if(randomMode){
                cropX=(floor(random(mouseX-boxwidth/2,mouseX+boxwidth/2)));
                cropY=(floor(random(mouseY-boxheight/2,mouseY+boxheight/2)));
            }
            cropX=constrain(cropX,0,width-boxwidth);
            cropY=constrain(cropY,0,height-boxheight);
            imageTiles[i++]=bg.get(cropX,cropY,boxwidth,boxheight);
            }
        }
    }
    */
