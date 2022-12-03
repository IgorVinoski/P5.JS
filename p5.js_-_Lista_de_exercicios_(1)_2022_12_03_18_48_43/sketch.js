//Faça um círculo acompanhar a posição do cursor e mudar de cor com o clique do mouse.
let click = 0; 
let g = 0;
function setup() {
  createCanvas(400, 400);
}
function mouseClicked() {
  fill(random(255), random(255),random(255));
  
}

function draw() {
  background(220);
  circle(mouseX, mouseY, 200);
}