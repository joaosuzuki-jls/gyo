const canvas = document.getElementById("canvas-grid");
const startButton = document.getElementById('start-button');
const ctx = canvas.getContext('2d');
const cellSize = 20;

for(let i=0; i <= 400; i += cellSize){
  ctx.fillStyle = 'grey';
  ctx.fillRect(0, i, 400, 1);
  ctx.fillRect(i, 0, 1, 400);
}

function StartSimulation() {
  //
}

function GetCursorPosition(canvas, event) {
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
  const positions = GetCursorPosition(canvas, event);
  DrawLiveCell(positions[0], positions[1]);
});

startButton.addEventListener('click', () => {
  SimulationStart();
})