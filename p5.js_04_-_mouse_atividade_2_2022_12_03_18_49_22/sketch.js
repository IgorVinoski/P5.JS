//Crie um sketch onde um quadrado é desenhado a partir da posição lateral (X) do cursor do mouse.  A posição Y do mouse define o tamanho do quadrado.
function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(220);
  rectMode(CENTER);
  square(mouseX, height/2, mouseY);
}