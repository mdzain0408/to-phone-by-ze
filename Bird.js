class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.smoke = loadImage("sprites/smoke.png");
    this.tragectory=[]
    this.image = loadImage("sprites/bird.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

   if(this.body.velocity.x>15 && this.body.position.x>210){
    var position= [this.body.position.x,this.body.position.y]
    this.tragectory.push(position);

   }
    
    for(var z=0;z<this.tragectory.length;z++){

    image(this.smoke,this.tragectory[z][0],this.tragectory[z][1]);




    }

    super.display();
  }
}
