function calculateBalance (arr) {
  let amounts = [];

  arr.forEach((item) => {
    amounts.push(item.amount)

  })

  return amounts.reduce((acc, curr) => acc + curr);
}

function sum (arr) {
  return arr.reduce((sum, cur) => sum + cur);
}

export {calculateBalance, sum as add}