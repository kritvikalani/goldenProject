class Obstacles{
    constructor(x,y,radius) {
        var options= {
            isStatic: false,
            'restitution': 0,
            'friction': 0.4,
            'density': 0.7
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius= radius
        this.image = loadImage("obstacle.png")
        World.add(world, this.body)
    }
    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
    /*update() {
        if(this.body.position.y > displayHeight){
            Matter.Body.setPosition(this.body, {x:random(0,600), y:random(0,600)});
        }
    }*/
}