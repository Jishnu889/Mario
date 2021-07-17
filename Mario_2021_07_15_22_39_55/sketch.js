

var mario, mario_running, mario_collided;
var  invisibleGround;
var bg

function preload() {
  mario_running = loadAnimation("Capture1.png", "Capture3.png", "Capture4.png");
  bg=loadImage("backg.jpg");
  
}

function setup() {
  createCanvas(500, 200);
  mario = createSprite(50, 150, 20, 50);
  mario.addAnimation("running", mario_running);
  mario.scale = 0.3;

  invisibleGround=createSprite(0,170,1000,10);
  invisibleGround.visible=false;
  



  
}

function draw() {
  background(bg);
  text(mouseX+","+mouseY,mouseX,mouseY);
  
  mario.collide(invisibleGround);
  
  
  drawSprites();
}