class Hammer{

  constructor(x,y){

    var options={
      'density':2,
      'friction':1.0,
      'restitution':0.5
    }

    this.body=Bodies.rectangle(x,y,120,40,options)
    this.width=100
    this.height=40
      World.add(world,this.body)

  }

  display(){
    var pos=this.body.position
    push()
    rectMode(CENTER)
    pos.x=mouseX
    pos.y=mouseY
    strokeWeight(4)
    stroke("grey")
    fill("black")
    rect(pos.x,pos.y,this.width,this.height)
    pop()
  }

}