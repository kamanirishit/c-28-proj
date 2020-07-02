class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.01,
            lenght:10
        }
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
        this.pointB=pointB;
    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position;
            var pointB=this.pointB;
             stroke("black");
             strokeWeight(2);
             line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
        
    }
}