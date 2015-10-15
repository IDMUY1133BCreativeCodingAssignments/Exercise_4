var img1,img2,img3,img4,img5,img6;
var font;
//var right1, right2, right3, left1, left2, left3;
var x,y;


function preload(){
    
    img1 = loadImage("data/righteye1.jpg");
    img2 = loadImage("data/righteye2.jpg");
    img3 = loadImage("data/righteye3.jpg");
    img4 = loadImage("data/lefteye1.jpg");
    img5 = loadImage("data/lefteye2.jpg");
    img6 = loadImage("data/lefteye3.jpg");
    
    font = loadFont("data/NexaRustScriptL.otf");
    
   
    
}

function setup() {
  createCanvas(900, 600);
  //background(210, 224, 214);
  
    frameRate(10);
    
}

function draw() {

  /*head();
    background(255);
    img1.resize(300,267);
    img2.resize(300,265);
    img3.resize(300,238);
    img4.resize(300,267);
    img5.resize(300,265);
    img6.resize(300,238);
    
    image(img1,600,300);
    image(img4,300,300);
    */
    
    board();
    
    if(mouseX>0 && mouseX<225 && mouseY>0 && mouseY<200){
        img4.resize(225,200);
        image(img4,0,0);
    }else if(mouseX>225 && mouseX<450 && mouseY>0 && mouseY<200){
        img4.resize(225,200);
        image(img4,225,0);
    }else if(mouseX>450 && mouseX<675 && mouseY>0 && mouseY<200){
        img1.resize(225,200);
        image(img1,450,0);
    }else if(mouseX>675 && mouseX<900 && mouseY>0 && mouseY<200){
        img1.resize(225,200);
        image(img1,675,0);
        
        //eye2
        
    }else if(mouseX>0 && mouseX<225 && mouseY>200 && mouseY<400){ 
        img5.resize(225,200);
        image(img5,0,200);
    }else if(mouseX>675 && mouseX<900 && mouseY>200 && mouseY<400){
        img2.resize(225,200);
        image(img2,675,200);
        
        //eye3
        
    }else if(mouseX>0 && mouseX<225 && mouseY>400 && mouseY<600){
        img6.resize(225,200);
        image(img6,0,400);
    }else if(mouseX>225 && mouseX<450 && mouseY>400 && mouseY<600){
        img6.resize(225,200);
        image(img6,225,400);
    }else if(mouseX>450 && mouseX<675 && mouseY>400 && mouseY<600){
        img3.resize(225,200);
        image(img3,450,400);
    }else if(mouseX>675 && mouseX<900 && mouseY>400 && mouseY<600){
        img3.resize(225,200);
        image(img3,675,400);
        
        //script
    }else if(mouseX>225 && mouseX<675 && mouseY>200 && mouseY<400){
        fill(255);
        rect(225, 200, 450,200);
        fill(0);
        textFont(font, 200);
        text("BLINK",430,300);
        
    }
}

function board(){
    //initialize variables
    r1=random(255);
    g1=random(255);
    b1=random(255);
    
    r2=random(255);
    g2=random(255);
    b2=random(255);
    
    r3=random(255);
    g3=random(255);
    b3=random(255);
    
    
    fill(r1,g1,b1);
    rect(0,0,225,200);
    fill(r2,g2,b2);
    rect(450,0,225,200);
    fill(r3,g3,b3);
    rect(225,200,225,200);
    fill(r2,g2,b2);
    rect(675,200,225,200);
    fill(r1,g2,b3);
    rect(0,400,225,200);
    fill(r3,g3,b3);
    rect(450,400,225,200);
    fill(r1,g3,b1);
    rect(225,0,225,200);
    fill(r1,g2,b2);
    rect(675,0,225,200);
    fill(r3,g2,b3);
    rect(0,200,225,200);
    fill(r1,g3,b1);
    rect(450,200,225,200);
    fill(r2,g3,b1);
    rect(225,400,225,200);
    fill(r3,g2,b1);
    rect(675,400,225,200);

}

function mousePressed(){
    
}

