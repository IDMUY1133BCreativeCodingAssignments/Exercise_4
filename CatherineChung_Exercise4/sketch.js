
var pieceEn; 
var imgBox; 
var imgFlo; 
var fontH; 
var imgShoe; 

var sky;
var sky2;
var sky3;

var ypos= 600;
var tYpos = 600;
var hYpos = 600;
var jYpos = 600;
var speed = 2;

var lyricLine = '';
var images = new Array();
//var imageName = [];
//var layer1 = new[];
//var images = ['sky.png','sky2.png','sky3.png'];

//var fileDir;
function preload(){
    pieceEn = loadStrings('pieceofyouen.txt'); 
    fontH = loadFont('NexaRustHandmade.otf');
    imgShoe = loadImage('shoebox.png'); 
    sky = loadImage('img/sky.png');
    sky2 = loadImage('img/sky2.png');
    sky3 = loadImage('img/sky3.png');
}

function setup(){
    createCanvas(600,600); 
     
 //   fileDir = new File(("img"));
  //  if (fileDir.isDirectory()){
        
  /*  images[0]= new Image();
    images[0].src = 'img/sky.png';
    
    images[1]= new Image();
    images[1].src = 'img/sky2.png';
    
    images[2]= new Image();
    images[2].src = 'img/sky3.png';
    
    */
    
    
    }

function draw(){
    background(255); 
    image(imgShoe,0,0); 
    imgShoe.resize(height,width);
    
    ypos = ypos -speed;
   // for (var i =0; i < width; i++){
        
        if(ypos > height){
        ypos = 50;
        }
        image(sky3,30,ypos);
        fill(0); 
        stroke(12,134,123);
        textFont(fontH,10); 
        text(pieceEn[0], 10, ypos);
 //   }
        tYpos= tYpos-1.8;
        image(sky3,90,tYpos);
        fill(0); 
        stroke(12,134,123);
        textFont(fontH,10); 
        text(pieceEn[1], 90, tYpos);
              
        hYpos = hYpos -1.6;
        image(sky3,150,hYpos);
        fill(0); 
        stroke(12,134,123);
        textFont(fontH,10); 
        text(pieceEn[2], 150, hYpos);
    
        jYpos = jYpos -1.4;
        image(sky3,210,jYpos);
        fill(0); 
        stroke(12,134,123);
        textFont(fontH,10); 
        text(pieceEn[3], 210, jYpos);
   
   /* 
    function mousePressed(){
    var x = floor(MouseX);
    var y = floor(MouseY);
    //if(mouseIsPressed){
        image(sky,x,y);
    }
    */
    //else if(value==0) {
   //     image(sky2,mouseX,mouseY);
   // }
  //  else{
       // image(sky3,x,y);
    

}
    //cloud();
/*  cloudOne(0,0);
    cloudOne(30,29);
    cloudOne(90,38);
    cloudTwo(30,148);
    cloudTwo(254,90);
    cloudTwo(39,200);
    cloudThree(10,249);
    cloudThree(39,10);
    cloudThree(13,40);
*/   
/*   for( var i = 0; i < images.length; i++)
    {
        x =+ 5;
        y =+ 5;
        //if(images[i] == img)
        image(images[1],x,y);
        
    }
  */  
    //text(pieceEn,200,y);
   /*
    text(pieceEn,x,y);
    x--;
   y = y -5;
   if( y < pieceEn.length){
       y = width;
    }
    */
/*
function cloud(){
    
    for(var i = 0; i< 50; i++){
        image(sky,random(0,200),random(0,200));
        image(sky3,random(200,400),random(200,400));
        image(sky2,random(300,400), random(300,400));
        sky2.resize(300,200);
    
    }
    
    for(var x=0; x<width/2; x++){
        for(var y=0; y < height/2; y++){
            x =+ 5;
            y =+ 5;
            image(sky,0+x,0+y);
        }
    }
} 
*/
/*
function cloudOne(x,y){
    image(sky,50+x,50+y);
}
function cloudTwo(s,t){

    image(sky3,200+s,50+t);
}
function cloudThree(r,d){
    image(sky2,400+r,50+d);
    sky2.resize(300,200);
}
function textL(){
    var lyLine = cu
    */


