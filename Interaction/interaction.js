let squareSize = 5;
let fallingSpeed = 5;
let trailLength = 40; // Adjust for desired trail length
let pile = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
}

function draw() {
  background(240); // Light gray background

  // Create square every second
  if (frameCount % 10 === 0) {
    const newSquare = createSquare(random(width - squareSize * 2), 0); // Limit X, start at top
    pile.push(newSquare);
  }

  // Update and draw squares (avoid modifying pile array inside loop)
  const updatedPile = pile.map((square) => {
    const updatedSquare = updateSquare(square);
    drawSquare(updatedSquare);
    return updatedSquare; // Return updated square for next iteration
  });

  // Update pile reference with updated squares (avoid concurrent modification)
  pile = updatedPile;
}

function createSquare(x, y) {
  return { x, y, color: randomColor(), falling: true, trail: [] }; // New square object with trail array
}

function updateSquare(square) {
  if (square.falling) {
    square.y += fallingSpeed;
    
    // Update trail positions (store previous positions)
    square.trail.unshift({ x: square.x, y: square.y }); // Add new position at the beginning
    if (square.trail.length > trailLength) {
      square.trail.pop(); // Remove oldest position if trail exceeds length
    }
  } else {
    // Clear trail when square lands
    square.trail = [];
  }

  // Bottom landing check and falling state update
  if (square.y + squareSize >= height) {
    square.y = height - squareSize;
    square.falling = false;
  }

  return square; // Return updated square object
}

function drawSquare(square) {
  fill(square.color);
  rect(square.x, square.y, squareSize, squareSize);

  // Draw trail with decreasing opacity (optional for curved effect)
  for (let i = 0; i < square.trail.length; i++) {
    const trailSegment = square.trail[i];
    const opacity = 1 - i / (trailLength - 1); // Opacity based on trail position (0 to 1)
    fill(square.color, opacity * 255); // Adjust opacity calculation (0 to 255)
    rect(trailSegment.x, trailSegment.y, squareSize, squareSize);
  }
}

function randomColor() {
  return color(random(255), random(255), random(255)); // Generate random RGB
}