'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


//............ displaying movements on website..................
const displayMovements= function(movements){
  containerMovements.innerHTML='';
  // containerMovements.textContent=' ';
  movements.forEach(function(mov,i){
    const type=mov>0?'deposit':'withdrawal';
    const html=
    `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>`
  containerMovements.insertAdjacentHTML('afterbegin',html)
  });
}
// displayMovements(account1.movements);
// ...................................................................


//.................creating functions for summary......................
const calcDisplaySummary=function(acc){
  const incomes=acc.movements.filter(mov => mov>0).reduce((sum,cur) => sum+cur);
  labelSumIn.textContent=`${incomes}€`;

  const out=acc.movements.filter(mov => mov<0)
        .reduce((sum,mov) => sum+Math.abs(mov),0);
  labelSumOut.textContent=`${out}€`;

  const interest=acc.movements.filter(deposit => deposit>0)
        .map(int => int*acc.interestRate/100)
        .filter(int => int>1)
        .reduce((sum,int) => sum+int);
  labelSumInterest.textContent=`${interest}€`;
}
// calcDisplaySummary(account1.movements);

//.................creating function for global Balance...............
const calcDisplayBalance=function(acc){
  const balance=acc.movements.reduce(function(acc,cur){return(acc+cur)});
  labelBalance.textContent=`${balance}€`;
  acc.balance=balance;
}
// calcDisplayBalance(account1.movements);
//....................................................................

//................creating username for each account holder............
const createUserName=function(accs){
  accs.forEach(function(acc){
    acc.userName=acc.owner.toLocaleLowerCase().split(' ').map(function(name){ return(name[0])}).join('');
  })
}
createUserName(accounts)
// accounts.forEach(function(name){console.log(name.userName)});
// const user='Steven Thomas Williams'
// const userName=user.toLocaleLowerCase().split(' ').map(function(name){ return(name[0])}).join('');
// console.log(userName);
// ...................................................................


//................creating function for updating UI............
const updateUI =function(acc){
  //display Movements
  displayMovements(acc.movements);
  //display Balance
  calcDisplayBalance(acc);
  //display summary
  calcDisplaySummary(acc);
}
// ...................................................................


//...............Functionality of Login ..............................
let currentAccount;
btnLogin.addEventListener('click',function(e){
  //preventing default action
  e.preventDefault();
  
  currentAccount=accounts.find(acc=>acc.userName===inputLoginUsername.value);  
  //checking for correct Login Pin
  if(currentAccount?.pin===Number(inputLoginPin.value)){
    
    inputLoginUsername.value=inputLoginPin.value='';
    inputLoginPin.blur();
    containerApp.style.opacity=1;
    //display Welcome massage
    labelWelcome.textContent=`Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    //updating UI
    updateUI(currentAccount);
  }
  else{
    inputLoginUsername.value=inputLoginPin.value='';
    inputLoginPin.blur();
    containerApp.style.opacity=0;
  }
})
//.....................................................................


//...............Functionality of Transfer section.....................

btnTransfer.addEventListener('click',function(e){
  e.preventDefault();
  
  const amount=Number(inputTransferAmount.value);
  const recieverAcc=accounts.find(acc=>acc.userName===inputTransferTo.value);

  if( recieverAcc && recieverAcc!== currentAccount.userName && amount>0 && amount<currentAccount.balance ){
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
  inputTransferAmount.value=inputTransferTo.value='';
  inputTransferAmount.blur();

})
//......................................................................
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



/*
................Coding Challenge #1................
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners 
about their dog's age, and stored the data into an array (one array for each). For 
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years 
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages 
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have 
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat 
ages from that copied array (because it's a bad practice to mutate function 
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 
�
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 

const dogsJulia=[3,5,2,12,7];
const dogsKate=[4,1,15,8,3];

const checkDogs=function(dogsJulia,dogsKate){

  //1..
  // const newDogsJulia=[...dogsJulia];
  // const newDogsKate=[...dogsKate];
  const newDogsJulia=dogsJulia.slice(1,dogsJulia.length-2);
  const newDogsKate=dogsKate.slice(1,dogsKate.length-2);
  console.log(newDogsJulia);
  console.log(newDogsKate);
  //2.
  const newArr=[...newDogsJulia,...newDogsKate];
  console.log(newArr);

  newDogsJulia.forEach(function(dog,i){
    dog>3&&console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`);
    dog<3&&console.log(`Dog number ${i+1} is a puppy, and is ${dog} years old`);
  });
  newDogsKate.forEach(function(dog,i){
    dog>3&&console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`);
    dog<3&&console.log(`Dog number ${i+1} is an puppy, and is ${dog} years old`);
  });
  
}
checkDogs(dogsJulia,dogsKate);
*/


/*
........................Coding Challenge #2.....................
Let's go back to Julia and Kate's study about dogs. This time, they want to convert 
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's 
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is 
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, 
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as 
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know 
from other challenges how we calculate averages �)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]


// const data1=[5, 2, 4, 1, 15, 8, 3];
// const data2=[16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge=function(data){
//   //1.
//   // const humanAge=data.map(function(age){
//   //   return(age>2?16+(age*4):2*age);
//   // })
//   let humanAge=data.map(age=>age>2?16+(age*4):2*age);
  
//   //2..
//   // humanAge=humanAge.filter(function(age){
//   //   return(age>=18);
//   // })
//   humanAge=humanAge.filter(age=>age>=18);

//   //3...
//   // const avgAge=humanAge.reduce(function(acc,age){
//   //   return(acc+age);
//   // },0);
//   const avgAge=humanAge.reduce((acc,age)=>acc+age,0)/3;
//   console.log(avgAge)
// }
// //4....
// calcAverageHumanAge(data1);
// calcAverageHumanAge(data2);
*/