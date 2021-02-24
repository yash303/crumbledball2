
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, dustbin1, dustbin2, distbin3;
var ground;
var paperImg, binImg;
function preload()
{
	binImg=loadImage("dustbingreen.png");
	paperImg=loadImage("paper.png");
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(55, 200, 70);
	ground=new Ground(200, 690, 2000, 20);
	dustbin1=new Dustbin(800, 580);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper.display();
  ground.display();
  dustbin1.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});
	}

}

