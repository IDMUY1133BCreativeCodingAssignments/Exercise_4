//PIZZA BUILDER
//rotates toppings, either let user place topping or randomly place down 
//when pizza is done, maybe give user the option to either:
//clone pizza(cover canvas with pizza) 
//just make the pizza "dance" and move around the screen and rotate

//TO DO: implement statement when user doesn't input correctly
//find a way to erase instruction text after each runtime so the words won't overlap 
var pepperoni, pepper, olive, pineapple, sausage, button, pizza, mushroom,
input, enterButton, doneButton;
var toppingImg;
var x = 800;
var danceButton;
var cloneButton;
var dancePressed = false;
var clonePressed = false;

var header = "Welcome to Pizza Builder!";
var question = "Which topping would you like? Type your answer in all lowercase please. Your choices are pepperoni, pepper, \n sausage, pineapple, mushroom, and olive."; 
var instruction = "Click where you'd like to add ";
var wrong = "Invalid input. Make sure you're typing in all lowercase.";


function preload(){
    pizza = loadImage("data/basepizza.png"); //.jpg doesn't support transparency 
    pepper = loadImage("data/pepper.png");
    olive = loadImage("data/olive.png");
    pineapple = loadImage("data/pineapple.png");
    pepperoni = loadImage("data/pepperoni.png");
    sausage = loadImage("data/sausage.png");
    mushroom = loadImage("data/mushroom.png");
}

function setup(){
    textFont("Courier New");
    createCanvas(1000, 800); 
    angleMode(DEGREES);
    image(pizza, 0, height/5, pizza.width/2, pizza.height/2); //is the base pizza
    textSize(15);
    text(question, 10, 60); //requests
    input = createInput(); //lets the user put in something
    input.position(30, 100);
    enterButton = createButton('enter'); //creates button for person to press
    enterButton.position(160, 100);
    enterButton.mousePressed(addTopping); //when they press on the enter, do add topping function
    doneButton = createButton('done');
    doneButton.position(210, 100);
    doneButton.mousePressed(showOp);
    
}

function draw(){
    noStroke();
    fill(255);
    rect(0, 0, 1000, 35); //prevents a whole strip of "Welcome to Pizza Builder" to show
    fill(0);
    textSize(25);
    text(header, x, 25);
    x = x - 2; //moves the header at top
    if(x < 0){
        x = 1000;
    }
    if(dancePressed){
        danceNow(); //when dance button has been pressed, it'll make the pizza continuously dance 
        //through draw function
    }
    if(clonePressed){
        cloneNow(); //when clone button has been pressed, it'll clone the pizza in canvas
    }
}

function addTopping(){
    var topping = input.value();
    fill(255);
    noStroke();
    rect(0, 155, 500, -30); //puts a rectangle down so text successfully refreshes 
    fill(0);
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
    else{
        text("Incorrect entry. Try again.", 10, 145);
             toppingImg = ""; //if they type something wrong it tells them and doesn't place anything 
        }
    
}

/*
function rotateTopping(topping_Img){ //rotate the topping so it looks more ""realistic""?
    rotate(random(-180, 180));
}
*/
function mousePressed(){
    if(inPizza()){
        var mouse_X = mouseX;
        var mouse_Y = mouseY;
        push();
        rotate(random(0, 30));
        image(toppingImg, mouse_X, mouse_Y);
        pop();

    }
}

function showOp(){
  input.hide(); //hides buttons so user can't input anything else 
  enterButton.hide();
  var dance = "Make the pizza dance.";
  var clone = "Clone the pizza!";
  danceButton = createButton(dance);
  cloneButton = createButton(clone);
  danceButton.position(30, 100);
  cloneButton.position(180, 100);
  danceButton.mousePressed(danceTrue);
  cloneButton.mousePressed(cloneTrue);
}

function inPizza(){
    if(mouseX > 291 && mouseX < 700 && mouseY > 200 && mouseY < 668){
        return true;
    }
    else{
        return false;
    }
    
}

function danceTrue(){
    dancePressed = true;
    doneButton.hide();
    danceButton.hide();
}

function cloneTrue(){
    clonePressed = true;
    donebutton.hide();
    cloneButton.hide();
}

function danceNow(){
    //constrain? 
    //
}

function cloneNow(){
    //http://p5js.org/examples/examples/Dom_Input_and_Button.php
    //for (var times = 300; times > 0; times--){
    //push();
    //translate(random(width), random(height));
    //rotate(random(180));
    //pop();
    //}
    
}
