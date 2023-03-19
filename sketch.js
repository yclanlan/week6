let  x1 = 0;
let  y1 = 0;
let  x2 = 0;
let  y2 = 0;

let easing1=0.1
let easing2=0.05

function setup() {
  
    createCanvas(windowWidth, windowHeight);
    background(0);

}

function draw() {

    background(0)
  
    //location
    textSize(15)
    text(int(mouseX)+","+int(mouseY),50,50)

    let targetX1 = mouseX;
    x1 = x1 + (targetX1 - x1) * easing1;
    let targetY1 = mouseY;
    y1 = y1 + (targetY1 - y1) * easing1;
  
    let targetX2 = mouseX;
    x2 = map(mouseX, 0, windowWidth, x1 - 80, x1 + 80);
    x2 = x2 + (targetX2 - x2) * easing1;
    let targetY2 = mouseY;
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

 

