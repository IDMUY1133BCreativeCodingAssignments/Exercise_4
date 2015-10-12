//PIZZA BUILDER
//lets the user input toppings they'd like given specific list
//rotates toppings, either let user place topping or randomly place down 
//when pizza is done, maybe give user the option to either:
//clone pizza(cover canvas with pizza) 
//(maybe) make a word pizza - convert image all to text
//just make the pizza "dance" and move around the screen and rotate

//TO DO: implement statement when user doesn't input correctly
//find a way to erase instruction text after each runtime so the words won't overlap 
var pepperoni, pepper, olive, pineapple, sausage, button, pizza,
input, button;
var toppingImg;
var mouseX;
var mouseY; 

var header = "Welcome to Pizza Builder!";
var question = "Which topping would you like? Type your answer in all lowercase please. Your choices are pepperoni, pepper, \n sausage, pineapple, and olive."; 
var instruction = "Click where you'd like to add ";
var wrong = "Invalid input. Make sure you're typing in all lowercase.";

var acceptedTop = false;

function preload(){
    pizza = loadImage("data/basepizza.png"); //.jpg doesn't support transparency 
    pepper = loadImage("data/pepper.png");
    olive = loadImage("data/olive.png");
    pineapple = loadImage("data/pineapple.png");
    pepperoni = loadImage("data/pepperoni.png");
    sausage = loadImage("data/sausage.png");
}

function setup(){
    createCanvas(1000, 800); 
    angleMode(DEGREES);
    image(pizza, 0, height/7, pizza.width/2, pizza.height/2);
    textSize(25);
    text(header, 10, 30);
    textSize(20);
    text(question, 10, 60); 
    input = createInput();
    input.position(30, 100);
    button = createButton('enter');
    button.position(160, 100);
    button.mousePressed(addTopping);
    //button.mousePressed(addTopping);
}

function draw(){

}

function addTopping(){
    var topping = input.value();
    acceptedTop = true;
    if(topping == "pepper"){
         text(instruction + topping + "!", 10, 145);
         toppingImg = pepper;
    }
    else if(topping == "olive"){
         text(instruction + topping + "!", 10, 145);
        toppingImg = olive;
    }
    else if(topping == "pineapple"){
        text(instruction + topping + "!", 10, 145);
        toppingImg = pineapple;
    }
    else if(topping == "pepperoni"){
         text(instruction + topping + "!", 10, 145);
        toppingImg = pepperoni;
    }
    else if (topping == "sausage"){
         text(instruction + topping + "!", 10, 145);
        toppingImg = sausage;
    }
    else if (topping == "mushroom"){
        text(instruction + topping + "!", 10, 145);
        toppingImg = mushroom;
    } 
    //have statement for when if doesn't work 
    //rotateTopping();
    //placeTopping();
}

function placeTopping(){
        //check to make sure user placed within bounds of pizza
    }

function rotateTopping(){ //rotate the topping so it looks more ""realistic"" 
    pushMatrix();
    rotate(random(-180, 180));
    popMatrix();
}
function mousePressed(){
    if(acceptedTop){
    image(toppingImg, 500, 500);
    }
    else{
        acceptedTop = false;
    }
}
