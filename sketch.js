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
 }
} 
