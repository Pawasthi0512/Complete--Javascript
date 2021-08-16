'use strict';

//.....calling function by value and setting default value.....
// const plane1='AIR234';

// const checker=function(plane1,passenger=1,totalPrice=200*passenger){
//     console.log(plane1);
//     console.log(passenger);
//     console.log(totalPrice);
// }
// checker('Puneet');
// checker('Puneet',3,3*300);
// checker('Puneet',3);
// checker('Puneet',undefined,300);//skipping the arguments


// const plane1='AIR345';
// let plane2='AIR543';
// const passenger={
//     name:'Puneet Awasthi',
//     passport: 327557092847
// };
// const checkIn=function(planeNum1,planeNum2,passengerDetails){
//     planeNum1='AIR647';
//     planeNum2='AIR647';
//     passengerDetails.name='Mr.'+passengerDetails.name;
//     console.log(planeNum1);
//     console.log(planeNum2);
//     console.log(passengerDetails);
// }
// checkIn(plane1,plane2,passenger);
// console.log(plane1);
// console.log(plane2);
// console.log(passenger);


//......Passing functions as arguments.....
// const normalizator=function(str){
//     str=str.toLowerCase();
//     return(str.replace(str[0],str[0].toUpperCase()));
// }
// const upperCaseConvertor=function(str){
//     return(str.toUpperCase());
// }
// const manipulator=function(str,fun){
//     console.log(`${str} and converted in ${fun(str)}`)
// }
// manipulator('punEEt',normalizator);
// manipulator('punEEt',upperCaseConvertor);


//......Returning function by a function...
// const greet = function(greeting){
//     return(function(name){
//         console.log(`${greeting} ${name}`);
//     });
// }
// greet('Good Morning')('Puneet');

// const greet = (greeting)=>{
//     return((name)=>{
//         console.log(`${greeting} ${name}`);
//     });
// }
// greet('Good Morning')('Puneet');
// //Arrow function implimentation
// const  greetArrow=greeting=>name=> console.log(`${greeting} ${name}`);
// greetArrow('Good Evening')('Puneet');
