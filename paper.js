class Paper {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':1.5,
          'density':1.2,
      }
      this.body = Bodies.circle(x, y, radius/2, options);
      this.radius=radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      strokeWeight(3);
      fill(255, 0, 255);
      image(paperImg, 0, 0, this.radius, this.radius);
      pop();
    }
  }
  