class SandParticles{

    constructor(x,y){

      var options={
        density:1,
        friction:0.5,
        restitution:0.2 
      }
  
      this.body=Bodies.circle(x,y,5,options)
      this.radius=5
      World.add(world,this.body)
  
    }
  
    display(){

      var pos=this.body.position
      var angle=this.body.angle

      push()
      ellipseMode(CENTER)
      rotate(angle)
      strokeWeight(1)
      stroke("black")
      fill("brown")
      ellipse(pos.x,pos.y,this.width,this.height)
      pop()

    }
  
  }