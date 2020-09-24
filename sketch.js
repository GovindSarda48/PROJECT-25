
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,box1,ground,paper;

function preload(){
	boxIMAGE= loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	box1 = createSprite(600,525,200,200);
	box1.addImage(boxIMAGE);


	
	box2 = new Box(455,530,20,330);
	
    
	

	box3 = new Box(745,530,20,330);

	box4 = new Box(600,690,300,20);
	


	paper = new Ball(50, 590);


	
	ground = new Ground(400,height,800,20);

	
	
	






	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);



  imageMode(CENTER);
 
	

	
	 
  

  fill("pink");


   


  ground.display();
  
  box4.display();
  box1.display();
  box2.display();
  box3.display();
  
  
  paper.display();
  
  

   

  drawSprites();
 
}

function keyPressed() {

	if (keyCode === UP_ARROW) {
		
		Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-150});
		
		
	   }
   }
   

