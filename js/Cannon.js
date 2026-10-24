class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.canon_img = loadImage("./assets/canon.png")
    this.canon_Base = loadImage("./assets/cannonBase.png")
    
  }
  display(){
    if (keyIsDown(RIGHT_ARROW) && this.angle<70){

      this.angle += 1

    }
    if (keyIsDown(LEFT_ARROW) && this.angle>-30){
      this.angle -= 1
      
    }
    push()
    imageMode(CENTER)
    image(this.canon_img,this.x,this.y,this.width,this.height)
    pop()

    image(this.canon_Base,70,20,200,200)
    noFill()

  }
}

