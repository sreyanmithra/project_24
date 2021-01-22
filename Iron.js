class Iron{

    constructor(x,y,width,height){

      var options={
        'density':1,
        'friction':2,
        'restitution':0.2   
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
      fill("silver")
      rect(pos.x,pos.y,this.width,this.height)
      pop()

    }
  
  }