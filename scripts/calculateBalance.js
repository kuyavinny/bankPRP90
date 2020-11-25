function displayBalance (classEL, arr) {
  classEL.innerHTML = calculateBalance(arr);
}

function calculateBalance (arr) {
  return arr.reduce((acc, curr) => acc + curr);
}

function sum (arr) {
  return arr.reduce((sum, cur) => sum + cur);
}

export {calculateBalance, sum as add}