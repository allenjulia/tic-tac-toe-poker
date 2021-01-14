const box = []

function play(clickedId){
  let playerSpan = document.getElementById("player")
  let clickedElem = document.getElementById(clickedId)
  if(playerSpan.innerText === "X"){
    playerSpan.innerText = "O";
    clickedElem.innerText = 'X';
    box[clickedId] = 'X';
  }
  else {
    playerSpan.innerText ="X";
    clickedElem.innerText = 'O';
    box[clickedId] = 'O';
  }
  console.log(box);

  const topLeft = box[0];
  const topCenter = box[1];
  const topRight = box[2];
  const middleLeft = box[3];
  const middleCenter = box[4];
  const middleRight = box[5];
  const bottomLeft = box[6];
  const bottomCenter = box[7];
  const bottomRight = box[8];

  if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
    alert(`${middleLeft} is the winner`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    alert(`${bottomLeft} is the winner`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
    alert(`${topCenter} is the winner`);
    return;
  }
  if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    alert(`${topRight} is the winner`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
    alert(`${bottomLeft} is the winner`);
    return;
  }
  let boxesFull = true;
  for (let i=0; i <= 8;i++){
    if(box[i]===undefined){
      boxesFull = false;
    }
  }  
  if(boxesFull ===true) {
    alert("Cat's game, there is no winner");
    }
}