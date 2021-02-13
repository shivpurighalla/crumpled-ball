class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution: 0.3,
            density:1.2,
            friction:0.5
        }
        this.radius=r;
        this.body=Bodies.circle(x,y,r,options);
        this.image=loadImage("paper.png");
    }
    display(){
        push();
        fill ("white");
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop ();
    }
};