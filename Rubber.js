class Rubber{

    constructor(x,y){

      var options={
        density:1,
        friction:5,
        restitution:0.7 
      }
  
      this.body=Bodies.circle(x,y,20,options)
      this.radius=20
      World.add(world,this.body)
  
    }
  
    display(){

      var pos=this.body.position
      var angle=this.body.angle

      push()
      ellipseMode(CENTER)
      rotate(angle)
      strokeWeight(4)
      stroke("red")
      fill("blue")
      ellipse(pos.x,pos.y,this.width,this.height)
      pop()

    }
  
  }