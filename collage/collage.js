 var font;
 var SEC;
 var angrysky;
 var beachpic;
 var because;
 var peacebird;
 var bush;
 var fav1;
 var fav2;
 var king;
 var look;
 var meditate;
 var motherbird;
 var nopeace;
 var paint;
 var peace;
 var painting1;
 var painting2;
 var painting3;
 var prize;
 var question;
 var thumbs;
 var wait; 
 var waterfall; 
 var why;
 var i = 0;
var x = 0;
var images = [king, prize, paint, wait, painting1, painting2, painting3, fav1, thumbs, fav2, angrysky, waterfall, nopeace, look, bush, motherbird, peacebird, question, SEC, why, because, beachpic, meditate, peace];
 var story = [ "Once upon a time there was a king", "who offered a prize to the artist", "who would paint the most peaceful picture.", "Many artists tried.", "The king looked at all the pictures.", "But there were only two he really liked,", "and he had to choose between them.", "One picture was of a calm lake. The lake was a perfect mirror for peaceful towering mountains all around it. Overhead was a blue sky with fluffy white clouds.", "All who saw this picture thought that it was a perfect picture of peace.",
"The other picture had mountains, too. But these were rugged and bare.", "Above was an angry sky, from which rain fell and in which lightning played.", "Down the side of the mountain tumbled a foaming waterfall.", "This did not look peaceful at all.", "But when the king looked closely, he saw behind the waterfall", "a tiny bush growing in a crack in the rock.", "In the bush a mother bird had built her nest.", "There, in the midst of the rush of angry water, sat the mother bird on her nest - in perfect peace.", "Which picture do you think won the prize?", "The king chose the second picture.", "Do you know why?", "Because, explained the king,", "peace does not mean to be in a place where there is no noise, trouble, or hard work.", "Peace means to be in the midst of all those things and still be calm in your heart.", "That is the real meaning of peace."];


               
function preload(){
 font = loadFont("data/NexaRustScriptL.otf");
 SEC = loadImage("data/2ST.jpg");
 angrysky = loadImage("data/angry sky.jpg");
 beachpic = loadImage("data/beachpic.jpg");
 because = loadImage("data/because.jpg");
 peacebird = loadImage("data/bird in peace.png");
 bush = loadImage("data/bush.jpg");
 fav1 = loadImage("data/favorite painting 1.jpg");
 fav2 = loadImage("data/favorite picture 2.jpg");
 king = loadImage("data/king.jpg");
 look = loadImage("data/look closely.png");
 meditate = loadImage("data/meditating.jpg");
 motherbird = loadImage("data/mother bird.jpg");
 nopeace = loadImage("data/not peaceful.png");
 paint = loadImage("data/paint.jpeg");
 peace = loadImage("data/peace.jpg");
 painting1 = loadImage("data/peaceful painting 1.jpg");
 painting2 = loadImage("data/peaceful painting 2.jpg");
 painting3 = loadImage("data/peaceful painting 3.jpg");
 prize = loadImage("data/prize.jpg");
 question = loadImage("data/question.jpg");
 thumbs = loadImage("data/thumbs-up.jpg");
 wait = loadImage("data/waiting.jpg");
 waterfall = loadImage("data/waterfall.jpg");
 why = loadImage("data/why.jpg");
}

function setup(){
    
    createCanvas(1000,1000);
}



function draw(){
    
 image(images[i], 400, 400); 
 text(story[x], 500, 400);    
    
    
}
function mouseClicked(){

   for(i = 0; i<= images.length; i++){
 
   }
    for(x = 0; x<= story.lengh; x++){
        
    }

}


   