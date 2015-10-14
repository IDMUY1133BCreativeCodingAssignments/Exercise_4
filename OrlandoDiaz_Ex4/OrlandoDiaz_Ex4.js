var quotes;
var pixelart;
var Cartman;
var Kenny;
var Kyle;
var Stan;
var Kennydied;
var thundercloud;
var Butters;
var welcome;
var quotegroup1 = ['Gay Fish', 'I learned something today', 'respect my authoritah'];
var quotegroup2 = ['Mmmmf', 'Hello there children', 'What a terrific audience'];
var quotegroup3 = ['Mkay', 'Screw you guys Im going home', 'TIMMY'];
var quotegroup4 = ['Oh hamburgers', 'Howdy Ho', 'Tom Cruise wont come out of the closet'];
var quotegroup5= ['I thought this was America', 'Aaaand its gone', 'Manbearpig'];
var quotegroup6 = ['Im not your buddy guy', 'Oh my God they killed Kenny', 'YOU BASTARDS'];
var quotegroup7 = ['They took er jobs', 'Professor Chaos', 'Welcome to City Wok'];
var choosequote1 = floor(random(quotegroup1.length));
var choosequote2 = floor(random(quotegroup2.length));
var choosequote3 = floor(random(quotegroup3.length));
var choosequote4 = floor(random(quotegroup4.length));
var choosequote5 = floor(random(quotegroup5.length));
var choosequote6 = floor(random(quotegroup6.length));
var choosequote7 = floor(random(quotegroup7.length));
var y = 0;
var x = 0;
        /*
        textFont(quotes, 20);
        text(quotegroup1[choosequote1], 0, -20);
        text(quotegroup2[choosequote2], 30, 0);
        text(quotegroup3[choosequote3], 150, -10);
        text(quotegroup4[choosequote4], 300, -3);
        text(quotegroup5[choosequote5], 400, 10);
        text(quotegroup6[choosequote6], 450, 30);
        text(quotegroup7[choosequote7], 600, 0);
        I'm trying to take quotes and display them so they can move down but I can't display the text, I'm super confused. I'd also like to make text and images appea after I clicked my mouse but when I put it in the mouseClicked function nothing happened.
        */

function preload(){
    pixelart = loadFont('data/font0.otf');
    quotes = loadFont('data/font2.otf');
    
    Cartman = loadImage('data/EricCartman.png');
    Kenny = loadImage('data/KennyMcCormick.png');
    Kyle = loadImage('data/KyleBroflovski.png');
    Stan = loadImage('data/StanMarsh.png');
    Kennydied = loadImage('data/KennyDead.png');
    Butters = loadImage('data/ButtersStotch.png');
    thundercloud = loadImage('data/thundercloud.png');
}


function setup(){
    createCanvas(900,500);
    frameRate(60);
    welcome = "Welcome to South Park";
}

function draw(){
    background(101,175,255);
    
    image(thundercloud, 480, 0);
    y = y + 1;
    x = x + 1;
    
    textFont(pixelart, 40);
    text(welcome, 150, 50);
    textFont(pixelart, 25);
    text("Oh my God they killed Kenny", x, 0);
    
    scale(.5);
    image(Kyle, 50, 350);
    scale(1.3);
    image(Stan, 280, 250);
    image(Cartman, 510, 275);
    scale(.7);
    image(Kenny, 1190, 385);
    image(Butters, 1550, 350);
}

function mouseClicked(){
    if(Kenny == Kenny){
    Kenny = Kennydied;  
    }
    else{
        Kenny = Kenny;
    }
}