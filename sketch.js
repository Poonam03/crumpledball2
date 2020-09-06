
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,dustbin,box1,box2,box3;
/*function preload()
{
	dImage=loadImage("dustbingreen.png");
}*/

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=new Paper(10,300,70);

	ground=new Ground(600,380,1200,20);
	
	//Matter.Body.scale(dustbin.body,0.05,0.05);
	box1=new Box(910,288,20,160);
	box2=new Box(1050,288,20,160);
	box3=new Box(980,360,150,20);
	/*dustbin=createSprite(1000,270,20,100);
	dustbin.addImage(dImage);
	dustbin.scale=0.5;*/

	dustbin=new Dustbin(910,220);
		
	//Matter.Body.scale(ball.body,0.5,0.5);
		
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);
  //console.log(ball.x);
 
 
 
  box3.display(); 
  box1.display();
  box2.display();
  dustbin.display(); 
  ground.display();
   
  ball.display();
  
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(ball.body,{x:ball.body.position.x,y:ball.body.position.y},{x:131,y:-135})
	}
}

