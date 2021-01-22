var hammer
var ground
var stone
var rubber
var sandP1,sandP2,sandP3,sandP4,sandP5,sandP6,sandP7
var iron

const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Body=Matter.Body

function setup() {

	createCanvas(900,500)

	engine=Engine.create()
	world=engine.world

	hammer=new Hammer(0,0)

	ground=new Ground(450,490)

	stone=new Stone(200,300,70,70)

	rubber=new Rubber(800,200)

	sandP1=new SandParticles(300,200)
	sandP2=new SandParticles(350,200)
	sandP3=new SandParticles(400,200)
	sandP4=new SandParticles(450,200)
	sandP5=new SandParticles(480,200)
	sandP6=new SandParticles(560,200)
	sandP7=new SandParticles(600,200)

	iron=new Iron(100,300,50,30)

	Engine.run(engine)
  
}

function draw(){

  rectMode(CENTER)

  background("skyBlue")

  hammer.display()

  ground.display()

  stone.display()

  rubber.display()

  sandP1.display()
  sandP2.display()
  sandP3.display()
  sandP4.display()
  sandP5.display()
  sandP6.display()
  sandP7.display()

  iron.display()
  
  drawSprites()
 
}



