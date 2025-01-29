let numRings = 10; 

function setup() {
  createCanvas(600, 600);
  noLoop();  
}

function draw() {
  background(255);  

  // colours
  let innerColor = color(225, 183, 215); 
  let threadColor = color(117, 13, 73); 

  for (let i = 0; i < 120; i++) {
    let centerX = random(width);  
    let centerY = random(height); 
    
    for (let j = 0; j < numRings; j++) {
      let innerRadius = 10 + j * 20;    
      let outerRadius = 10 + (j + 1) * 20;  

      let colorStart = innerColor;  
      let colorEnd = threadColor;   

      for (let k = innerRadius; k < outerRadius; k++) {
        let lerpedColor = lerpColor(colorStart, 
                                    colorEnd,
                                    map(k, 
                                        innerRadius, 
                                        outerRadius, 
                                        0.1,
                                        0.8));
        stroke(lerpedColor);
        strokeWeight(3 + (k % 4));  
        noFill();
        ellipse(centerX, centerY, k, k); 
      }
    }
  }
}