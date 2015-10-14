
// A pic, with a circle zoom function, zooms in when clicked ?


var  image1;
var  image2;
var  text1;
var  text2;


function preload() {
    
    image1 = loadImage("data/back.jpg");
    image2 = loadImage("data/Spaceback.jpg");
    text1 = loadFont("data/space 1.TTF");
    text2 = loadFont("data/BM space A9.ttf");    
    
}



function setup() {
    createCanvas(1366, 667);   
}


function draw() {
    
    //background with box
    background(image2);
    rectMode(CENTER);
    fill(50, 150, 200, 80);
    noStroke();
    ellipse(mouseX, mouseY, 150, 150);
    
    
    // if mousePressed Zoom in pic, if released zoom out
    if (mousePressed) {
    }
    
    // if keyPressed a new image appears, No release event
    if (keyPressed) {
    }
    
        
    
    fill(255);
    textFont('text1');
    textSize(100);
    text("Space The Game", width/2-20, 50);
    

    
    
}

