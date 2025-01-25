function setup() {
  createCanvas(600, 700);
  noLoop();
}

function draw() {
  background(255); 
  noStroke(); 
  
  let colors = [
    [249, 3, 2], //red      
    [32, 128, 202],//blue
    [255, 239, 1]//yellow
  ];

  // Fill rectangles with colors
  fill(colors[0]);
  rect(0, 30, 80, 300); 

  fill(colors[1]); 
  rect(300, 30, 250, 170); 

  fill(colors[2]); 
  rect(300, 330, 250, 170); 

  fill(colors[1]); 
  rect(100, 330, 60, 170); 

  fill(colors[0]); 
  rect(550, 200, 50, 130); 
  
  fill(colors[0]); 
  rect(80, 600, 20, 130); 

  // Lines
  stroke(0); 
  strokeWeight(11); 

  // 5 vertical lines at custom positions
  let verticalPositions = [100, 160, 300, 550]; 
  for (let x of verticalPositions) {
    line(x, 0, x, height);
  }
  
  // Add three horizontal half-lines
  line(300, 200, 600, 200); 
  line(0, 600, 160, 600);
  line(300, 660, 550, 660);
   
  // Vertical line
  line(80,0, 80, height);
  
  // 3 horizontal lines at custom positions
  let horizontalPositions = [30, 330, 500];
  for (let y of horizontalPositions) {
    line(0, y, width, y);
  }
}
