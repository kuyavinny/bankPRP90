/*
input - accounts are objects, amount is money
      - output - number

output - boolean
requirements - transfer money from one account to another

variables:
  moneyTo - string containing account ID
  moneyFrom - string containing account ID

 */

/************ IMPORT ACCOUNT DATA FOR OPERATIONS *************/
import accounts from './accounts.js';


function transferMoney (moneyTo, moneyFrom, amount) {
  let movedTo = moveMoney('add', moneyTo, amount);
  let movedFrom = moveMoney('subtract', moneyFrom, amount);

  if (movedFrom && movedTo) {
    return true;
  }
  return false;
}

function moveMoney (type, accountToFrom, amount) {

  let account = accounts[accountToFrom.accountID];

  if (type === 'add') {
    account.movements.push({amount: parseInt(amount), date: Date.now()});
    return true;
  } else if (type === 'subtract') {
    account.movements.push({amount: -parseInt(amount), date: Date.now()})
    return true;
  } else { // I don't know what you want me to do
    return false;
  }

}

export { transferMoney }