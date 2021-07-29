const transpose = function(matrix) {
    let result = [];
    for (let i = 0; i < matrix[0].length; i++) {
      const tempMatrix = [];
      for (let j = 0; j < matrix.length; j++) {
        tempMatrix.push(matrix[j][i]);
      }
      result.push(tempMatrix);
    }
    return result;
  };
  const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (const l of horizontalJoin) {
      if (l.includes(word)) {
        return true;
      }
    }
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (const m of verticalJoin) {
      if (m.includes(word)) {
        return true;
      }
    }
    return false;
  };
//   const result = wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ], 'SEINFELD')
//   console.log(result);

  module.exports = wordSearch;