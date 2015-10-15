//var fontH; 
var imgAlbum; 

var sky;
var sky2;
var sky3; 

var ypos = 600; 
var xpos = 600; 
var speed = 2; 

var hitTop = false;

var eachLine = ''; 
var pieceEn; 

function preload(){
    pieceEn = loadStrings('pieceofyouen.txt'); 
   // fontH = loadFont('NexaRustHandmade.otf');
    imgShoe = loadImage('shoebox.png');
    sky = loadImage('img/sky.png');
    sky2 = loadImage('img/sky2.png');
    sky3 = loadImage('img/sky3.png');
    stringL = "Your eyes\n are the first mirror of my existence.\n I see the reflection of my youth.\n I want to be that again for you.\n Your twin stars\n make the gigantic galaxy\n colorless.";
    stringF= "Dedicated to You...";
                    
}

function setup(){      
    createCanvas(600,600);
    
    //heartFly();
}

function draw(){
    image(imgShoe,0,0); 
    imgShoe.resize(height,width);
    piece();
    
    
    //REFERENCE: coursescript
    var x = 10;
    for (var i = 0; i < 100; i++) {
        fill(0);
        stroke(23,43,14);
        textFont('Georgia');
        textSize(random(12,64));
        text(stringF.charAt(i),x , 500);
        x +=             textWidth(stringF.charAt(i)); 
}
    
}


function piece(){
    ypos -= speed;
    if(keyIsPressed){
        textFont('Georgia',30);
        text(stringL,10,ypos);
    }
    else{
    
    
    image(sky3,300,ypos);
    image(sky,10,ypos);
    image(sky2,400,ypos);
    sky2.resize(300,200);
    
    
    
    }
}