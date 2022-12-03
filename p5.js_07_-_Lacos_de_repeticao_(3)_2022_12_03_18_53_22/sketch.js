function setup() {
  createCanvas(400, 400);
}
let gap =5;
let x;
function draw() {
 ;
  background(220);
   for(let i = 0; i<10; i++){
      x = (gap + 20)*i;
     fill(0,0,255);
     square(x,20,20);
     fill(0,255,0);
     circle(x+10, 100, 20);
     
   }
     
   
     
}