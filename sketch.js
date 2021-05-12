const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var gameState = "PLAY";
var particle;
var plinkos = [];
var divisions = [];
var divisionHeight=200;
var score = 0;
var turns = 5;

function setup() {
  createCanvas(800,650);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }
for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,175));
    }
for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,275));
    }
for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,375));
    } 
}
 
function draw() {
  background("black");
  textSize(25);
  text("Score : "+score,20,30);
  text("Turns : "+turns,700,30);
  text(" 100 ", 15, 470);
  text(" 80 ", 105, 470);
  text(" 60 ", 185, 470);
  text(" 40 ", 265, 470);
  text(" 20 ", 345, 470);
  text(" 20 ", 425, 470);
  text(" 40 ", 505, 470);
  text(" 60 ", 585, 470);
  text(" 80 ", 665, 470);
  text(" 100 ", 735, 470);
  Engine.update(engine);
for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }
ground.display();
if(gameState =="END") {
  background("black");
  fill(255,140,0);
  textSize(100);
  text("Game Over", 140, 350); 
  text("Score : "+score,150,200);
} 
if(particle!=null){
  particle.display();   
  if (particle.body.position.y>556){
    if (particle.body.position.x < 80){
    score=score+100;      
    particle=null;
    if ( turns<=0) gameState ="END";
    }
    else if (particle.body.position.x < 160 && particle.body.position.x > 80){
      score = score + 80;
      particle=null;
      if ( turns<=0) gameState ="END"; 
    }
    else if (particle.body.position.x < 250 && particle.body.position.x > 160){
      score = score + 60;
      particle=null;
      if ( turns<=0)  gameState ="END";
    }
    else if (particle.body.position.x < 325 && particle.body.position.x > 250){
      score = score + 40;
      particle=null;
      if ( turns<=0)  gameState ="END";
    }
    else if (particle.body.position.x < 400 && particle.body.position.x > 325){
      score = score + 20;
      particle=null;
      if ( turns<=0)  gameState ="END";
    }
    else if (particle.body.position.x < 480 && particle.body.position.x > 400){
      score = score + 20;
      particle=null;
      if ( turns<=0)  gameState ="END";
    }
    else if (particle.body.position.x < 560 && particle.body.position.x > 480){
      score = score + 40;
      particle=null;
      if ( turns<=0)  gameState ="END";
    }
    else if (particle.body.position.x < 640 && particle.body.position.x > 560){
      score = score + 60;
      particle=null;
      if ( turns<=0)  gameState ="END";
    }
    else if (particle.body.position.x < 725&& particle.body.position.x > 640){
      score = score + 80;
      particle=null;
      if ( turns<=0)  gameState ="END";
    }
    else if (particle.body.position.x > 725){
      score = score + 100;
      particle=null;
      if ( turns<=0)  gameState ="END";
    }
  }
}
for (var k = 0; k < divisions.length; k++) { 
     divisions[k].display();
   }
}
function mousePressed() {
  if(gameState !== "END") {
     turns = turns-1;
  particle = new Particle(mouseX, mouseY, 10, 10);
  }
}