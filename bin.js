class Bin{
    constructor(x,y,w,h){
        var options={
            isStatic:true,
            restitition: 0.3,
            density:1.2,
            friction:0.5
        }
        this.width=w;
        this.height=h;
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.image=loadImage("dustbingreen.png");
    }
    display(){
        push();
        fill ("grey");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop ();
    }
}