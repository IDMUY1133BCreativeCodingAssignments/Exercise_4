// PImage font;
PImage SEC;
PImage angrysky;
PImage beachpic;
PImage because;
PImage peacebird;
PImage bush;
PImage fav1;
PImage fav2;
PImage king;
PImage look;
PImage meditate;
PImage motherbird;
PImage nopeace;
PImage paint;
PImage peace;
PImage painting1;
PImage painting2;
PImage painting3;
PImage prize;
PImage question;
PImage thumbs;
PImage wait; 
PImage waterfall; 
PImage why;
int i=0;
int x;
PImage images[]=new PImage [24];
String texts[] = new String[24];
//PFont font;

void setup() {



  SEC = loadImage("2ST.jpg");
  angrysky = loadImage("angry sky.jpg");
  beachpic = loadImage("beachpic.jpg");
  because = loadImage("because.jpg");
  peacebird = loadImage("bird in peace.png");
  bush = loadImage("bush.jpg");
  fav1 = loadImage("favorite painting 1.jpg");
  fav2 = loadImage("favorite picture 2.jpg");
  king = loadImage("king.jpg");
  look = loadImage("look closely.png");
  meditate = loadImage("meditating.jpg");
  motherbird = loadImage("mother bird.jpg");
  nopeace = loadImage("not peaceful.png");
  paint = loadImage("paint.jpeg");
  peace = loadImage("peace.jpg");
  painting1 = loadImage("peaceful painting 1.jpg");
  painting2 = loadImage("peaceful painting 2.jpg");
  painting3 = loadImage("peaceful painting 3.jpg");
  prize = loadImage("prize.jpg");
  question = loadImage("question.jpg");
  thumbs = loadImage("thumbs-up.jpg");
  wait = loadImage("waiting.jpg");
  waterfall = loadImage("waterfall.jpg");
  why = loadImage("why.jpg");


  size(1000, 1000);
  images[0]=king;
  images[1]=prize;
  images[2]=paint;
  images[3]=wait;
  images[4]=painting1;
  images[5]=painting2;//
  images[6]=painting3;
  images[7]=fav1;
  images[8]=thumbs;
  images[9]=fav2;
  images[10]=angrysky;
  images[11]=waterfall;
  images[12]=nopeace;
  images[13]=look;
  images[14]=bush;
  images[15]=motherbird;
  images[16]=peacebird;
  images[17]=question;
  images[18]=SEC;
  images[19]=why;
  images[20]=because;
  images[21]=beachpic;
  images[22]=meditate;
  images[23]=peace;




  //text array
  texts[0]="Once upon a time there was a king";
  texts[1] = "who offered a prize";
  texts[2]="to the artist who would paint the most peaceful picture.";
  texts[3]="Many artists tried.";
  texts[4]="The king looked at all the pictures.";
  texts[5]="But there were only two he really liked,";
  texts[6]="and he had to choose between them.";
  texts[7]="One picture was of a calm lake. The lake was a perfect mirror for peaceful towering mountains all around it. Overhead was a blue sky with fluffy white clouds.";
  texts[8]="All who saw this picture thought that it was a perfect picture of peace.";
  texts[9]="The other picture had mountains, too. But these were rugged and bare. ";
  texts[10]="Above was an angry sky, from which rain fell and in which lightning played.";
  texts[11]="Down the side of the mountain tumbled a foaming waterfall.";
  texts[12]="This did not look peaceful at all.";
  texts[13]="But when the king looked closely, ";
  texts[14]="he saw behind the waterfall a tiny bush growing in a crack in the rock.";
  texts[15]="In the bush a mother bird had built her nest.";
  texts[16]="There, in the midst of the rush of angry water, sat the mother bird on her nest - in perfect peace.";
  texts[17]="Which picture do you think won the prize?";
  texts[18]="The king chose the second picture.";
  texts[19]="Do you know why?'Because,' explained the king, ";
  texts[20]="                 ";
  texts[21]="peace does not mean to be in a place where there is no noise, trouble, or hard work.";
  texts[22]="Peace means to be in the midst of all those things and still be calm in your heart.";
  texts[23]="That is the real meaning of peace.";
}


void draw() {
  background(255);
  point(500, 500);
  peacesign();
  //  fill(0);
  // textSize(200);
  // text(texts[0], 200, 200);
  ifstatements();
  
  
  
  
}
void ifstatements(){ // these will get the picture 
//                      to magnify and tell the story



  if (mouseX>465 && mouseX<565) { //                 picture 0
    if (mouseY>230 && mouseY<330) {
      image(images[0], 200, 200, 700, 700);
      textSize(48);
      fill(0);
      text(texts[0], 100, 00, 900, 200);
    }
  } else {
    setup();
  }
  //                                        picture 1
  if (mouseX>550 && mouseX<650) {
    if (mouseY>250 && mouseY<350) {
      image(images[1], 200, 200, 700, 700);
      textSize(48);
      fill(0);
      text(texts[1], 100, 00, 900, 200);
    }
  } else {
    setup();
  }


  if (mouseX>630 && mouseX<730) { ///           picture 2
    if (mouseY>310 && mouseY<410) {
      image(images[2], 200, 200, 700, 700);
      textSize(48);
      fill(0);
      text(texts[2], 100, 00, 900, 200);
    }
  } else {
    setup();
  }


  if (mouseX>670 && mouseX<770) { //                       3
    if (mouseY>410 && mouseY<510) {
      image(images[3], 200, 200, 700, 700);
      textSize(48);
      fill(0);
      text(texts[3], 100, 00, 900, 200);
    }
  } else {
    setup();
  }

  if (mouseX>670 && mouseX<770) { //                       4
    if (mouseY>510 && mouseY<610) {
      image(images[4], 200, 200, 700, 700);
      textSize(48);
      fill(0);
      text(texts[4], 100, 00, 900, 200);
    }
  } else {
    setup();
  }


  if (mouseX>630 && mouseX<730) { ///                      5
    if (mouseY>610 && mouseY<710) {
      image(images[5], 200, 200, 700, 700);
      textSize(48);
      fill(0);
      text(texts[5], 100, 00, 900, 200);
    }
  } else {
    setup();
  }

  if (mouseX>550 && mouseX<650) {//                  6
    if (mouseY>670 && mouseY<770) {
      image(images[6], 200, 200, 700, 700);
      textSize(48);
      fill(0);
      text(texts[6], 100, 00, 900, 200);
    }
  } else {
    setup();
  }


  if (mouseX>465 && mouseX<565) {//                  7
    if (mouseY>690 && mouseY<790) {
      image(images[7], 200, 200, 700, 700);
      textSize(48);
      fill(0);
      text(texts[7], 100, 00, 900, 200);
    }
  } else {
    setup();
  }




  if (mouseX>380 && mouseX<480) {//                  8
    if (mouseY>670 && mouseY<770) {
      image(images[8], 200, 200, 700, 700);
      textSize(48);
      fill(0);
      text(texts[8], 100, 00, 900, 200);
    }
  } else {
    setup();
  }



  if (mouseX>300 && mouseX<400) {//                  9
    if (mouseY>610 && mouseY<710) {
      image(images[9], 200, 200, 700, 700);
      textSize(48);
      fill(0);
      text(texts[9], 100, 00, 900, 200);
    }
  } else {
    setup();
  }



  if (mouseX>250 && mouseX<350) {//                  10
    if (mouseY>510 && mouseY<610) {
      image(images[10], 200, 200, 700, 700);
      textSize(48);
      fill(0);
      text(texts[10], 100, 00, 900, 200);
    }
  } else {
    setup();
  }



  if (mouseX>250 && mouseX<350) {//                  11
    if (mouseY>410 && mouseY<510) {
      image(images[11], 200, 200, 700, 700);
      textSize(48);
      fill(0);
      text(texts[11], 100, 00, 900, 200);
    }
  } else {
    setup();
  }



  if (mouseX>300 && mouseX<400) {//                  12
    if (mouseY>310 && mouseY<410) {
      image(images[12], 200, 200, 700, 700);
      textSize(48);
      fill(0);
      text(texts[12], 100, 00, 900, 200);
    }
  } else {
    setup();
  }



  if (mouseX>380 && mouseX<480) {//                  13
    if (mouseY>250 && mouseY<350) {
      image(images[13], 200, 200, 700, 700);
      textSize(48);
      fill(0);
      text(texts[13], 100, 00, 900, 200);
    }
  } else {
    setup();
  }



  if (mouseX>480 && mouseX<555) {//                  14
    if (mouseY>320 && mouseY<395) {
      image(images[14], 200, 200, 700, 700);
      textSize(48);
      fill(0);
      text(texts[14], 100, 00, 900, 200);
    }
  } else {
    setup();
  }



  if (mouseX>480 && mouseX<555) {//                  15
    if (mouseY>395 && mouseY<470) {
      image(images[15], 200, 200, 700, 700);
      textSize(48);
      fill(0);
      text(texts[15], 100, 00, 900, 200);
    }
  } else {
    setup();
  }


  if (mouseX>480 && mouseX<555) {//                  16
    if (mouseY>470 && mouseY<545) {
      image(images[16], 200, 200, 700, 700);
      textSize(48);
      fill(0);
      text(texts[16], 100, 00, 900, 200);
    }
  } else {
    setup();
  }


  if (mouseX>480 && mouseX<555) {//                  17
    if (mouseY>545 && mouseY<620) {
      image(images[17], 200, 200, 700, 700);
      textSize(48);
      fill(0);
      text(texts[17], 100, 00, 900, 200);
    }
  } else {
    setup();
  }


  if (mouseX>480 && mouseX<555) {//                  18
    if (mouseY>620 && mouseY<695) {
      image(images[18], 200, 200, 700, 700);
      textSize(48);
      fill(0);
      text(texts[18], 100, 00, 900, 200);
    }
  } else {
    setup();
  }


  if (mouseX>430 && mouseX<480) {//                  19
    if (mouseY>520 && mouseY<570) {
      image(images[19], 200, 200, 700, 700);
      textSize(48);
      fill(0);
      text(texts[19], 100, 00, 900, 200);
    }
  } else {
    setup();
  }

  //                                                   there is no 20 i took it out

  if (mouseX>385 && mouseX<435) {//                  21
    if (mouseY>570 && mouseY<620) {
      image(images[21], 200, 200, 700, 700);
      textSize(48);
      fill(0);
      text(texts[21], 100, 00, 900, 200);
    }
  } else {
    setup();
  }




  if (mouseX>555 && mouseX<605) {//                  22
    if (mouseY>520 && mouseY<570) {
      image(images[22], 200, 200, 700, 700);
      textSize(48);
      fill(0);
      text(texts[22], 100, 00, 900, 200);
    }
  } else {
    setup();
  }

  if (mouseX>605 && mouseX<655) {//                  23
    if (mouseY>570 && mouseY<620) {
      image(images[23], 200, 200, 700, 700);
      textSize(48);
      fill(0);
      text(texts[23], 100, 00, 900, 200);
    }
  } else {
    setup();
  }
}   










void peacesign() {
  image(images[0], 465, 230, 100, 100);
  image(images[1], 550, 250, 100, 100);
  image(images[2], 630, 310, 100, 100);
  image(images[3], 670, 410, 100, 100);
  image(images[4], 670, 510, 100, 100);
  image(images[5], 630, 610, 100, 100);
  image(images[6], 550, 670, 100, 100);
  image(images[7], 465, 690, 100, 100);
  image(images[8], 380, 670, 100, 100);
  image(images[9], 300, 610, 100, 100);
  image(images[10], 250, 510, 100, 100);
  image(images[11], 250, 410, 100, 100);
  image(images[12], 300, 310, 100, 100);
  image(images[13], 380, 250, 100, 100);
  image(images[14], 480, 320, 75, 75);
  image(images[15], 480, 395, 75, 75);
  image(images[16], 480, 470, 75, 75);
  image(images[17], 480, 545, 75, 75);
  image(images[18], 480, 620, 75, 75);
  image(images[19], 430, 520, 50, 50);
  image(images[21], 385, 570, 50, 50);
  image(images[22], 555, 520, 50, 50);
  image(images[23], 605, 570, 50, 50);
}
/*void mouseClicked() {
 
 for (i = 0; i<= images.length-1; i++) {
 image(images[i], 0, 0);
 }
 //noLoop();
 // for(x = 0; x<= story.lengh; x++){
 }
 */