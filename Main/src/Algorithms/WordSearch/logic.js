function exist(board, word) {
  const rows = board.length;
  const cols = board[0].length;

  function dfs(r, c, index) {
    // full word found
    if (index === word.length) return true;

    // out of bounds or mismatch
    if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= cols ||
      board[r][c] !== word[index]
    ) {
      return false;
    }

    // mark visited
    const temp = board[r][c];
    board[r][c] = "#";
    console.log(board);

    // explore 4 directions
    const found =
      dfs(r + 1, c, index + 1) ||
      dfs(r - 1, c, index + 1) ||
      dfs(r, c + 1, index + 1) ||
      dfs(r, c - 1, index + 1);

    // backtrack
    board[r][c] = temp;
    console.log(board);

    return found;
  }

  // try starting from every cell
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }

  return false;
}

const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];

const word = "ASABFDECCESE";

console.log(exist(board, word));
