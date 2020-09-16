let sizeX=10, sizeY=10;


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
}



function draw() {
if (mouseIsPressed) {
    fill(random(255),random(255),random(255));
    ellipse(mouseX,mouseY,sizeX,sizeY);
  }




}

function mouseClear() {
  clear();
  background(255, 255, 255);
}


function mouseMas(){
  sizeX = sizeX + 10;
  sizeY = sizeY + 10;
}

function mouseMenos(){
  sizeX = sizeX - 10;
  sizeY = sizeY - 10;
}

function mouseColor(){
  background(random(255),random(255),random(255));
}

// function mouseForma(){
//    var op = random(1,3);
//    console.log(op);
//    return op;
// }






