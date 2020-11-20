
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;
 //var bg2="color(random(0,255),random(0,255),random(0,255))";
 var groundobj1;
var plinkos=[];
var particles=[];
var divisionobj=[];


function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	bg1=new Ground(240,790,480,20)
	//part1=new particle(100,500,10)

	

  
  for (var j =40;j<=width; j=j+50){
   plinkos.push(new plinko(j,75,10));
  }
  
  for (var j =15;j<=width-10; j=j+50){
	plinkos.push(new plinko(j,175,10));
   }
  
   for (var j =40;j<=width; j=j+50){
	plinkos.push(new plinko(j,275,10));
   }
  
   for (var j =15;j<=width-10; j=j+50){
	plinkos.push(new plinko(j,375,10));
   }

   for (var k=0;k<=width; k=k+80){
	divisionobj.push(new divi(k,750,5,300))
  }

    

	Engine.run(engine);


  
}


function draw() {
	background("black");  
	bg1.display();
   for(var i=0;i<plinkos.length;i=i+1){
	 plinkos[i].display();
   }
   for(var t=0;t<divisionobj.length;t=t+1){
	   divisionobj[t].display();
   }

   
   
  if(frameCount%60===0){
	particles.push(new particle(random(width/2-10,width/2+10),10,10))
  }
  for(var p=0;p<particles.length;p=p+1){
	particles[p].display();
  }
	drawSprites();
}

// function keyPressed() { 
// 	if (keyCode === UP_ARROW) 
// 	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100}); } 
// } 




