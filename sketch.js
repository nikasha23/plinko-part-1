const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight=300;

function preload() {
  //getBackgroundImg();
}

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  //createSprite(400, 200, 50, 50);
  ground= new Ground(width/2,height,width,20)

  for (var k=0; k<=width; k= k + 80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
  
  for(var j=40; j<=width; j=j+50){
      plinkos.push(new Plinko(j,75));
  }
  
  for(var j=15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  for(var j=40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,275));
  }

  for(var j=15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,375));
  }

}

function draw() {
  background(0); 

  

  ground.display(); 

  for(var i=0;i<plinkos.length; i++){
    plinkos[i].display();
  }

  

  if(frameCount%30===0){
    particles.push(new Particles(random(width/2-200,width/2+200),30,10));
  }

  for(var k=0;k<particles.length; k++){
    particles[k].display();
  }

  for(var j=0;j<divisions.length; j++){
    divisions[j].display();
  }

  drawSprites();
}

