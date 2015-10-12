var theFont;

var input = prompt("Please enter your text");

//var [] fontSizes = new var[input.length()];
var minFontSize = 15;
var maxFontSize = 800;
var newFontSize = 0;

var spacing = 2; // line height
var tracking = 0; // between letters

var fontSizes = new Array(input.length);

var coefficient; //variable that we use to map a value for the fontSizes in the array


function preload(){
	
	theFont = loadFont('data/NexaRustScriptL.otf');
}

function setup(){
	createCanvas(800, 600);
    stroke(100);
    noFill();
	textFont(theFont);
    
    
     // initializing the fontSizes array where we store the font sizes
    for (var i = 0; i < input.length; i++){
        fontSizes[i] = minFontSize;
  }
	
}

function draw(){
    text(input);
    
    
	background(255);
    
    action();
	
	}


function action(){
    
  //translate(0, 250+distance);

  var x = 0;
  var y = 0;
  var fontSize = 10;
    
  for (var i = 0; i < fontSizes.length; i++) {
      //modify the fontsizes using the y coordinate of the mouse
      coefficient = Math.random();
      fontSizes[i] = map(coefficient, 0, 1, minFontSize, maxFontSize);
  }
    

      

  for (var i = 0; i < input.length; i++) {
    // get fontsize for the actual letter from the modified fontSizes array
    fontSize = fontSizes[i];
    var letter = input.charAt(i);
    var letterWidth = fontSize;
  }
    
    if (x+letterWidth > width) {
      // start new line starting from the highest font size possible
      x = 0;
      y += maxFontSize; 
    }
      
    // draw letter
    text(letter, x, y);
    // update x-coordinate for next letter
    x += letterWidth;

	
}


