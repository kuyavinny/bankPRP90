// calculate and display balance
import * as AppUI from './pageElements.js';

function genMovementDisplay (type, accounts, accountID) {

  if (type === 'update') {
    AppUI.movementsBlock.innerHTML = '';
    displayMovement(accounts, accountID);
  } else {
    displayMovement(accounts, accountID);
  }
}

function displayMovement (accounts, accountID) {
  import('./calculateBalance.js').then((Balance) => {

      AppUI.labelBalance.innerHTML = Balance.calculateBalance(accounts[accountID].movements) + '€';

      let deposits = [];
      let depositsValue = 0;
      let withdrawals = [];
      let withdrawalsValue = 0;

      for (let i = accounts[accountID].movements.length - 1; i >= 0; i--) {
        let transaction = accounts[accountID].movements[i];
        let amount = transaction.amount;
        let date = new Date(transaction.date).toUTCString();

        if (transaction.amount > 0) {
          deposits.push(transaction.amount);
          depositsValue = Balance.add(deposits);
          AppUI.movementsBlock.innerHTML +=
          ` <div class="movements__row">
            <div class="movements__type movements__type--deposit"> Transaction #${i+1}\ndeposit </div>
            <div class="movements__date"> ${date} </div>
            <div class="movements__value movements__value--deposit"> ${amount}€ </div>
            </div>
          `;

        }
        if (transaction.amount < 0) {
          withdrawals.push(transaction.amount);
          withdrawalsValue = Balance.add(withdrawals);
          AppUI.movementsBlock.innerHTML +=
          ` <div class="movements__row">
            <div class="movements__type movements__type--withdrawal"> Transaction #${i+1}\nwithdrawal </div>
            <div class="movements__date"> ${date} </div>
            <div class="movements__value movements__value--withdrawal"> ${amount}€ </div>
            </div>
          `;
        }

      }
      // display account summary
      AppUI.labelSumIn.innerHTML = depositsValue + '€';
      AppUI.labelSumOut.innerHTML = withdrawalsValue + '€';
      AppUI.labelSumInterest.innerHTML = (depositsValue * (accounts[accountID].interestRate / 100)) + '€';
  })
}

export default genMovementDisplay;