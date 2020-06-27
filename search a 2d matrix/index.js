var searchMatrix = function (matrix, target) {
  if (matrix.length === 0) return false;

  let row = matrix.length;
  let col = matrix[0].length;

  let left = 0;
  let right = row * col - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let curRow = Math.floor(mid / col);
    let curCol = Math.floor(mid % col);
    let midValue = matrix[curRow][curCol];

    if (target === midValue) return true;
    else if (target < midValue) {
      right = mid - 1;
    } else if (target > midValue) {
      left = mid + 1;
    }
  }
  return false;
};

var matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 50],
];
var testSearchMatrix = () => {
  // console.log(searchMatrix(matrix, 20));
  console.log(searchMatrix(matrix, 100));
};
testSearchMatrix();

// var searchMatrix = function (matrix, target) {
//   if (matrix.length === "") return false;
//   let row = matrix.length;
//   let col = matrix[0].length;
//   let left = 0; //6
//   let right = row * col - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2); //6 + 7 /2
//     console.log(`-----------------`);
//     console.log(`looking for: ${target}`);
//     console.log(`left = ${left}`);
//     console.log(`right = ${right}`);
//     console.log(`mid = ${mid}`);
//     const curRow = Math.floor(mid / col);
//     const curCol = Math.floor(mid % col);
//     console.log(`searching [${curRow}][${curCol}]`);
//     let midElement = matrix[curRow][curCol]; //getting the actually element
//     console.log(`midElement = ${midElement}`);
//     if (target === midElement) return true;
//     else if (target < midElement) {
//       console.log('...no match, searching UPPER half next')
//       console.log(mid, "there is something wrong here---------------------------")
//       right = mid - 1;
//     } else if (target > midElement) {
//       console.log('...no match, searching LOWER half next')
//       console.log(mid, "<---------mid inside >")
//       left = mid + 1;
//       console.log(left, "<--------what is left now?")
//     }
//   }
//   return false;
// };
