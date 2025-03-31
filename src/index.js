const canvas = document.getElementById("canvas-grid");
const startButton = document.getElementById('start-button');
const ctx = canvas.getContext('2d');
const cellSize = 20;
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;


for(let i=0; i <= innerWidth; i += cellSize){
  ctx.fillStyle = 'grey';
  ctx.fillRect(0, i, ctx.canvas.width, 1);
  ctx.fillRect(i, 0, 1, ctx.canvas.height);
}

function StartSimulation() {
}

function GetCellPosition(canvas, event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  
  const xSquarePos = x / cellSize;
  const ySquarePos = y / cellSize;

  return [xSquarePos, ySquarePos]
}

function DrawLiveCell(canvasX, canvasY) {
  const xSquarePos = Math.trunc(canvasX);
  const ySquarePos = Math.trunc(canvasY); 
  ctx.fillStyle = 'black';  
  ctx.fillRect(xSquarePos * cellSize, ySquarePos * cellSize, cellSize, cellSize);    
}

canvas.addEventListener('mouseup', (event) => {
  const positions = GetCellPosition(canvas, event);
  DrawLiveCell(positions[0], positions[1]);
  }
);

startButton.addEventListener('click', () => {
  StartSimulation();
})