class Ball {
    constructor(x, y, r) {
        let ball_opt = {
            restitution: 0.95,
            friction:0,
            density:1.2
            
        }

        this.body = Bodies.circle(x, y, r, ball_opt);
        this.r = r;
        World.add(world, this.body);
    }

    show() {
        push();
        ellipse(this.body.position.x, this.body.position.y, this.r)
        stroke(255);
        fill(127);
        pop();
    }

}