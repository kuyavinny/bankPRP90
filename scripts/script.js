'use strict'; // may not be needed as use of modules defaults to use strict

/************ BANKIST APP *************/

/************ DEFAULT IMPORTS *************/
import accounts from './accounts.js';
import * as AppUI from './pageElements.js';
import * as Login from './login.js';
import genMovementDisplay from './genMovementDisplay.js';

/************ DEFAULT VARIABLES NEEDED FOR OPERATIONS *************/
let currentAccountID = null;
let usernames = [];

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/************ APP ACTIONS *************/


/************ ACCOUNT LOGIN *************/
AppUI.btnLogin.addEventListener('click', e => {
  e.preventDefault();

    let loggedIn = Login.checkLogin(AppUI.inputLoginUsername.value, AppUI.inputLoginPin.value)

    if (loggedIn) {
      AppUI.containerApp.style.display = 'grid';
      // currentAccount = accounts[loggedIn.accountID]; refactored
      currentAccountID = loggedIn.accountID;
      genMovementDisplay('initial', accounts, currentAccountID);
      AppUI.labelWelcome.innerHTML = `<h1>Welcome, ${accounts[currentAccountID].owner.split(' ')[0]}!</h1>`;
    }
    AppUI.inputLoginUsername.value = '';
    AppUI.inputLoginPin.value = '';
})


/************ TRANSFER MONEY *************/
AppUI.btnTransfer.addEventListener('click', e => {
  e.preventDefault();


  import('./transferMoney.js').then((Transfer) => {
    Transfer.transferMoney(Login.getAccountID(AppUI.inputTransferTo.value), currentAccountID, AppUI.inputTransferAmount.value)
    AppUI.labelWelcome.innerHTML = 'MONEY MOVED';
    genMovementDisplay ('update', accounts, currentAccountID);
    AppUI.inputTransferAmount.value = '';
    AppUI.inputTransferTo.value = '';
  })

})

/************ LOAN REQUEST *************/
AppUI.btnLoan.addEventListener('click', e => {
  e.preventDefault();

  import('./loanRequest.js').then((Loan) => {
    debugger
    console.log(AppUI.inputLoanAmount.value);
    if(Loan.loanRequest(currentAccountID, AppUI.inputLoanAmount.value)) {
      AppUI.labelWelcome.innerHTML = 'Loan Approved';
      genMovementDisplay('update', accounts, currentAccountID);
      AppUI.inputLoanAmount.value = '';
    } else {
      AppUI.labelWelcome.innerHTML = 'Loan Denied. No deposit greater than 10% of loan amount requested.'
      AppUI.inputLoanAmount.value = '';
    }
  })
})

AppUI.btnClose.addEventListener('click', e => {
  e.preventDefault();

  import('./closeAccount.js').then((Close) => {
    if(Close.closeAccount(currentAccountID, AppUI.inputCloseUsername.value, AppUI.inputClosePin.value)){
      AppUI.labelWelcome.innerHTML = '<h1> Account Closed </h1>';
    }
  })
})