
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//const Body = Matter.Body;
//const Render = Matter.Render;

var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5;
var roofObject;
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(width/2,height/4,width/7,20);

	bobDiameter=40;
	startBobPositionX=width/2;
	startBobPositionY=height/4+400;
	bobObject1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	rope1=new rope(bobObject1.body,roofObject.body)
	rope2=new rope(bobObject2.body,roofObject.body)
	rope3=new rope(bobObject3.body,roofObject.body)
	rope4=new rope(bobObject4.body,roofObject.body)
	rope5=new rope(bobObject5.body,roofObject.body)	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);
  
  roofObject.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
    	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
  	}
}






