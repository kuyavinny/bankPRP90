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

export default accounts;