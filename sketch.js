
var player1,player2,ground1,ground2,invisibleGround;

var playerImg1,playerImg2
const distance=10000;




function setup() {
  createCanvas(1500, 700);

  player1=createSprite(100,300,20,20)
  ground1=createSprite(10,320,3000,10)
  ground1.velocityX=-5
  player2=createSprite()
  ground2=createSprite()
 // ground

  invisibleGround=createSprite(10,350,3000,20)

  
}


function draw(){

background(0)
text(mouseX+ "," +mouseY, mouseX, mouseY);
text("player1",130,50)

player1.collide(ground1)
ground1.velocityX=-5;
if(ground1.x<0){
  ground1.x=ground1.width/2;

}
if(keyDown(UP_ARROW)){
  player1.velocityY=-3
}
player1.velocityY=player1.velocityY+0.7;
bullets();

if(player1.x===distance){
  console.log("p1 wins")
}
text("player2", 130,450)
drawSprites();
}


function bullets(){

  if (frameCount%100===0){
    var bull= createSprite(1400,Math.round(random(90,250)),10,10)
    bull.velocityX=-Math.round(random(1,9));
  }
}