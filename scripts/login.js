function generateUsernamesAndPins (arr) {
  let usernames = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    let account = arr[i];
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

function checkLogin (accounts, name, pin) {
  for (let i = 0, len = accounts.length; i < len; i++) {
    let account = accounts[i];

    if (account.username === name && account.pin === pin) {

      return account;
    }
  }
  return null;
}

export {generateUsernamesAndPins, checkLogin};