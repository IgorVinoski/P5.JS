function setup() {
  createCanvas(400, 400);
  criaQuadrado(10)
  console.log(listaDeQuadrados);
  
  
}
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
const listaDeQuadrados = [];
function criaQuadrado(x) {
    for(let i=0; i<x; i++) {
        listaDeQuadrados.push(new quadrado(random(0, 400),random(0,400), 50));
    }    
}

function draw() {
  background(220);
  listaDeQuadrados.map((ell, index) => {
    ell.aparecer()
    ell.mover();
  })

  
}