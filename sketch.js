const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
  var canvas = createCanvas(800,400);
 
  engine = Engine.create();
  world = engine.world;
    var options={
      isStatic: true
    }                       
  ground = Bodies.rectangle(400,380,800,20,options);
  World.add(world,ground);

  var options={
    restitution:0.3
  }                   
  ball = Bodies.circle(400,200,20,options)
  World.add(world,ball);
 

}
function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  
 rect(ground.position.x,ground.position.y,800,20);
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20,20)




 
}