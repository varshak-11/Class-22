
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
engine = Engine.create();
world = engine.world

function setup() {
  createCanvas(400,400);
  var groundOption={
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,400,50,groundOption)
  World.add(world,ground);
ballOption={
restitution:1.0
}
  ball=Bodies.circle(200,200,40,ballOption)
  World.add(world,ball)
}

function draw() {
  background(255,255,255)
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,50)
  
  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,40,40)

 
}

