// This rug uses Manhattan distance :D

function setup() {
  createCanvas(800, 450);
  background(255);
  
  // No. of patterns
  let patternsX = 2.5;
  let patternsY = 8;
  
  // Size of each pattern
  let patternWidth = width / patternsX;
  let patternHeight = height / patternsY;
  
  // Draw patterns in a grid
  for (let px = 0; px < patternsX; px++) {
    for (let py = 0; py < patternsY; py++) {
      drawPattern(px * patternWidth, py * patternHeight, patternWidth, patternHeight);
    }
  }
}


function drawPattern(startX, startY, w, h) {
  let cols = 55;
  let rows = 6;
  let tileW = w / cols;
  let tileH = h / rows;
  
  // Define Colors
  let black = color(0);
  let white = color(255);
  let grey = color(180);
  let red = color(200, 50, 50);
  let yellow = color(255, 204, 0);
  let green = color(0, 100, 0);
  let blue = color(50, 100, 150);
  
  noStroke();
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = startX + (i * tileW);
      let y = startY + (j * tileH);
      
      let centerX = floor(cols / 4);
      let centerY = floor(rows / 2);
      let distance = abs(i - centerX) + abs(j - centerY);
      
      let mirrorCenterX = cols - centerX - 1;
      let mirrorDistance = abs(i - mirrorCenterX) + abs(j - centerY);
      let effectiveDistance = min(distance, mirrorDistance);
      
      let fillColor;
      if (effectiveDistance < 1) fillColor = yellow;
      else if (effectiveDistance < 2) fillColor = white;
      else if (effectiveDistance < 3) fillColor = grey;
      else if (effectiveDistance < 5) fillColor = black;
      else if (effectiveDistance < 6) fillColor = white;
      else if (effectiveDistance < 7) fillColor = grey;
      else if (effectiveDistance < 8) fillColor = yellow;
      else if (effectiveDistance < 10) fillColor = red;
      else if (effectiveDistance < 12) fillColor = green;
      else if (effectiveDistance < 13) fillColor = blue;
      else if (effectiveDistance < 14) fillColor = white;
      else if (effectiveDistance < 15) fillColor = black;
      else if (effectiveDistance < 16) fillColor = white;
      else if (effectiveDistance < 17) fillColor = black;
      else if (effectiveDistance < 30) fillColor = yellow;
      else fillColor = (i + j) % 2 === 0 ? black : white;
      
      fill(fillColor);
      rect(x, y, tileW, tileH);
    }
  }
}
