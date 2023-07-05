var ground
var groundImg
var spacecraft, spacecraftImg
var alien, alienImg
var laser
var score = 0
var aliensGroup 
var lasersGroup 
var laserShot
function preload() {
  groundImg = loadImage("bg.jpg")
  spacecraftImg = loadImage("spacecraft.png")
  alienImg = loadImage("ufo.png")
  laserShot = loadSound("lasershot.mp3")

}
function setup() {
  createCanvas(windowWidth,windowHeight );
  ground = createSprite(0, 300, windowWidth,windowHeight)
  ground.scale = 2.5
  ground.addImage("space", groundImg)
  spacecraft = createSprite(100, 300, 20, 20)
  spacecraft.addImage("spacecraft", spacecraftImg)
  spacecraft.scale = 0.4

  aliensGroup= new Group()
  lasersGroup= new Group()
  
  


}

function draw() {
  background(30);

  if (ground.x < 750) {
    ground.x = ground.width / 2
  }
  ground.velocityX = -6

  //CONTROLLS
  if (keyDown("up")) {
    spacecraft.y -= 5
  }

  if (keyDown("down")) {
    spacecraft.y += 5
  }
  if(keyDown("space")){
    laser = createSprite(spacecraft.x, spacecraft.y,40,6)
    laser.velocityX = 3
    laser.shapeColor = "red"
    lasersGroup.add(laser)
    laserShot.play()
  }
  spawnAliens() 
  drawSprites()

  fill("white")
  textSize(50)
  text("SCORE : "+ score, 150, 100)

}


function spawnAliens() {

if(frameCount%60==0){
  alien = createSprite(width, Math.round(random(100,height-100)), 20, 20)
  alien.addImage("alien", alienImg)
  alien.scale = 0.4
  alien.velocityX = -5
  alien.lifetime  = width/5
  aliensGroup.add(alien)
}
}


