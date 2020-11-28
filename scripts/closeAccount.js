import accounts from './accounts.js';
import * as Login from './login.js';

function closeAccount (currentAccountID, user, pin) {
  debugger
  let userID = Login.getAccountID(user);
  console.log('userID: ', userID, 'accounts[currentAccountID.pin]: ', accounts[currentAccountID].pin);
  console.log('currentAccountID: ', currentAccountID, 'pin: ', pin);
  if (userID === currentAccountID && pin === accounts[currentAccountID].pin) {
    accounts.splice[currentAccountID, 1];
    return true;
  }
  return false;
}

export { closeAccount }