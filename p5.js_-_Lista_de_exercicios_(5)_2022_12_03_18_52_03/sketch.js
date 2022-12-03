//Desenhe uma forma irregular utilizando beginShape - endShape e faça com que ela acompanhe a posição do curso
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  beginShape(TESS);
  vertex(mouseX+50, mouseY+20);
  vertex(mouseX+100, mouseY+40);
  vertex(mouseX+200,mouseY+80);
  vertex(mouseX+20, mouseY+50);
 
  endShape(CLOSE);
}
