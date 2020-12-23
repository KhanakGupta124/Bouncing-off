var fixedRect, MovingRect

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(900,700, 70,80);

  movingRect = createSprite(900,100, 90,40);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  fixedRect.velocityY = -4;
  movingRect.velocityY = 4;

  fixedRect.debug = true;
  movingRect.debug = true;
 
}

function draw() {
  background(0);  

  if(fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 &&
    movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2){
        
        fixedRect.velocityX = -fixedRect.velocityX;
        movingRect.velocityX = -movingRect.velocityX;

  }

  if(fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2 &&
    movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2){

        fixedRect.velocityY = -fixedRect.velocityY;
        movingRect.velocityY = -movingRect.velocityY;

  }

  drawSprites();
}