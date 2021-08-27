var path,boy,invisibleWall,invisibleWall2;
var pathImg,boyImg;
var PLAY;
var gameState = PLAY;
function preload(){
  //pre-load images
 pathImg = loadImage("path.png");
 boyImg  = loadAnimation("Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;
 
  boy = createSprite(200,350);
  boy.addAnimation("boy",boyImg);
  boy.scale = 0.06;
  
  invisibleWall = createSprite(5,40,4,80);
  invisibleWall.visible = false;

  invisibleWall2 = createSprite(100,40,4,80);
  invisibleWall2.visible = false;
 }

function draw() {
  
  background(0);
 
  if(path.y > 400){
    path.y = height/2;
  }

 if(gameState === PLAY){
  boy.x = World.mouseX;

 }

 boy.collide(invisibleWall);
 boy.collide(invisibleWall2);
 drawSprites();
}
