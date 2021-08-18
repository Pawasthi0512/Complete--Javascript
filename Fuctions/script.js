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


/*
// ............Coding Challenge #1...........
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an 
array with the number of replies for each option. This data is stored in the starter 
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The 
method does 2 things:
1.1. Display a prompt window for the user to input the number of the 
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For 
example, if the option is 3, increase the value at position 3 of the array by 
1. Make sure to check if the input is a number and if the number makes 
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The 
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using 
console.log(). This should be the default option. If type is 'string', display a 
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test 
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll 
object! So what should the this keyword look like in this situation?
The Complete JavaScript Course 21
Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section 


const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
//1.
    registerNewAnswer(){
        const vote=Number( prompt(`${this.question}\n ${this.options.join('\n')}
(Write your option)`))
        //short circuiting
        vote>=0 &&vote<4 && this.answers[vote]++;
        //4.
        this.displayResults();
        //
},
//

//3.
    displayResults(result='array'){
        // const result=prompt(`To see the results Enter 'string'`);
        if( result=== 'string'){
            console.log(`Poll results are l${this.answers.join(" ")}`);
        }
        else{
            console.log(this.answers);
        }
    },
    // displayResults(temp=this.answers){
    //     const result=prompt(`To see the results Enter 'string'`);
    //     if( result=== 'string'){
    //         console.log(`Poll results are l${temp.join(" ")}`);
    //     }
    //     else{
    //         console.log(temp);
    //     }
    // },
//

}

// poll.registerNewAnswer()
//2.
document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll))
//

//4.
const arr1=[3,2,1];;
const arr2=[2,3,5,6,4,3,7,2];
poll.displayResults.call({answers:arr1})
poll.displayResults.call({answers:arr2},'string')
// poll.displayResults(arr1);
// poll.displayResults(arr2);
*/

/*
//.............Coding Challenge #2...............
This is more of a thinking challenge than a coding challenge �
Your tasks:
1. Take the IIFE below and at the end of the function, attach an event listener that 
changes the color of the selected h1 element ('header') to blue, each time 
the body element is clicked. Do not select the h1 element again!
2. And now explain to yourself (or someone around you) why this worked! Take all 
the time you need. Think about when exactly the callback function is executed, 
and what that means for the variables involved in this example.


(function () {
 const header = document.querySelector('h1');
 header.style.color = 'red';
 })();
*/