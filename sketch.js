var  x1 = 0;
var  y1 = 0;
var  x2 = 0;
var  y2 = 0;

var easing1=0.1
var easing2=0.05

function setup() {
  
 
    createCanvas(windowWidth, windowHeight);
    background(0);

   
}

function draw() {
  
    //background
    //fill(color(300*mouseX/width, 200*mouseX/width+200*mouseY/height, 300*mouseY/height,200));
    //rect(0, 0, width, height);
    background(0)
  
    //text
    fill(255, 255, 255);
	textSize(40);
	text('#017',width/2-50,mouseY+200);  
    
    //location
    textSize(15)
    text(int(mouseX)+","+int(mouseY),50,50)

    var targetX1 = mouseX;
    x1 = x1 + (targetX1 - x1) * easing1;
    var targetY1 = mouseY;
    y1 = y1 + (targetY1 - y1) * easing1;
  
    var targetX2 = mouseX;
    x2 = map(mouseX, 0, windowWidth, x1 - 80, x1 + 80);
    x2 = x2 + (targetX2 - x2) * easing1;
    var targetY2 = mouseY;
    y2 = map(mouseY, 0, windowWidth, y1 - 60, y1 + 60);
    y2 = y2 + (targetY2 - y2) * easing1;
  
    print(mouseX, mouseY);
    translate(-300, -250);
   
    // head
    fill(255);
    noStroke();
    ellipse(x1 + 300, y1 + 200, 200, 200);
    
    //shodow
    fill(240);
    noStroke();
    ellipse(x1 + 305, y1 + 220, 160, 160);

    // eyes
    fill(30);
    noStroke();
    ellipse(x2 + 265, y2 + 210, 13, 13);
    fill(30);
    noStroke();
    ellipse(x2 + 335, y2 + 210, 13, 13);
 
 
  

  
}

 

