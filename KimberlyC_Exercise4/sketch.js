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
    picCountX = mouseX/300; // generates a varible based on the XY coordinates of the mouse
    picCountY = mouseY/300; 
    newPicX = width/picCountX; // setting a variable for XY coordinates of the new picture 
    newPicY = height/picCountY; 
    for (var gridY = 0; gridY < height; gridY += newPicY){ // draws a picture every time the coordinates of grid is less than the size of the canvas, adding the coordinates of the new picture, starting at 0
        for (var gridX = 0; gridX < width; gridX += newPicX){ 
            image(water1, gridX, gridY, newPicX, newPicY);
        }
    }
}

// Taken from the example in Generative Design by Hartmut Bohnacker, Benedikt GroB, Julia Laub, and Claudius Lazzeroni, page 288 (P.4.0)