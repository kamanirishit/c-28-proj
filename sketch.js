var packageBody,ground,log1,log2,log3,dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var slingshot,gameState;

function preload(){
	backgroundImg = loadImage("sprites/bg.png");
}	
	
function setup() {
	createCanvas(1500, 700);	
	engine = Engine.create();
	world = engine.world;
	gameState="play";
	
	ball=new Ball(200,350);
	log1=new Log(1100,560,100,20);
log2=new Log(1051,520,20,100);
	log3=new Log(1140,520,20,100);
	//dustbin=new Dustbin(1094,535,79,100);
	var option={
		isStatic:true
		}
	ground=Bodies.rectangle(width/2,height-100,width,60,option);
World.add(world,ground);
slingshot=new Slingshot(ball.body,{x:200,y:300});
Engine.run(engine);
	
  
}


function draw() {
	
	background("white");
	image(backgroundImg,width/2,height/2,width,height);
  rectMode(CENTER);
  ball.display();
  log1.display();
  log2.display();
  log3.display();
  //dustbin.display();
  slingshot.display();
  //console.log(mouseX,mouseY);
  rect(ground.position.x,ground.position.y,width,60);
console.log(mouseY);

}
function mouseDragged(){
	if( gameState==="play"){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});}
	}
function mouseReleased(){
  slingshot.fly();
  gameState="end";
}
