//goal is to have a spinning ferris wheel in the center 
//the sky is made up of a collage of photos (from my cony island trip)
//I'd also like the time of day to change (shown by the change of sky color)

var img;



function preload(){
    img = loadImage("data/imageedit_1_5035011954.gif");
    
    
    
}

function setup(){
    createCanvas(800, 800);
    
}


function draw(){
    background(0);
    //image(img,100,25);
    //fill(50,0,200,200);
    //rect(0,0,800,800);
    image(img,270,530);
    //wheel();
    strokeWeight(1);
    stroke(200,0,0);
    fill(255);
    textSize(25);
    textFont("Impact");
    text("Wonder", width/2-39 ,644);
      text("Wheel", width/2-31 ,666);
  
   
}

function wheel(){
    
    strokeWeight(10);
    stroke(200,40,75);
    fill(0,0,0,0);
    ellipse(width/2,height/2, 300,300);
    line(250,400,550,400);
    line(400,250,400,550);
    
}