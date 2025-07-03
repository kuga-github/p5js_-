// Interactive p5.js sketch
// This is a starter template - modify it to create your own interactive art!

let circles = [];
let colorPalette = [];
let currentColorIndex = 0;

function setup() {
  // Create canvas and attach it to the canvas-container div
  let canvas = createCanvas(200, 200);
  canvas.parent('canvas-container');
  
  // Initialize color palette
  colorPalette = [
    color(255, 107, 107), // Red
    color(78, 205, 196),  // Teal
    color(255, 193, 84),  // Orange
    color(162, 155, 254), // Purple
    color(255, 236, 139), // Yellow
    color(255, 154, 162)  // Pink
  ];
  
  background(20);
  
  // Instructions
  textAlign(CENTER);
  fill(255);
  textSize(16);
  text("Click to add colorful circles!", width/2, 30);
  text("Press SPACE to change colors | Press 'c' to clear", width/2, 50);
}

function draw() {
  // Fade background slightly for trailing effect
  fill(20, 20);
  rect(0, 0, width, height);
  
  // Update and draw circles
  for (let i = circles.length - 1; i >= 0; i--) {
    let circle = circles[i];
    
    // Update circle
    circle.x += circle.vx;
    circle.y += circle.vy;
    circle.size *= 0.99; // Shrink slightly
    circle.alpha -= 2;   // Fade out
    
    // Draw circle
    push();
    translate(circle.x, circle.y);
    fill(red(circle.color), green(circle.color), blue(circle.color), circle.alpha);
    noStroke();
    ellipse(0, 0, circle.size, circle.size);
    
    // Add a subtle glow
    stroke(red(circle.color), green(circle.color), blue(circle.color), circle.alpha * 0.3);
    strokeWeight(2);
    noFill();
    ellipse(0, 0, circle.size + 10, circle.size + 10);
    pop();
    
    // Remove circle if it's too small or transparent
    if (circle.size < 5 || circle.alpha <= 0) {
      circles.splice(i, 1);
    }
  }
  
  // Show current color indicator
  push();
  fill(colorPalette[currentColorIndex]);
  noStroke();
  ellipse(width - 30, 30, 40, 40);
  stroke(255);
  strokeWeight(2);
  noFill();
  ellipse(width - 30, 30, 45, 45);
  pop();
}

function mousePressed() {
  // Add a new circle at mouse position
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    circles.push({
      x: mouseX,
      y: mouseY,
      vx: random(-2, 2),
      vy: random(-2, 2),
      size: random(30, 80),
      color: colorPalette[currentColorIndex],
      alpha: 255
    });
  }
}

function keyPressed() {
  if (key === ' ') {
    // Change color
    currentColorIndex = (currentColorIndex + 1) % colorPalette.length;
  } else if (key === 'c' || key === 'C') {
    // Clear canvas
    background(20);
    circles = [];
  } else if (key === 'r' || key === 'R') {
    // Add random circles
    for (let i = 0; i < 10; i++) {
      circles.push({
        x: random(width),
        y: random(height),
        vx: random(-3, 3),
        vy: random(-3, 3),
        size: random(20, 60),
        color: random(colorPalette),
        alpha: 255
      });
    }
  }
}

// Optional: Add window resize handling
function windowResized() {
  resizeCanvas(800, 600);
  background(20);
}
