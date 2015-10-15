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

/*function head() {

  //skin
  fill(247, 206, 183);
  noStroke();
  triangle(100, 326, 150, 166, 112, 414);
  stroke(0);

  //eyeliner
  fill(23, 21, 77);
  triangle(120, 312, 120, 320, 156, 336);
  triangle(168, 332, 150, 332, 156, 336);

  //eyeball
  fill(255, 255, 255);
  triangle(148, 332, 120, 320, 126, 340);

  //eye
  fill(0, 0, 0);
  ellipse(124, 330, 14, 22);

  //eyelash
  line(120, 316, 106, 318);
  line(112, 324, 120, 316);

  //eyebrow
  triangle(130, 294, 132, 286, 156, 300);
  strokeWeight(4);
  strokeCap(SQUARE);
  line(94, 292, 130, 290);
  noStroke();

  //lips
  fill(240, 161, 158);
  triangle(98, 468, 138, 466, 98, 448);
  triangle(92, 436, 98, 448, 138, 466);

  //bronzer
  fill(232, 164, 119);
  triangle(180, 414, 214, 474, 284, 372);

  //hair
  fill(17, 70, 73, 200);
  ellipse(334, 198, 284, 284);
  fill(38, 147, 108, 230);
  ellipse(426, 286, 150, 254);
  triangle(416, 82, 352, 312, 278, 128);
  fill(36, 128, 100, 230);
  triangle(150, 166, 202, 246, 278, 128);
  fill(38, 147, 108, 200);
  triangle(202, 246, 314, 216, 278, 128);
  triangle(202, 246, 278, 366, 314, 216);
  fill(36, 123, 18, 100);
  triangle(248, 82, 278, 128, 44, 190);
  triangle(278, 66, 106, 118, 44, 190);
  triangle(86, 286, 44, 190, 148, 158);
  fill(38, 147, 108, 230);
  triangle(500, 256, 578, 414, 386, 644);
  triangle(334, 678, 462, 382, 414, 380);
  triangle(522, 644, 434, 382, 578, 414);

  //ear
  fill(247, 206, 183);
  ellipse(352, 380, 84, 110);
  triangle(112, 190, 86, 286, 150, 166);
  triangle(86, 286, 98, 324, 150, 166);
  triangle(98, 406, 92, 436, 138, 466);
  triangle(98, 406, 116, 414, 138, 466);

  //nose
  triangle(68, 394, 98, 324, 116, 414);
  fill(38, 147, 108, 230);
  triangle(398, 380, 434, 398, 270, 612);
}*/
