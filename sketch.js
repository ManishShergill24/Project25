const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ball,dustBin1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    ball = new Paper(100,370,5);
    ground = new Ground(400,390,800,20)
    dustBin1 = new dustbin(690,335,150,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  dustBin1.display();
  ball.display();
  ground.display();

  drawSprites();
 
  console.log(ball.body.position.x);
}
function keyPressed(){
if(keyDown(UP_ARROW)){

Matter.Body.applyForce(ball.body,ball.body.position,{x:3,y:-3.5})

}

}

