import accounts from './accounts.js';

function generateUsernamesAndPins () {
  let usernames = [];

  for (let i = 0; i < accounts.length; i++) {

    let account = accounts[i];
    let username = '';
    let pin = '';

    account.owner.split(' ').forEach((item) => {
      username += item[0].toLowerCase();
    });

    pin = account.pin.toString();

    usernames.push({'username': username, 'pin': pin, 'accountID': i});

  }
  return usernames;
}

function checkLogin (name, pin) {

  let usernames = generateUsernamesAndPins();

  for (let i = 0, len = usernames.length; i < len; i++) {
    let account = usernames[i];

    if (account.username === name && account.pin === pin) {
      return account;
    }
  }
  return null;
}

function getAccountID (username) {
  let usernames = generateUsernamesAndPins();

  for (let i = 0, len = usernames.length; i < len; i++) {
    if (usernames[i].username === username) {
      return usernames[i].accountID;
    }
  }
  return null;
}

export { checkLogin, getAccountID };