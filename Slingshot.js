class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.image = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            if(pointA.x>200){
                image(this.image,pointA.x+20,pointA.y,15,20)
                strokeWeight(10);
                stroke(48,22,8);
                line(pointA.x+20, pointA.y+10, pointB.x-20, pointB.y+20);
                line(pointA.x+20,pointA.y+10,pointB.x+20,pointB.y+10);
                
            }else {
                image(this.image,pointA.x-30,pointA.y-10,15,20)
                strokeWeight(10);
                stroke(48,22,8);
                line(pointA.x-20, pointA.y, pointB.x-20, pointB.y+20);
                line(pointA.x-20,pointA.y,pointB.x+20,pointB.y+10);
            }
            
            pop();
        }
    }
    
}