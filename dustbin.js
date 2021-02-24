class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = 200;
      this.height = 213;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      strokeWeight(4);
      stroke("brown");
      fill(255);
      image(binImg, pos.x, pos.y, this.width, this.height);
    }
  }
  