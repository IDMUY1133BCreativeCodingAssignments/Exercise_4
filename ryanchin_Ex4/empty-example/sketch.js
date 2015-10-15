var points = [];

function setup(){
    createCanvas(1280, 800);
}

function draw(){
    background(255);
    var point = { x: mouseX, y: mouseY }
    points.push(point) //updates the last spot in the array with the mouse location
    if(points.length > 50){ points.splice(0, 1);}
    for(var i = 0; i < points.length ; i++){
        noStroke();
        fill(255-i*5);
        ellipse(points[i].x, points[i].y, i, i);
    }
}