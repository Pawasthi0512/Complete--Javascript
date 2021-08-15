'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   deliveryLocation: ['Via Angelo Tavanti 23', 'Firenze', 'Italy'],
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   /*
//   //openDelivery: function(obj){
//   //   console.log(obj);
//   // } these both are same
//   openDelivery: function(a,c,b){
//     console.log(a,b,c);
//   }
//   */

//   // spreadOperator: function(a=0,b=0,c=0,d=0,e=45){
//   //   console.log(a,b,c,d,e);
//   // }
// };

/*
////////////Short circuit Operator//////////

/////Or Operator Short Circuit//////
let val= 0||undefined||NaN||'Puneet'||''||'King';
let val= 0||undefined||NaN;

/////AND Operator Short Circuit//////
let val= 'Puneet'&&23&&45&&null;
let val= 'Puneet'&&23&&45&&65;

/////Nullish Operator Short Circuit//////
let val= undefined??NaN??'Puneet'??''??'King';
let val= undefined??'Puneet'??''??'King';
let val= undefined??null;
console.log(val);
*/

// destructuring  objects
// const {name,deliveryLocation, openingHours}=restaurant;
// console.log(name,deliveryLocation, openingHours);

// Giving variable name to object name
// const {name: restaurantName,deliveryLocation: city, openingHours:openingTime}=restaurant;
// console.log(restaurantName,city,openingTime);

/*
////// Assigning default value to a destructuring variable///////
const {name: restaurantName=7,deliveryLocation: city, open= 8}=restaurant;
console.log(restaurantName,city, open);//If 'open' will be present in our 'restaurant' object then its
value will be assigned to 'open' variable otherwise it will carry default value.
*/

/*
/////////Nested objects///////////
const {
  openingHours:{thu:{open: openThus,closeThus},
  fri:{ open:openFri,close:closeFri},},
}=restaurant;
console.log(openThus,closeFri);
*/

/*
//////// Reassigning a variable through destructuring//////
let a=11,b=12;
const obj={a:23,b:34};
({a,b}=obj);/////We have to put "Parenthesis"
console.log(a,b)
*/

/*
///// Passing an object to a object Method/////////
const obj={ a:4,b:5,c:6};
restaurant.openDelivery(obj);
*/


/*
/////////////spread operator/////////
const arr1=[1,2,3,4];
const arr2=[5,6,7,8,];
const withoutSpreadOperatorNewArr=[arr[0],arr[1],arr[2],arr[3],5,6]
console.log(withoutSpreadOperatorNewArr);
const withSpreadOperatorNewArr=[...arr,5,6];
console.log(withSpreadOperatorNewArr);'


////merging two array/////////
const newArr=[...arr1,...arr2];
console.log(...newArr);

////adding some data to copy of mainMenu/////
const newMainMenu=[...restaurant.mainMenu,'Potato'];
console.log(newMainMenu);
restaurant.mainMenuMenu=[...restaurant.mainMenu,'Potato'];
console.log(...restaurant.mainMenuMenu);

///copy whole object///////
const newCopyRestaurant={...restaurant};
newCopyRestaurant.name="Puneet";
console.log(newCopyRestaurant);

/////Passing elements of an array in function individually//////
restaurant.spreadOperator(...arr1);
*/

/*
////////Rest operator///////////

const arr1=[1,2,3,4];
const arr2=[5,6,7,8,];
const [a,b,...c]=[...arr1,10,11,12];
const [a,b,c,...d]=[...arr1,12,...arr2];
const [a, ,c,...d]=[...arr1,12,...arr2];//it will skip 3 from generated new array
console.log(a,c,d);

///accessing days opening time rest operator///////////
const {sat, ...weekdays}=restaurant.openingHours;
console.log(sat,weekdays);

///creating an add function which can take as many arguments as we will pass in it.

const add=function(...element){
  let sum=0;
  for (let i=0;i<element.length;i++){
    sum+=element[i];
  }
  console.log(element);
  console.log(sum);
}
add(1,2,3,4);
add(1,2,3,4,6,7,4,6);
add(1,2,3,...[4,6,6,5,4]);
add(...[1,2,3],...[4,6,6,5,4]);
*/

/*
////////////Coding Challenge #1/////////////
We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on 
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and 
'players2')
2. The first player in any player array is the goalkeeper and the others are field 
players. For Bayern Munich (team 1) create one variable ('gk') with the 
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
field players
3. Create an array 'allPlayers' containing all players of both teams (22 
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
new array ('players1Final') containing all the original team1 players plus 
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player 
names (not an array) and prints each of them to the console, along with the 
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which 
team is more likely to win, without using an if/else statement or the ternary 
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored




const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
};


///////Creating Two Arrays//////
// let[gk,...fieldPlayers]=game.players[0];
// const players1=[gk,fieldPlayers];
// [gk,...fieldPlayers]=game.players[1];
// const players2=[gk,fieldPlayers];
// console.log(players1);
// console.log(players2);

///////Creating New array having all players///////
// const allPlayers=[...game.players[0],...game.players[1]];
// console.log(...allPlayers);

//////Adding new substitutes Players in first team array///////
// const players1final=[...game.players[0],'Thiago','Coutinho','Persic'];
// console.log(players1final);

//5.
// const{odds:{team1,x:draw,team2}}=game;
// console.log(team1,draw,team2);

//6.
// const printGoals=function(...players){
//   console.log(` ${players.length} Goals are scored`);
// };
// printGoals('Puneet','Raghav');
// printGoals(...game.scored);

//7
// const{odds:{team1,x:draw,team2}}=game;
// team1<team2&&console.log('Team 1 more likely to win');
// team1>team2&&console.log('Team 2 more likely to win');
*/



/*
//...........Looping of array............

const arr=['Burki',  'Schulz',  'Hummels',  'Akanji',  'Hakimi',  'Weigl', 'Witsel',  'Hazard',  'Brandt',  'Sancho',  'Gotze']
for(const item of arr.entries()){
  console.log(`${item[0]+1}:- ${item[1]}`);
}
for(const [index,item] of arr.entries()){
  console.log(`${index+1}:- ${item}`);
}
*/


/*
//.........Looping of Objects...........

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  ['Neuer','Pavard','Martinez','Alaba','Davies','Kimmich','Goretzka','Coman','Muller','Gnarby','Lewandowski'],
  ['Burki','Schulz','Hummels','Akanji','Hakimi','Weigl','Witsel','Hazard','Brandt','Sancho','Gotze']
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
};

/////Accessing all Keys of any Object///// 
// const keyArr=Object.keys(game);
// const keyArr=Object.keys(game.odds);

/////Accessing all values of any Object/////
// const valArr= Object.values(game);

/////Accessing all keys and values of any Object/////
// const properties= Object.entries(game);
// for(const [key,value] of properties)
// console.log(`This is Key ${key} and this is Value ==>>${value}`);
*/


/*
................Coding Challenge #2................

Let's continue with our football betting app! Keep using the 'game' variable from 
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  ['Neuer','Pavard','Martinez','Alaba','Davies','Kimmich','Goretzka','Coman','Muller','Gnarby','Lewandowski'],
  ['Burki','Schulz','Hummels','Akanji','Hakimi','Weigl','Witsel','Hazard','Brandt','Sancho','Gotze']
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
};
//1.
// const entry= Object.entries(game);
// const [key,val]= Object.entries(game)[4];
// for(const [goal,player] of val.entries()){
//   console.log(`Goal ${goal+1}: ${player}`);
// }

//2.
// const odd=Object.values(game.odds);
// let avg=0;
// for(const item of odd){
//   avg+=item;
// }
// avg=avg/3;
// console.log(avg);

//3.
// const odd=Object.entries(game.odds);
// for(let [key,value] of odd){

//   const str=key==='x'?'draw':` ${game[key]}`;
//   console.log(` Odd of victory ${str} : ${value}`);
// }
*/


/*
..........Sets............

const playersName= new Set(['Rohit','Kohli','KL Rahul','Kohli','Rahul','Rohit']);
// console.log(...playersName);
// console.log(playersName.size);
// console.log(playersName.has('Rahul'));
playersName.add('Jadeja');
console.log(playersName.add('Rahul'));
console.log(playersName);
playersName.delete('Kohli')
console.log(playersName);

const number=[1,2,4,3,2,3,5,33,2,1,4];
console.log(number.length);
const uniqueNumber=new Set(number);
console.log(uniqueNumber);
for (const num of uniqueNumber) console.log(num);
const newArr=[...uniqueNumber];
console.log(newArr);
*/




/*
............Maps................

///////Declaration of Maps and adding Values to it////////
const restaurant= new Map();
restaurant.set('name','Awasthi\'s Hotel');
restaurant.set(1,'Sweets');
restaurant.set(2,' BreakFast').set(3,'lunch');
restaurant.set(NaN,[1,2,34,1,3]);
restaurant.set(true,'Yes it is available').set(false,'Sorry We don\'t have this item');

/////Some Useful Properties/////////
console.log(restaurant);
console.log(restaurant.keys());
console.log(restaurant.values());
const name=restaurant.get('name');
console.log(name);
console.log(restaurant.get(1));
console.log(restaurant.size);
console.log(restaurant.has());
console.log(restaurant.delete(true));
console.log(restaurant.get(NaN));
console.log(restaurant)

///////Initialization of Maps at declaration time//////////
const quiz=new Map([
  ['question','Which is best computer language in world?'],
  [1,'C'],
  [2,'C++'],
  [3,'Java'],
  [4,'JavaScript'],
  ['answer',4],
  [true,'Your answer is Correct'],
  [false,'Wrong answer'],
  // [6,'Puneet'],
  // [6,'Prashant']
]);
console.log(quiz)
console.log(quiz.get('question'));
console.log(quiz.get(1));
console.log(quiz.get(2));
console.log(quiz.get(3));
console.log(quiz.get(4));
const answer=Number(prompt('Choose correct option'));
console.log(quiz.get(answer===quiz.get('answer')))

/////Conversion of Objects in Maps/////
const newMap= new Map(Object.entries());

/////Conversion of Maps in to arrays/////
const arr=[...newMap];
*/


/*
............Coding Challenge #3....................

Let's continue with our football betting app! This time, we have a map called 
'gameEvents' (see below) with a log of the events that happened during the 
game. The values are the events themselves, and the keys are the minutes in which 
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no 
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);
////1.
const events=[...new Set(gameEvents.values())];
console.log(events);

////2.
// gameEvents.delete(64);
// console.log(gameEvents);

////4.
// for(const [key,value] of gameEvents){
//   if(key<=45)
//   console.log(`[FIRST HALF] ${key}: ${value}`);
//   else
//   console.log(`[SECOND HALF] ${key}: ${value}`);
// }

*/


/*
//............Strings.................

// let airline='TAP Air INDIA';
// const plane='AI34';

// console.log(airline[5]);
// console.log(airline.indexOf('A'));
// console.log(airline.lastIndexOf('A'));
//...Slicing of strings........
// console.log(airline.slice(1));
// console.log(airline.slice(airline.length-2));
// console.log(airline.slice(1,8));
// console.log(airline.slice(0,-1));

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
// const airline1='  Tap Air \n   India  \n';
// console.log(airline1.trim());

//...Replacing words of strings....
// airline+=' AIR India'
// console.log(airline);
// console.log(airline.replace('A','S'));
// console.log(airline.replace(/A/g,'S'));
// console.log(airline.replace('Air','SIR'));
// console.log(airline.replace(/A/g,'S'));


// ........Coding Challenge #4...........
// Write a program that receives a list of variable names written in underscore_case 
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to 
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable 
//  calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase     ✅
// firstName          ✅✅
// someVariable       ✅✅✅
// calculateAge       ✅✅✅✅
// delayedDeparture   ✅✅✅✅✅


const textarea=['underscore_case','first_name','Some_Variable','calculate_AGE','delayed_departure']
const camelCaseConvertor=function(item){
  const word=item.toLowerCase();
  return(word.replace('_'+word[word.indexOf('_')+1] ,word[word.indexOf('_')+1].toUpperCase()))
}
let i=1;
for(const word of textarea){
  let newWord=camelCaseConvertor(word);
  newWord=newWord.padEnd(20,' ');
  console.log(newWord+ '#'.repeat(i));
  i++;
}
*/
