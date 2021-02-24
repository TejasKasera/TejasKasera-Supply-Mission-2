var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var log1;
var log2;
var log3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	rectMode(CENTER);
	var canvas = createCanvas(900,700,1500,700);
	engine = Engine.create();
	world = engine.world;
	

	log1 = createSprite(350,595,20,130);
	log1.shapeColor = "red";

	log2 = createSprite(465,670,250,20);
    log2.shapeColor = "red";

	log3 = createSprite(580,595,20,140);
    log3.shapeColor = "red";


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-15, width,10);
	groundSprite.shapeColor=color("white")

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true})
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  log1.display();
  log2.display();
  log3.display();
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   
	Matter.Body.setStatic(packageBody,false)

    }
}