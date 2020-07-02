class Log{
    constructor(x,y,width,height){
        var is={
           // friction:1.5,
           // density:1.0,
            //restitution:0.8,
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,is);
        World.add(world,this.body);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        }
    display(){
        push();
        var pos=this.body.position;
        strokeWeight(4);
        fill("red");
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
        }