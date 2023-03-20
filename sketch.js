let  x1 = 0;
let  y1 = 0;
let  x2 = 0;
let  y2 = 0;

let easing1 =0.01;
let easing2 =0.1;

function setup() {

    createCanvas(windowWidth, windowHeight);
    background(0);

}

function draw() {
    background(300*mouseX/width, 
    200*mouseX/width+200*mouseY/height, 
    300*mouseY/height,150);
  
    //print mouse location
    fill(255);
    textSize(15)
    text(int(mouseX)+","+int(mouseY),50,50)
    translate(-300, -250);

    let currentMouseX = mouseX;
    let currentMouseY = mouseY;

    x1+= (currentMouseX - x1) * easing1;
    y1+= (currentMouseY - y1) * easing1;

    x2 = map(mouseX, 0, windowWidth, x1 - 80, x1 + 80);
    x2+= (currentMouseX - x2) * easing2;
    
    y2 = map(mouseY, 0, windowWidth, y1 - 60, y1 + 60);
    y2+= (currentMouseY - y2) * easing2;
  
    noStroke();

    // head
    drawCircle(255, x1 + 300, y1 + 200, 200);

    // shodow
    drawCircle(240, x1 + 305, y1 + 220, 160,);

    // eyes
    drawCircle(30, x2 + 265, y2 + 210, 13);
    drawCircle(30, x2 + 335, y2 + 210, 13);

}

function drawCircle(color, x, y, size){
    fill(color);
    noStroke();
    // ellipse(x, y, w, [h])
    ellipse(x,y,size);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }

