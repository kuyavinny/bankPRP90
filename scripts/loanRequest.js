import accounts from './accounts.js';
import moveMoney from './transferMoney.js';

function loanRequest (accountID, amount) {
  let movements = accounts[accountID].movements;
  let hasDep10pct = false;

  for (let i = 0, len = movements.length; i < len; i++) {
    let transaction = movements[i];
    if (transaction.amount < 0) {continue;}
    if (transaction.amount >= (amount * 0.1)) {
      hasDep10pct = true;
      break;
    }
  }
  if (hasDep10pct) {
    moveMoney('add', accountID, amount);
    return true;
  }
  return false;
}

export { loanRequest }