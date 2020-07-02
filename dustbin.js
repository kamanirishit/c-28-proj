class Dustbin{
    constructor(x,y,width,height){
   this.image=loadImage("dustbingreen.png");
this.x=x
this.y=y;
this.width=width;
this.height=height;
  }
  display(){
     // rectMode(CENTER);
            //fill("white");
            stroke("black");
            imageMode(RADIUS);
      image(this.image,this.x,this.y,this.width,this.height);
  }
    
}