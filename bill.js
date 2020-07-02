class Ball{
    constructor(x,y){
        var option={
            restitution:0.8,
            friction: 0.1,
            density:1.0
        }
   this.body=Bodies.rectangle(x,y,50,50,option);
   this.image=loadImage("paper.png")
   World.add(world,this.body);  
   this.width=50;
   this.height=50 ;
  }
  display(){
      rectMode(CENTER);
            fill("white");
            stroke("black");
            imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
  }
  
}