
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var img1;
var ground_options;
// var radius = 40;
var ground;

var l_wall,r_wall;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 800);
	

	engine = Engine.create();
	world = engine.world;

	ground_options={
		isStatic:true
	}

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.7,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(260,100,20,ball_options);
	World.add(world,ball);



	ground = Bodies.rectangle(200,590,1800,20,ground_options);
	World.add(world,ground);

	l_wall=Bodies.rectangle(600,520,20,140,ground_options);
	World.add(world,l_wall);

	r_wall=Bodies.rectangle(700,520,20,140,ground_options);
	World.add(world,r_wall);

	

	Engine.run(engine);

	ellipseMode(RADIUS);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,1800,20);
  rect(l_wall.position.x,l_wall.position.y,20,140);
  rect(r_wall.position.x,r_wall.position.y,20,140);
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,ball.position,{x:35,y:-55});
    
  	}
}

