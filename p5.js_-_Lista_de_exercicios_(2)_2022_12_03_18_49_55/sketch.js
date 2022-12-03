//Faça um círculo no centro da tela que encosta (muda seu tamanho) no cursor do mouse.
function setup() {
  createCanvas(400, 400);
}
let x1,y1,x2,y2,dx;
function draw() {
  background(220);
  x1 = width / 2;
  y1 = height / 2;

  x2 = mouseX;
  y2 = mouseY;

  dx = sqrt(pow(x1 - x2, 2) + pow(y1 - y2, 2));

  circle(x1, y1, 2 * dx);
}