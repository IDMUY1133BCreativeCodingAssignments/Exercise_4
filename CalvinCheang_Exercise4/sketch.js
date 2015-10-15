var button;
var cena;
var cena2, cena3, cena4, cena5;
var words;
var exc;
var que;
var isOverBlock;
var x = 400;
var y = 500;
var lyrics;
var tilt = 0;


function preload(){
    cena = loadImage('data/cena.png');
    exc = loadImage('data/exclamationblock.png');
    que = loadImage('data/questionblock.png');
    cena2 = loadImage('data/cena2.png');
     cena3 = loadImage('data/cena3.png');
     cena4 = loadImage('data/cena4.png');
     cena5 = loadImage('data/cena5.png');
    lyrics = "Your time is up, my time is now You can't see me, my time is now It's the franchise, boy I'm shinin' now You can't see me, my time is now!";

}

function setup(){
    createCanvas(500,500);
    
    
}

function draw(){
    stroke(0);
    textSize(72);
    //question block
    image(que, 150, 150);
    //changes to exclamation block on hover
    if(mouseX < 350 && mouseX > 150 && mouseY < 350 && mouseY > 150){
        isOverBlock = true;
        image(exc, 150, 150); 
    }
     if(mouseIsPressed){
         cenation();
         image(exc, 150, 150); 
         //fixed the bug where images pop up in the center randomly
     }
   

//    image(exc, 150, 150); 
}

function cenation(){
    if(isOverBlock == true){
        //block stays exclamation
        image(exc, 150, 150);
        //cenas are titlted randomly when spawned
         push();
        rotate(tilt);
        cenas();
        tilt++;
        pop();
          
        //green bar on bottom
        fill(0,205,0);
    rect(0,439,500, 60);
    fill(random(0,255), random(0,255), random(0,255));
text("JOHN CENA", 50,495);
    x-=5;
        //rolling text
    if(x < -500){
        x=500;
    }
        fill(0, 205,0);
        //green rect on top
    rect(0,0, 500, 50);
        textSize(40);
        fill(255);
        //scrolling lyrics
        text(lyrics, y, 40);
        y-=5;
        if(y < -2500){
            y = 500;
        
    }
}

}
//spawn cenas at random locations
function cenas(){
    image(cena2, random(-1000,1000), random(-1000,1000));
        image(cena3, random(-1000,1000), random(-1000,1000));
        image(cena4, random(-1000,1000), random(-1000,1000));
        image(cena5, random(-1000,1000), random(-1000,1000));
}
