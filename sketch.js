var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
  
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }

  spawnDoors()  
  drawSprites()  
  
}

function spawnDoors() {
  if (frameCount % 250 === 0 ){
    var door = createSprite (200,-50)
    door.addImage(doorImg) 
    var climber = createSprite(200,10)
    climber.addImage(climberImg)
    door.velocityY = 1
    climber.velocityY= 1
    door.x = Math.round(random(100,400))
    climber.x = door.x
    door.lifetime = 800
    doorsGroup.add(door)
    climber.lifetime = 800
    climbersGroup.add(climber)
  }
 }

