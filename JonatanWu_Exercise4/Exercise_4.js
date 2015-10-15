
// A pic, with a circle zoom function, zooms in when clicked ?


var  image1;
var  image2;
var  zoom = 1;
var  x = 1366;
var  image3;
var  y = 0;
var  x1 =1500;


function preload() {
    
    image1 = loadImage("data/back.jpg");
    image2 = loadImage("data/Spaceback.jpg"); // Default
    image3 = loadImage("data/Spaceback2.jpg");
    
}


function setup() {
    createCanvas(1366, 667);   
}


function draw() {
    
    background(image2);
    words();
    glass();
    
     if (keyIsPressed) {
         if (keyIsPressed == 'a' || 'A'){
        background(image3, 1366,667);
     }
     }
    
}

    
function glass() {
    
    fill(50, 150, 200, 60);
    stroke();
    strokeWeight(4);
    ellipse(mouseX, mouseY, y, y);
    y = y + 1;
    if ( y <= 100) {
        y = 50;
        
    }
    
    
         }

function words() {
    
      fill(214, 147, 45,100);
    smooth();
    textFont('Courier New');
    noStroke();
    textSize(50);
    text("by Jon.W", x1, 600);
    x1 -= .5;
    if ( x1 < -1000) {
        x1 = 500;
    }
     fill(250, 85, 90,100);
    smooth();
    textFont('Courier New');
    noStroke();
    textSize(75);
    text("Space Telescope", x, 75);
    x -= 1;
    if ( x < -1000) {
        x = 1000;
    }
}






    
        


    
    


