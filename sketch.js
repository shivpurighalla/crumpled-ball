
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var g,p,b;
var b1,b2,b3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	g=new Ground(400,690,800,20);
	p=new Paper(100,580,5);
	b3=new Bin(735,680,70,20);
	b1=new Bin(700,650,20,80);
	b2=new Bin(770,650,20,80);
	
	Engine.run(engine);
  
}


function draw() {
	background("lightblue");
  rectMode(CENTER);
  background(0);
  g.display();
  p.display();
  b1.display();
  b2.display();
  b3.display();
  drawSprites();
 
}



