
class quadrado{
  constructor(x,y,z, cor='red'){
    this.x=x;
    this.y=y;
    this.z=z;
    this.c=cor;
    
  }
  aparecer(){
    fill(this.c);
    square(this.x,this.y,this.z);
    
  }
  mover(){
     this.x = this.x+10;
  if(this.x > width+50){
    this.x = -450
    
  }
  
  
  fill(7,94,98);
  this.y = 10 + this.y;
  if(this.i > height+50){
    this.i = -450;
  }
  
 
  if(this.x > height+50){
    this.x = -450;
    
  }
  if(this.y > width+50){
    this.y = -450;
  }
  }
}
  let s1 = new quadrado(0,200,50, 'black');
  let s2 = new quadrado(200,0,50, 'pink');
  let s3 = new quadrado(0,0,50);
function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(220);
  s1.aparecer();
  s1.mover();
  s2.aparecer();
  s2.mover();
  s3.aparecer();
  s3.mover();
}