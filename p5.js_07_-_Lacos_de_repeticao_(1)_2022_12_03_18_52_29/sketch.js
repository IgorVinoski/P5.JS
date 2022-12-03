
//Utilizando linhas verticais, crie um degradê que começa preto na esquerda e termina branco na direita.
let i;

function setup() {
  createCanvas(400, 400);
}

function lines(){
  
}

function draw() {
  background(220);
  
  for(i = 0; i<width; i++){
     stroke(i);
     line(i, 0,i, 400);
    
    
  }


}