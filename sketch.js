var fixedRect, movingRect,rect1,rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  rect1 = createSprite(300, 200, 50, 80);
  rect1.shapeColor = "green";
  rect1.velocityX=3;

  rect2 = createSprite(1100, 200, 50, 80);
  rect2.shapeColor = "green";
  rect2.velocityX=-3;

}

function draw() {
  background(0,0,0);  

 bounceOff(movingRect,fixedRect);
 bounceOff(rect1,rect2);
 if(isTouching(rect1,rect2)){
   rect1.shapeColor="red";
   rect2.shapeColor="red";
 }
  drawSprites();
}
