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

var y = 0;
var x = 0;
var a = 0;
var b = 0;
var c = 900;
var d = 900;
var e = 500;
var f = 0;
var g = 130;

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
        text(quotegroup1[choosequote1], 0, -20);
        text(quotegroup2[choosequote2], 30, 0);
        text(quotegroup3[choosequote3], 150, -10);
        text(quotegroup4[choosequote4], 300, -3);
        text(quotegroup5[choosequote5], 400, 10);
        text(quotegroup6[choosequote6], 450, 30);
        text(quotegroup7[choosequote7], 600, 0);

}


function setup(){
    createCanvas(900,500);
    frameRate(60);
    welcome = "Welcome to South Park";
 Movingquotes();
    
}

function draw(){
    background(101,175,255);
    
    textFont(pixelart, 40);
    text(welcome, 150, 50);
    textFont(pixelart, 20);
    text("Mkay", 450, b);
            b = b + 1;
    if(b > 200){
    text("Tom Cruise wont come out of the closet!", c, 475);
            c = c - 3;
    }
    
    text("Manbearpig", x, y);
            x = x + 2;
            y = y + 2;
        if(y > 500){
        text("Gay Fish", a, 20);
            a = a + 2;
                    }
    text("Respect my authoritah!", d, e);
            d = d - 4;
            e = e - 4;
        if(e < 0){
            text("Im not your buddy, guy!", f, g);
            f = f + 3;
            g = g + 1;
        }

    killedKenny();
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

function killedKenny(){
    if(Kennydied == Kenny){
     image(thundercloud, 480, 0); 
    text("Oh my God, they killed Kenny!", 100, 140);
    text("YOU BASTARDS!", 10, 400);
    }
}

function Movingquotes(){
    var quotegroup1 = ['Gay Fish', 'I learned something today', 'Respect my authoritah'];
    var quotegroup2 = ['Mmmmf!', 'Hello there children!', 'Wow, what a terrific audience'];
    var quotegroup3 = ['Mkay', 'Screw you guys, Im going home', 'TIMMY'];
    var quotegroup4 = ['Oh hamburgers!', 'Howdy Ho!', 'Tom Cruise wont come out of the closet!'];
    var quotegroup5= ['I thought this was America!', 'Aaaand its gone', 'Manbearpig'];
    var quotegroup6 = ['Im not your buddy, guy!', 'You PC bro?', 'Simpsons did it'];
    var quotegroup7 = ['They took er jobs', 'Professor Chaos', 'Welcome to City Wok'];
    
    var choosequote1 = (random(quotegroup1.length));
    var choosequote2 = (random(quotegroup2.length));
    var choosequote3 = (random(quotegroup3.length));
    var choosequote4 = (random(quotegroup4.length));
    var choosequote5 = (random(quotegroup5.length));
    var choosequote6 = (random(quotegroup6.length));
    var choosequote7 = (random(quotegroup7.length));
}