
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	Engine.run(engine);
	ground = new Ground(400,600,1200,20)
	ball = new ball(200,520, 30)
	boxBottom = createSprite(width/2, height - 46, 200, 10)
	boxside1 = createSprite(width/2 + 110, height - 90, 20, 100)
	boxside2 = createSprite(width/2 - 110, height - 90, 20, 100)
	boxBottom.shapeColor = ("red")
	boxside1.shapeColor = ("red")
	boxside2.shapeColor = ("red")
}


function draw() {
  rectMode(CENTER);
  background("black")
  ground.display();
  ball.display();
  
 drawSprite();
 keyPressed();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ballObject.body,ballObject.body.position,{x:85,y:-85} );
	}
}



