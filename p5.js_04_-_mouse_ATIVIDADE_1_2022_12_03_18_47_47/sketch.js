//Crie um sketch onde um círculo é desenhado ao redor do cursor do mouse. Se o mouse  for pressionado o tamanho do círculo deve mudar (pequeno ou grande). O círculo deve ser transparente.
let press =0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255,255,255);
  
  
  if(mouseIsPressed){
    press = press + 10;
  }
  
  circle(mouseX, mouseY, press)
  
}