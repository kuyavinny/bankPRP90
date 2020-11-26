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
    {amount: 200, date:  124764445521},
    {amount: 450, date:  167202734658},
    {amount: -400, date: 491146958534},
    {amount: 3000, date: 622250976809},
    {amount: -650, date: 927923563042},
    {amount: -130, date: 1170976427420},
    {amount: 70, date:   1206456104396},
    {amount: 1300, date: 1551287510555}],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Glenmore Vinoya',
  movements: [
    {amount: 5000, date:  14852956653},
    {amount: 3400, date:  39180437308},
    {amount: -150, date:  50224823729},
    {amount: -790, date:  492545040256},
    {amount: -3210, date: 800723321732},
    {amount: -1000, date: 816880471563},
    {amount: 8500, date:  1499440697851},
    {amount: -30, date:   1576576449756}],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Mauricio Moreno',
  movements: [
    {amount: 200, date:  208161906953},
    {amount: -200, date: 307525740398},
    {amount: 340, date:  615210887681},
    {amount: -300, date: 633796865420},
    {amount: -20, date:  954498604344},
    {amount: 50, date:   1215770471451},
    {amount: 400, date:  1248436250543},
    {amount: -460, date: 1537121713867}],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Shay Rosner',
  movements: [
    {amount: 430, date: 67771266395},
    {amount: 1000, date:424462755523},
    {amount: 700, date: 931187703268},
    {amount: 50, date:  1399198087008},
    {amount: 90, date:  1464350286837}],
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
        deposits.push(transaction.amount);
        depositsValue = Balance.add(deposits);
        movementsBlock.innerHTML +=
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
