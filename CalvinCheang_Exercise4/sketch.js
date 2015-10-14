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
    //changes to exlamation block on hover
    if(mouseX < 350 && mouseX > 150 && mouseY < 350 && mouseY > 150){
        isOverBlock = true;
        image(exc, 150, 150); 
    }
     if(mouseIsPressed){
         cenation();
         
     
    
 
     }
}

function cenation(){
    if(isOverBlock == true){
        //block stays exclamation
        image(exc, 150, 150);
        //random pics of cena pop up
        image(cena2, random(-1800,1800), random(-1800,1800));
        image(cena3, random(-1800,1800), random(-1800,1800));
        image(cena4, random(-1800,1800), random(-1800,1800));
        image(cena5, random(-1800,1800), random(-1800,1800));
        //green bar on bottom
        fill(0,205,0);
    rect(0,395,500, 60);
    fill(255);
text("JOHN CENA", x,450);
    x-=5;
        //rolling text
    if(x < -500){
        x=500;
    }
        fill(0, 205,0);
    rect(0,0, 500, 50);
        textSize(40);
        fill(255);
        text(lyrics, y, 40);
        y-=5;
        if(y < -2500){
            y = 500;
        
    }
}

}
