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
