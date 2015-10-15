var pixelart; //Font
var Cartman;
var Kenny;
var Kyle;
var Stan;
var Kennydied;
var thundercloud;
var Butters;
var welcome; //Images
var y = 0; //South Park famous quotes from here down for most of these variables
var x = 0;
var a = 0;
var b = 0;
var c = 900;
var d = 900;
var e = 500;
var f = 0;
var g = 130;
var h = 0;
var i = 200;
var j = 700;
var k = 500;
var l = 900;
var m = 300;
var n = 360;
var o = 360;
var p = 0;
var q = 900;
var r = 0;
var s = 510; //Cartman x
var t = 1550; //Butters x
var u = 10; //shaking text
var v = u - 1; //shaking
var w = -100;
function preload(){
    pixelart = loadFont('data/font0.otf'); 
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
    welcome = "Welcome to South Park!";    
}
function draw(){
    background(101,175,255); //background from the show made the text hard to read
    textFont(pixelart, 40);
    text(welcome, 150, 50);
    textFont(pixelart, 20);
        text("Mkay", 450, b);
            b = b + 1;
        if(b > 200){
        text("Tom Cruise won't come out of the closet!", c, 475);
            c = c - 3;
                    }
        if(b > 500){
        text("THEY TOOK ER JERBS!", l, 430);
        l = l - 3;
        }
        if(l < 0){
        text("Wow, what a terrific audience!",50,p)
        p = p + 2;
        }
        if(p > 300){
        text("I'm not just positive Kyle, I'm HIV positive!", w, 100); 
        w = w + 3;
        }
        if(l < 100){
        text("Oh hamburgers!", 680, n);
        n = n - 3;
        }
        if(c < 0){
        text("Aaand it's gone!", j, k);
        j = j - 2;
        k = k - 2;
             }
        text("Manbearpig", x, y);
            x = x + 2;
            y = y + 2;
        if(y > 500){
        text("Gay Fish", a, 20);
            a = a + 2;
                    }
        if(a > 900){
        text("I learned something today", h, i);
        h = h + 3;
        i = i - 1;
        }
        if(h > 400){
        text("Chilli + Parents?", 400, o);
        o = o - 2;
        }
        if(o < 300){
        text("Oh I'm sorry, I thought this was America!", q, r);
        q = q - 3;
        r = r + 1;
        }
        text("Respect my authoritah!", d, e);
            d = d - 4;
            e = e - 4;
        if(e < 0){
            text("I'm not your buddy, guy!", f, g);
            f = f + 3;
            g = g + 1;
        }
        if(f > 400){
        text("Mmmf!", 570, m);
            m = m - 2;
        }
    killedKenny();
    scale(.5); //5 main characters below
    image(Kyle, 50, 350);
    scale(1.3);
    image(Stan, 280, 250);
    image(Cartman, s, 275);
    scale(.7);
    image(Kenny, 1190, 385);
    image(Butters, t, 350);  
}
function mouseClicked(){
    if(Kenny == Kenny){
    Kenny = Kennydied;  
    }
    else{
        Kenny = Kenny;
    }
}
function killedKenny(){ //Click and you kill Kenny just like on the show!
    if(Kennydied == Kenny){
     image(thundercloud, 480, 0); 
    text("YOU BASTARDS!", u, 400); //this shakes with intensity!
        u = u + 1;
        if(u > 13){
        u = v;  
        }
        if(u < 7){
         u = u + 1;   
        }
    s = s + 2; //Cartman walks away
    t = t + 1; //Butters walks away
    textFont(pixelart, 30);
    text("Oh my God!", 120, 140);
    textFont(pixelart, 20);
    text("They killed Kenny!", 110, 160);
    }
}