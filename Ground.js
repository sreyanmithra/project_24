class Ground{

    constructor(x,y){

    var options={
      isStatic:true
    }
  
    this.body=Bodies.rectangle(x,y,900,20,options)
    this.width=900
    this.height=20
    World.add(world,this.body)
  
    }
  
    display(){
      var pos=this.body.position
      rectMode(CENTER)
      fill("brown")
      rect(pos.x,pos.y,this.width,this.height)
    }
  
  }