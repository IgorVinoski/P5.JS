//Faça um retângulo no centro da tela que muda para um novo tamanho com o clique do mouse (o clique define um dos cantos).
let clickL, cliclR;


clickL = 20;
function setup() {
  createCanvas(400, 400);
}
function mouseClicked() {

 if (mouseButton == LEFT) {
    clickL = clickL + 20;
  } 

 
}
function draw() {
  background(220);
  rectMode(CENTER);
  rect(width/2, height/2, clickL, 50);
}