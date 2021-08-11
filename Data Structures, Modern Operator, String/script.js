'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  deliveryLocation: ['Via Angelo Tavanti 23', 'Firenze', 'Italy'],
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  /*
  //openDelivery: function(obj){
  //   console.log(obj);
  // } these both are same
  openDelivery: function(a,c,b){
    console.log(a,b,c);
  }
  */

  // spreadOperator: function(a=0,b=0,c=0,d=0,e=45){
  //   console.log(a,b,c,d,e);
  // }
};

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