 cell1 = "D2";
 cell2 = "D2";

function chessBoardCellColor(cell1, cell2){
  const board = {
    "A": 1,
    "B": 2,
    "C": 3,
    "D": 4,
    "E": 5,
    "F": 6,
    "G": 7,
    "H": 8,
  };
  const group1 = (board[cell1[0]] = parseInt(cell1[1])) % 2;
  const group2 = (board[cell1[0]] = parseInt(cell2[1])) % 2;

  return group1 === group2;
}

console.log(chessBoardCellColor(cell1, cell2))