var bgImg
var fish1Img, fish2Img, fish3Img
var shoeImg, shoe2Img
var vacuumerImg
var wrapperImg, bagImg, bag2Img, fishingearImg, strawImg, bcapImg   
var jewelleryImg, treasureImg, coinImg
var logo
var startImg
var playButton

var player;

var obstaclesGroup;

var gameState = 0;

function preload() {
  bgImg = loadImage("./assets/ocean.png")
  fish1Img = loadImage("./assets/fish.png")
  fish2Img = loadImage("./assets/fish2.png")
  fish3Img = loadImage("./assets/fish3.png")
  shoeImg = loadImage("./assets/shoe.jpeg")
  shoe2Img = loadImage("./assets/shoe2.png")
  vacuumerImg = loadImage("./assets/vacuumer.png")
  wrapperImg = loadImage("./assets/wrapper.png")
  bagImg = loadImage("./assets/plastic-bag.png")
  bag2Img = loadImage("./assets/bag2.png")
  fishingearImg = loadImage("./assets/fishingear.png")
  strawImg = loadImage("./assets/straw.png")
  bcapImg = loadImage("./assets/bcap.png")
  startImg  = loadImage("./assets/start.png")
  logo = loadImage("./assets/logo.png")

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  playButton = createButton("Jogar")
  player = createSprite(width/2, height-300)
  player.addImage(vacuumerImg)
  player.scale = 0.25
  player.setVelocity(0,-2)

  obstaclesGroup = new Group();

  createObstacles()
}

function draw() {
  background(startImg); 
   
 if(gameState === 0) {
  playButton.position(windowWidth/2, windowHeight/2)
  playButton.class("customButton")
  playButton.mousePressed(() => gameState = 1)
  imageMode(CENTER);
  image(logo, width/2, height/2-200, 900, 195)

  
 }
 
 if(gameState === 1) {
  image(bgImg, 0, -height*5, width, height*6)
  playButton.hide()

  if(keyIsDown(RIGHT_ARROW) && player.position.x<width-100) {
    player.position.x +=10
   }
   if(keyIsDown(LEFT_ARROW) && player.position.x>100) {
    player.position.x -=10
    
   }
   if(keyIsDown(UP_ARROW) && player.position.x>100) {
    player.position.y -=10
   }

   camera.position.y = player.position.y-100

  drawSprites()
 }
}

function createObstacles() {
  for(var i = 0; i<8; i++) {
    var x = random(100, width-100)
    var y = random(-height*4.5, height-400)
    var obstacle = createSprite(x,y)
    var randoimg = Math.round(random(1,3))
    switch(randoimg) {
      case 1: obstacle.addImage(fish1Img); obstacle.scale = 0.35; 
      obstacle.setVelocity(2,0.5); break;
      case 2: obstacle.addImage(fish2Img);
       obstacle.scale = 0.07;
       obstacle.setVelocity(-2,-0.5);
       break;
      case 3: obstacle.addImage(fish3Img); 
      obstacle.scale = 0.07;
      obstacle.setVelocity(-1,-0.5); break;
    }
    obstacle.addToGroup(obstaclesGroup)
  }
}


