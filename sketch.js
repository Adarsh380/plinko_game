var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  divisions.push(new Divisions(0, 640, 5, 300));
  divisions.push(new Divisions(80, 640, 5, 300));
  divisions.push(new Divisions(160, 640, 5, 300));
  divisions.push(new Divisions(240, 640, 5, 300));
  divisions.push(new Divisions(320, 640, 5, 300));
  divisions.push(new Divisions(400, 640, 5, 300));
  divisions.push(new Divisions(480, 640, 5, 300));
  divisions.push(new Divisions(560, 640, 5, 300));
  divisions.push(new Divisions(640, 640, 5, 300));
  divisions.push(new Divisions(720, 640, 5, 300));
  divisions.push(new Divisions(800, 640, 5, 300));

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 25; j <=width-20; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 0; j <=width-30; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //create the particles using frameCount
  if(frameCount%60 === 0){
    particles.push(new Particles(random(0, 800),0))
  }

  //display the particles 
  for (var k = 0; k < particles.length; k++) {
    particles[k].display();
  }
}