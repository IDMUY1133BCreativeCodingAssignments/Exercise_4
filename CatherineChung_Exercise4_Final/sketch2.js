
var imgAlbum; 
//image variables
var sky;
var sky2;
var sky3; 
var heart;
var heartp;
var heartr;

//variables for function piece()
var x;
var i;
var s;
var imgs;
// variables for the changing position and speed for the images
var pos = 600;
var ypos = 600; 
var ySpos = 600;
var speed = 2; 
var sp = 1.6;
var sSpeed = 1.3;

var hitTop = false;

var eachLine = ''; 
var pieceEn; 

function preload(){
   // pieceEn = loadStrings('pieceofyouen.txt'); 
   // fontH = loadFont('NexaRustHandmade.otf');
    imgShoe = loadImage('shoebox.png');
    sky = loadImage('img/sky.png');
    sky2 = loadImage('img/sky2.png');
    sky3 = loadImage('img/sky3.png');
    heart = loadImage('img/heart.png');
    heartp= loadImage('img/heartp.png');
    heartr = loadImage('img/heartr.png');
    
    stringL = "Your eyes\n are the first mirror of my existence.\n I see the reflection of my youth.\n I want to be that again for you.\n Your twin stars\n make the gigantic galaxy\n colorless.\nThe river flows \n in the place of my sadness.\n I want to refill your tears \nin the eyes where I slept and hid.\n During that brief time \n when you were my world, \n Your two hands \n Were the first scales of my life\n Measuring the lies and truths of the world.";
    stringF= "Dedicated to You...";
                    
}

function setup(){      
    createCanvas(600,600);
    
}

function draw(){
    image(imgShoe,0,0); 
    imgShoe.resize(height,width);
    piece();
  /*piece(90,1,0.8,sky3);
    piece(140,2,1,sky);
    piece(250,3,0.5,sky3);
   */ 
    
    
    //REFERENCE: coursescript
    // This makes the "dedicated to you" on the bottom of the page change character size in a loop
    var x = 10;
    for (var i = 0; i < 100; i++) {
        fill(0);
        stroke(23,43,14);
        textFont('Georgia');
        textSize(random(12,64));
        text(stringF.charAt(i),x , 500);
        x += textWidth(stringF.charAt(i)); 
    }
    
}

function piece(){ 
    //high speed (changing position over time)
    ypos -= speed;
    //slow speed (changing position over time)
    pos -= sp;
    ySpos -= sSpeed;
/*  when a key is pressed, the images floating to the top of the page 
    will turn into the first few lyrics of the song.
*/
    if(keyIsPressed){
        fill(0);
        stroke(40,40,255);
        textFont('Georgia',30);
        text(stringL,10,ypos);
    }
    else{
        //high speed items 
          image(sky3,240,ypos);
          image(sky,10,ypos);
          sky.resize(250,150);   //need to make the image smaller
          image(sky2,400,ypos);
          sky2.resize(200,100);  //need to make the image smaller
          image(heartp,150,pos);
        //slow speed items
          image(heartr,50,ySpos);
          heartr.resize(150,100); //need to make the image smaller
          image(heartp,400,ySpos);
          heartp.resize(200,150); //need to make the image smaller
          image(sky,300,ySpos);
          image(heartr,270,pos);
          // title on top of the image 
          textFont('Georgia',50);
          text('Pieces of You',150,100);
    }
}

//attempting to pass in parameters for the moving images. 
/*
function piece(x,i,s,imgs){
    ypos -= s;
    if(keyIsPressed){
        textFont('Georgia',30);
        text(pieceEn[i],x,ypos);
    }
    else{
        image(imgs,x,ypos);
        image(sky,x,ypos);
        sky2.resize(250,150);
        image(sky2,x,ypos);
        sky2.resize(200,100);
    }
}
*/