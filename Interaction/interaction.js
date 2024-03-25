function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < cols; i++) { // iterate up to cols (exclusive)
      arr[i] = new Array(rows);
    }
    return arr;
  }
  
  let grid;
  let w = 10;
  let cols, rows;
  
  function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    noStroke();
    cols = floor(width / w); // use floor to ensure integer division
    rows = floor(height / w);
    grid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) { // iterate up to rows (exclusive)
        grid[i][j] = 0;
      }
    }
  }
  
  function draw() {
    background(0);
  
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        stroke(255);
        fill(grid[i][j] * 255);
        let x = i * w;
        let y = j * w;
        square(x, y, w);
      }
    }
  }  