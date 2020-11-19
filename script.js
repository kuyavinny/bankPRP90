'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Michael Elliott',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
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
