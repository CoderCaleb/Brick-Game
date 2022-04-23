var ball
var paddle
var life
var point=0
var edgeLeft, edgeRight, edgeUp, edgeDown
//ball.setAnimation("Ball")
 
 //ball.scale=0.1
 
function setup(){
createCanvas(2000,1000)
ball=createSprite(150,140,10,10)
  paddle=createSprite(mouseX,175,60,10)
  
  edgeLeft=createSprite(5,2000,10,6000)
  edgeRight=createSprite(500,2000,10,6000)
  edgeUp=createSprite(250,1,6000,10)
  edgeDown=createSprite(220,200,6000,10)

  //edgeRight=createSprite()
 // edgeUp=createSprite()
  //edgeDown=createSprite()

  ball.velocityY=4
  ball.velocityX=4
}



  function draw() {
  createCanvas(500,200)
  
  background("lightblue")
  paddle.x=mouseX
  createEdgeSprites()
ball.bounceOff(edgeDown)
  ball.bounceOff(edgeUp)
  ball.bounceOff(edgeRight)
  ball.bounceOff(edgeLeft)

   ball.bounceOff(paddle) 
   
   bricks()
  text("point:",350,380)
  text(point,350,380)
  
}
  
function bricks(){
  brick1()
  brick2()
  brick3()
  
}

  if(ball.isTouching(brick)){
    brick.destroy()
    point=point+1
  }
  function brick1(){
    for (var i = 30; i < 487; i=i+40) {
      var bricks1=createSprite(i,43,30,20) 
      //brick.setAnimation("block")
    //brick.scale=0.25
  ball.bounceOff(bricks1)

             bricks1.shapeColor = rgb(random(0,255), random(0,255), random(0,255), 1);
   
     } 
     
  }
  function brick2(){
    
     for (var i = 30; i < 487; i=i+40) {
      var bricks2=createSprite(i,73,30,20) 
      //brick.setAnimation("block")
    //brick.scale=0.25
    ball.bounceOff(bricks2)
             bricks2.shapeColor = rgb(random(0,255), random(0,255), random(0,255), 1);
   
     }
     
  }
  function brick3(){
    
     for (var i = 30; i < 487; i=i+40) {
      var bricks3=createSprite(i,13,30,20) 
      //brick.setAnimation("block")
    //brick.scale=0.25
   ball.bounceOff(bricks3)
             bricks3.shapeColor = rgb(random(0,255), random(0,255), random(0,255), 1);
   
     }
  }

drawSprites()

