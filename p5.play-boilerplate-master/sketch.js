var villan,villanImage
var superhero,superheroImage
var backgroundImg
var villanWeapon
var villanWeaponImage
var superheroWeapon
var superheroWeaponImage
var villanGroup
var superheroGroup
var PLAY = 1
var END = 0
var gameState=PLAY
var hitSound
var villanScore = 0
var superheroScore = 0
var count=10
var mainCount=10
var gameoverSound
var gameoverSign,gameoverSignImg

function preload(){
villanImage=loadAnimation("E1.png","E2.png","E3.png","E4.png")
superheroImage=loadAnimation("1.png","2.png")
backgroundImg=loadImage("Background.jpg")
villanWeaponImage=loadImage("Dart.png")
 superheroWeaponImage=loadImage("Lazerbeam.png")
  hitsound=loadSound("hitsound.mp3")
  gameoverSound=loadSound("gameover.mp3")
  gameoverSignImg=loadImage("Gameover.png")
}

function setup() {
  createCanvas(1000,800);
 villan =createSprite(600, 600, 50, 50);
 villan.scale=2.5

 superhero = createSprite(200,600,50,50)
 villan.addAnimation("villan",villanImage)
 superhero.addAnimation("superhero", superheroImage)
villanGroup=new Group()
superheroGroup= new Group()
}


function draw() {
  background(backgroundImg); 
if (gameState===PLAY){


  textSize(30) 

  fill ("white")
  text("Player score "+ superheroScore,50,50)
  text("Villan score "+ villanScore,750,50)
  
  text("Use arrow keys",400,200)
if(keyIsDown(UP_ARROW)){
  superhero.y=superhero.y-10
}
if(keyIsDown(RIGHT_ARROW)){
  superhero.x=superhero.x+10
}
if(keyIsDown(LEFT_ARROW)){
  superhero.x=superhero.x-10
}
if(keyIsDown(DOWN_ARROW)){
  superhero.y=superhero.y+10
}
if(superheroGroup.isTouching (villan)){
 hitsound.play()
 // gameState=END
 superheroGroup.destroyEach()
  superheroScore=superheroScore+1
}
if(villanGroup.isTouching(superhero)){
  //gameState=END
  hitsound.play()
  villanGroup.destroyEach()
  villanScore=villanScore+1
}
if(villanScore===5||superheroScore===5){
gameState=END
gameoverSound.play()
gameoverSign=createSprite(450,400,60,60)
gameoverSign.addImage(gameoverSignImg)
}

}
if(gameState===END){
  villan.destroy()
  superhero.destroy()
  superheroGroup.destroyEach()
  villanGroup.destroyEach()

}
  drawSprites();
}
function keyPressed(){


  if(keyCode===87){
    villan.y=villan.y-250
  }
  if(keyCode=== 83){
    villan.y=villan.y+250
  }
  if(keyCode===65){
    villan.x=villan.x-250
  }
  if(keyCode===68){
    villan.x=villan.x+250
  }
  if(keyCode===82){
    if(count>0){
    villanWeapon=createSprite(villan.x,villan.y,10,10)
    villanWeapon.addImage(villanWeaponImage)
    villanWeapon.velocityX=-5
    villanWeapon.scale=0.2
    villanGroup.add(villanWeapon)
    count=count-1
    }
  }
  if(keyCode===84){
    if(mainCount>0){
    superheroWeapon=createSprite(superhero.x,superhero.y,10,10)
    superheroWeapon.addImage(superheroWeaponImage)
    superheroWeapon.velocityX=5
    superheroGroup.add(superheroWeapon)
    mainCount=mainCount-1
    }
  }
  }

