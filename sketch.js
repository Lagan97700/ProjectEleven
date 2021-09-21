
function preload(){
  pathImage = loadImage ("path.png");
  RunnerImage1 = loadAnimation ("Runner1.png");
  RunnerImage2 = loadAnimation ("Runner2.png");
}

function setup(){
  createCanvas(400,400);
  //moving background
  path = createSprite (200,200);
  path.addImage (pathImage);
  path.velocityY = 4;
  path.scale = 1.2;
  //code to reset the background
  if (path.y > 400){
    path.y = hieght/2;
  }
  Runner1.addAnimation (Runner1Animation);
  Runner2.addAnimation (Runner2Animation);
}

function draw() {
  background(0);
  drawSprites ();
}
