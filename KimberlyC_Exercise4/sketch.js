var water1;
var picCountX;
var picCountY;
var newPicX;
var newPicY;
var gridX;
var gridY;

function preload(){
    water1 = loadImage("data/water1.jpg");
    
}

function setup(){
    createCanvas(600,600);
}

function draw (){
    picCountX = mouseX/5;
    picCountY = mouseY/5;
    newPicX = width/picCountX;
    newPicY = height/picCountY;
    for (var gridY = 0; gridY < height; gridY += newPicY){
        for (var gridX = 0; gridX < width; gridX += newPicX){
            image(water1, gridX, gridY, newPicX, newPicY);
        }
    }
}