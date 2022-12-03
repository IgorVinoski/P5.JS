//Faça um círculo no centro da tela que aumenta 5 pixels com um clique do botão esquerdo do mouse e diminui 5 pixels com o botão direito. O clique direito não pega por conta do nevegador e etc.. mas tá aí.

let clickL = 100;
function setup() {
  createCanvas(400, 400);
}


function mouseClicked() {

 if (mouseButton == LEFT) {
    clickL = clickL + 5;
  } 
  
  
  if(mouseButton == RIGHT){
    clickL= clickL -5;
  }
}
function draw() {
  background(220);
  
  
  
  circle(width/2, height/2, clickL);
  
  
}