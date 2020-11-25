'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// Data
const account1 = {
  owner: 'Michael Elliott',
  movements: [
    {amount: 200, date: 927923563042},
    {amount: 450, date: 622250976809},
    {amount: -400, date: 1551287510555},
    {amount: 3000, date: 491146958534},
    {amount: -650, date: 167202734658},
    {amount: -130, date: 124764445521},
    {amount: 70, date: 1170976427420},
    {amount: 1300, date: 1206456104396}],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Glenmore Vinoya',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Mauricio Moreno',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Shay Rosner',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// Elements

function query(classEl) { // input: class element. ex. '.welcome'
  return document.querySelector(classEl)
}
const labelWelcome = query('.welcome');
const labelDate = query('.date');
const labelBalance = query('.balance__value');
const labelSumIn = query('.summary__value--in');
const labelSumOut = query('.summary__value--out');
const labelSumInterest = query('.summary__value--interest');
const labelTimer = query('.timer');

const containerApp = query('.app');
const containerMovements = query('.movements');

const btnLogin = query('.login__btn');
const btnTransfer = query('.form__btn--transfer');
const btnLoan = query('.form__btn--loan');
const btnClose = query('.form__btn--close');
const btnSort = query('.btn--sort');

const inputLoginUsername = query('.login__input--user');
const inputLoginPin = query('.login__input--pin');
const inputTransferTo = query('.form__input--to');
const inputTransferAmount = query('.form__input--amount');
const inputLoanAmount = query('.form__input--loan-amount');
const inputCloseUsername = query('.form__input--user');
const inputClosePin = query('.form__input--pin');

const movementsBlock = query('.movements');
const movementsDeposit = query('.movements__type--deposit');
const movementsWithdrawal = query('.movements__type--withdrawal')
const movementsDepositValue = query('.movements__value--deposit');
const movementsWithdrawalValue = query('.movements__value--withdrawal');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// Operations
let currentAccount = {};

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// Login Button

btnLogin.addEventListener('click', e => {
  e.preventDefault();

  // log in user
  import('/scripts/login.js').then((Login) => {
    let usernames = Login.generateUsernamesAndPins(accounts);
    let loggedIn = Login.checkLogin(usernames, inputLoginUsername.value, inputLoginPin.value)

    if (loggedIn) {
      containerApp.style.display = 'grid';
      currentAccount = accounts[loggedIn.accountID];
    }
  })

  // calculate balance
  import('/scripts/calculateBalance.js').then((Balance) => {
    labelBalance.innerHTML = Balance.calculateBalance(currentAccount.movements) + '€';

    let deposits = [];
    let depositsValue = 0;
    let withdrawals = [];
    let withdrawalsValue = 0;

    for (let i = currentAccount.movements.length - 1; i >= 0; i--) {
      let transaction = currentAccount.movements[i];
      let amount = transaction.amount;
      let date = new Date(transaction.date).toUTCString();

      if (transaction.amount > 0) {

        movementsBlock.innerHTML +=
        ` <div class="movements__row">
          <div class="movements__type movements__type--deposit"> Transaction #${i+1}\ndeposit </div>
          <div class="movements__date"> ${date} </div>
          <div class="movements__value movements__value--deposit"> ${amount}€ </div>
          </div>
        `;

      }
      if (transaction.amount < 0) {
        movementsBlock.innerHTML +=
        ` <div class="movements__row">
          <div class="movements__type movements__type--withdrawal"> Transaction #${i+1}\nwithdrawal </div>
          <div class="movements__date"> ${date} </div>
          <div class="movements__value movements__value--withdrawal"> ${amount}€ </div>
          </div>
        `;
      }

    }

    labelSumIn.innerHTML = depositsValue + '€';
    labelSumOut.innerHTML = withdrawalsValue + '€';
    labelSumInterest.innerHTML = (depositsValue * (currentAccount.interestRate / 100)) + '€';

  })

})
