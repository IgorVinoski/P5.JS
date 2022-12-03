//Utilizando linhas horizontais, crie um degradê que começa vermelho em cima e termina preto embaixo.
let i;
function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(220);
   for(i = 0; i<width; i++){
     
     stroke(255-i,0,0);
     line(0, i, 400, i);
    
    
  }

}