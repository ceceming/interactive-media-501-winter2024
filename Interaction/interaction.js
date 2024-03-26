function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < cols; i++) { 
        arr[i] = new Array(rows);
        for (let j = 0; j < arr[i].length; j++)
            arr[i][j] = 0;
    }
    return arr;
}

let grid;
let w = 15;
let cols, rows;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    noStroke();
    cols = floor(width / w);
    rows = floor(height / w);
    grid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = 0;
        }
    }

}

let lastSquareTime = 0;

// Array to store a random color for each row
let rowColors = [];

function draw() {
    background(0, 0, 0);

  // Generate random colors for rows if not already done
  if (rowColors.length === 0) {
    for (let i = 0; i < rows; i++) {
      rowColors.push(color(random(255), random(255), random(255)));
    }
  }

    // Draw squares with appropriate colors
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let state = grid[i][j];
          if (state === 1) {
            let color = rowColors[j]; // Get the color for this row
            fill(color);
            let x = i * w;
            let y = j * w;
            square(x, y, w);
          }
        }
      }
    
    let nextGrid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let state = grid[i][j];
            if (state === 1) {
                let below = grid[i][j + 1];
                if (below === 0 && j < rows - 1) {
                    nextGrid[i][j + 1] = 1;
                } else {
                    nextGrid [i][j] = 1;
                }
            }
        }
    }
    grid = nextGrid;

    //Random falling from the top

    let timeSinceLast = millis() - lastSquareTime;
    if (timeSinceLast >= 1000 / 12) { 
        for (let i = 0; i < 3; i++) { 
            let randomCol = floor(random(cols));
            grid[randomCol][0] = 1;
        }
        lastSquareTime = millis();
    }

}  