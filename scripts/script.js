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

    usernames = Login.generateUsernamesAndPins(accounts);

    let loggedIn = Login.checkLogin(usernames, AppUI.inputLoginUsername.value, AppUI.inputLoginPin.value)

    if (loggedIn) {
      AppUI.containerApp.style.display = 'grid';
      // currentAccount = accounts[loggedIn.accountID]; refactored
      currentAccountID = loggedIn.accountID;

      genMovementDisplay('initial', accounts, currentAccountID);
    }
})


/************ TRANSFER MONEY *************/
AppUI.btnTransfer.addEventListener('click', e => {
  e.preventDefault();


  import('./transferMoney.js').then((Transfer) => {

    Transfer.transferMoney(usernames[Login.getAccountID(usernames, AppUI.inputTransferTo.value)], usernames[currentAccountID], AppUI.inputTransferAmount.value)
    AppUI.labelWelcome.innerHTML = 'MONEY MOVED';
    genMovementDisplay ('update', accounts, currentAccountID);
  })

})