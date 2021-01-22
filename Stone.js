class Stone{

    constructor(x,y,width,height){

      var options={
        'density':2,
        'friction':1.0,
        'restitution':0.5   
      }
  
      this.body=Bodies.rectangle(x,y,width,height,options)
      this.width=width
      this.height=height
     World.add(world,this.body)
  
    }
  
    display(){

      var pos=this.body.position
      var angle=this.body.angle

      push()
      rectMode(CENTER)
      rotate(angle)
      strokeWeight(4)
      stroke("black")
      fill("grey")
      rect(pos.x,pos.y,this.width,this.height)
      pop()

    }
  
  }