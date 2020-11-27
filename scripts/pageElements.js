/////////////////////////////////////////////////
/////////////////////////////////////////////////
// Elements

function query(classEl) { // input: class element. ex. '.welcome'
  return document.querySelector(classEl)
}

export const labelWelcome = query('.welcome');
export const labelDate = query('.date');
export const labelBalance = query('.balance__value');
export const labelSumIn = query('.summary__value--in');
export const labelSumOut = query('.summary__value--out');
export const labelSumInterest = query('.summary__value--interest');
export const labelTimer = query('.timer');

export const containerApp = query('.app');
export const containerMovements = query('.movements');

export const btnLogin = query('.login__btn');
export const btnTransfer = query('.form__btn--transfer');
export const btnLoan = query('.form__btn--loan');
export const btnClose = query('.form__btn--close');
export const btnSort = query('.btn--sort');

export const inputLoginUsername = query('.login__input--user');
export const inputLoginPin = query('.login__input--pin');
export const inputTransferTo = query('.form__input--to');
export const inputTransferAmount = query('.form__input--amount');
export const inputLoanAmount = query('.form__input--loan-amount');
export const inputCloseUsername = query('.form__input--user');
export const inputClosePin = query('.form__input--pin');

export const movementsBlock = query('.movements');
export const movementsDeposit = query('.movements__type--deposit');
export const movementsWithdrawal = query('.movements__type--withdrawal')
export const movementsDepositValue = query('.movements__value--deposit');
export const movementsWithdrawalValue = query('.movements__value--withdrawal');

