
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let arr = [];
  if ( matrix === undefined || !Array.isArray(matrix) || (matrix.length === 0 || matrix[0].length === 0) ) return arr;
  
  matrix.forEach((subMatrix, index) => { 
    if (index % 2 !== 0) {
      arr = arr.concat(subMatrix.reverse()); 
    }
    else {
      arr = arr.concat(subMatrix);
    }
  });
  
  return arr;
}
