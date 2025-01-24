function setup() {
  createCanvas(600, 700); 
  noLoop();      
}

function draw() {
  background(255);        
  
  noStroke()
  fill(22, 38, 114); // Red
  rect(400, 200, 200, 200); 
  
  noStroke()
  fill(214, 23, 31); // Red
  rect(0, 0, 400, 200); 
  
  stroke(0);
  strokeWeight(10); 
  line(400, 0, 400, height);
  line(0, 200, width, 200);
  line(400, 400, 600, 400);
  line(0, 697, 400, 697);

}




