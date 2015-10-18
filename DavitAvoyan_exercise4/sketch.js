var theFont;  //variable to hold our font

var input = prompt("Please enter your text. Then move your mouse to interact with the collage.");  //user input

var minFontSize = 45;  //starting font size

var fontSizes = new Array(input.length);  //setting the array for fontSizes the same length as user input

var velocity = 1;  //modifier for x coordinate of letters

var coefficient; //variable that we use to map a value for the fontSizes in the array


function preload(){
	
	theFont = loadFont('data/font1.otf');  //font
    img = loadImage('data/Leo_city.png'); //image
}

function setup(){
	createCanvas(1920, 1280);
    background(255);

    stroke(100);
    noFill();
	textFont(theFont);  
    
    
     // initializing the fontSizes array where we store the font sizes
    for (var i = 0; i < input.length; i++){
        fontSizes[i] = minFontSize;
  }
	
}

function draw(){
    background(255);
    image(img, 0, 0);  
    action();
    rhythm();
 
       
}
    
        
function rhythm(){  //making a grid
    
  var countX = mouseX/3+7;  
  var countY = mouseY/3+7;
  var stepX = width/countX;
  var stepY = height/countY;
  for (var gridY = 0; gridY < height; gridY += stepY){  //creating the grid of the collage
        for (var gridX = 400; gridX < width; gridX += stepX){  //leaving room at the x coordinate, for the user's input to show up
          image(img, gridX, gridY, stepX, stepY);  
   /* while(mouseup){
        var decimal_x_img = Math.floor(Math.random() * width) + 1;
        var x_img = Math.round(decimal_x_img);
          image(img, x_img, 0);  
          }*/
}
  }
}


function action(){  //outputting user input
    
    fill(0);
    
    var x = 100;  //starting coordinates for the first letter
    var y = 100;
    var c = 3; //coefficient to increase the font size

    
     for (var i = 0; i < fontSizes.length; i++) {  //changing the fontSizes from minimum (45) to increasing in order
       var fontSize = i * c * 10;
      fontSizes[i] = fontSize;
      
  }
    
     for (var i = 0; i < input.length; i++) {
        // get fontsize for the actual letter from the already modified fontSizes array
        textFont(theFont, fontSizes[i]);
        var letter = input.charAt(i);
        var letterWidth = fontSizes[i];
        text(letter, x, y);  //outputting each letter
        x=x+letterWidth; 
        y=y+fontSizes[i];
         
         }

    
    // x=x+mouseX+velocity;
    
     if((x > width || x < 0)){  //bounce back once it reaches the bounds of our canvas
         velocity = -velocity;
         
  }
    
    
 
	
}

