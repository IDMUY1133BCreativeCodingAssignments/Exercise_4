var pepperoni, pepper, olive, pineapple, sausage, button, pizza, mushroom; //image variables

var input, enterButton, doneButton, danceButton, cloneButton;
var toppingImg;
var x = 1000; //location of header at top
var index = 0; //used in conjunction with arrays

var dancePressed = false; //determines whether to dance or clone pizza in draw function
var clonePressed = false;

var moveX; //how much to move the pizza to dance
var moveY; 

var locationX = []; //populated with x coordinates of images
var locationY = []; //populated with y coordinates of images
var toppings = []; //populated with topping images

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
    //frameRate(50);
    textFont("Courier New"); //better looking font than default
    createCanvas(1000, 800); 
    angleMode(DEGREES); //used later for rotate
    
    image(pizza, 207, 202, pizza.width/2, pizza.height/2); //is the base pizza, original pizza 
    //too big so made it smaller
    
    textSize(15);
    text(question, 10, 60); //prompts user for topping 
    input = createInput(); //lets the user put in something
    input.position(30, 100);
    enterButton = createButton('enter'); //creates button for person to press
    enterButton.position(160, 100);
    enterButton.mousePressed(addTopping); //when they press on the enter, do add topping function
    doneButton = createButton('done');
    doneButton.position(210, 100);
    doneButton.mousePressed(showOp); //do the showOp function to let user choose between clone and dance
    
}

function draw(){
    if(!dancePressed && !clonePressed){
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
    }
    if(dancePressed){
        fill(255);
        rect(0, 0, 1000, 35);
        fill(random(255), random(255), random(255));
        textSize(25);
        text("DANCE DANCE DANCE DANCE" , x, 25);
        x = x - 2; //moves the header at top
    if(x < 0){
        x = 1000;
    }
        danceNow(); //when dance button has been pressed, it'll make the pizza continuously dance 
        //through draw function
    }
    if(clonePressed){
         fill(255);
        rect(0, 0, 1000, 35); //blocks Welcome to Pizza Builder header
       cloneNow();
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


function mousePressed(){
    if(inPizza()){
        var mouse_X = mouseX;
        var mouse_Y = mouseY;
        locationX[index] = mouseX; //supplies arrays with images to be used when changing pizza
        locationY[index] = mouseY;
        toppings[index] = toppingImg;
        push();
        image(toppings[index], locationX[index], locationY[index]);
        pop();
        index++;
    }
}

function showOp(){
  toppingImg = ""; //resets everything so user can't add more toppings, and gets rid of unnecessary instructions
  noStroke();
  fill(255);
  rect(0, 155, 500, -30);
  input.hide(); //hides buttons so user can't input anything else 
  enterButton.hide();
  doneButton.hide();
  var dance = "Dancing Pizza!!!";
  var clone = "Topping Party!!!";
  danceButton = createButton(dance);
  cloneButton = createButton(clone);
  danceButton.position(30, 100); //positions dance and clone buttons
  cloneButton.position(180, 100);
  danceButton.mousePressed(danceTrue); //does corresponding functions once button pressed
  cloneButton.mousePressed(cloneTrue);
}

function inPizza(){
    //for some reason makes the program crash? 
  // for(var x_ = 622; x > 208; x_--){
    //y = (.575) * x_ + 564;
    //if(mouseX < x_ && mouseY > y){
      // return false;
    //}
   // }
 if(mouseX > 207 && mouseX + toppingImg.width < 697 && mouseY > 202 && mouseY +
    toppingImg.height < 670){ 
        return true;
    }
    else{
        return false;
    }
    
}

function danceTrue(){
    dancePressed = true;
    danceButton.hide(); //hides the buttons once they choose an option 
    cloneButton.hide();
}

function cloneTrue(){
    clonePressed = true;
    cloneButton.hide();
    danceButton.hide();
}

function danceNow(){
    fill(255);
    rect(0,35, 1000, 800);
    moveX = random(-20, 20); //determines how much to move pizza by in it's dancing
    moveY = random(-20,20);
    push();
    scale(.5);
    image(pizza, 298 + moveX, 230 + moveY);
    pop();
    for(var i = 0; i < index; i++){
        push();
        translate(-80, -80); //for small size nuance in pizza png file 
        //because pizza png file is technically rectangular, the coordinates i put in image() were  not accurate coordinates for where the pizza itself started, only the start of the canvas. 
        //so i adjusted the toppings accordingly with the translate
        image(toppings[i], locationX[i] + moveX, locationY[i] + moveY); //moves toppings the same distance
        pop();
    }
    
}


function cloneNow(){
    //inspo from: http://p5js.org/examples/examples/Dom_Input_and_Button.php
    for(var i = 0; i < index; i++){
            push();
            translate(random(width), random(height));
            rotate(random(360));
            image(toppings[i], locationX[i], locationY[i]); //retrieves toppings used from before and     places them somewhere on canvas
            pop();
    }
}
