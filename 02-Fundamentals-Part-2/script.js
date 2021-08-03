
/*
//////FUNCTIONS/////////
////Function declaration/////
const age3=calcAge1(2020);
// const age4=calcAge2(2020); We can't invoke function expression before function expression defining.
console.log(age3);
function calcAge1(birthyear){
    return(2038-birthyear);
}
const age1=calcAge1(2021);
console.log(age1);
console.log(calcAge1(2021));
//// Function Expression/////
const calcAge2=function(birthyear){
    return 2038-birthyear;
}
const age2=calcAge2(2022);
console.log(age2);
console.log(calcAge2(2022));
*/

/*
/////////ARROW FUNTIONS//////// 
// This is very usefull for online complex calculation
const age1=birthyear=>2037-birthyear;
console.log(age1(2021));
const age2=(birthyear,currentyear,x)=>(currentyear-birthyear)*x;
console.log(age2(2019,2037,3));
*/


/*
///////////Coding Challenge #1//////////
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so 
one average score per team).
A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 2

/////////Test Case 1//////////
const scoreDolphins1=44;
const scoreDolphins2=23;
const scoreDolphins3=71;
const scoreKaolas1= 65;
const scoreKaolas2= 54;
const scoreKaolas3= 49;
const calcAverage=(score1,score2,score3)=> (score1+ score2+score3)/3;
const avgDolphins=calcAverage(scoreDolphins1,scoreDolphins2,scoreDolphins3);
const avgKoalas= calcAverage(scoreKaolas1,scoreKaolas2,scoreKaolas3);
console.log(avgDolphins);
console.log(avgKoalas);
function checkWinner(avgD,avgK){
    if(avgD>=2*avgK){
        console.log(`Dolphins win(${avgD} vs ${avgK})`);
        return;
    }
    if(avgK>=2*avgD){
        console.log(`Kaolas win(${avgK} vs ${avgD})`);
        return;
    }
}
checkWinner(avgDolphins,avgKoalas);

////////Test Case 2///////////

const scoreDolphins1=85;
const scoreDolphins2=54;
const scoreDolphins3=41;
const scoreKaolas1= 23;
const scoreKaolas2= 34;
const scoreKaolas3= 27;
const calcAverage=(score1,score2,score3)=> (score1+ score2+score3)/3;
const avgDolphins=calcAverage(scoreDolphins1,scoreDolphins2,scoreDolphins3);
const avgKoalas= calcAverage(scoreKaolas1,scoreKaolas2,scoreKaolas3);
console.log(avgDolphins);
console.log(avgKoalas);
function checkWinner(avgD,avgK){
    if(avgD>=2*avgK){
        console.log(`Dolphins win(${avgD} vs ${avgK})`);
        return;
    }
    if(avgK>=2*avgD){
        console.log(`Kaolas win(${avgK} vs ${avgD})`);
        return;
    }
}
checkWinner(avgDolphins,avgKoalas);
*/




/*
/////OBJECTS IN JAVASCRIPT///////
const jonas={
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037-1991,
    job: 'teacher',
    friends:['Michael','Elsha','Farahn']
};
console.log(jonas.firstName);
console.log(jonas['lastName']);
console.log(jonas.friends.length);
console.log(jonas.friends[1]);

jonas.fatherName='Schmedtmann';
jonas.friends.push('Tom');
console.log(jonas)

const inIntrested = prompt ('What you want to know about Jonas: firstName, lastName, fatherName, job, friends, age ');
if(jonas[inIntrested]){
    console.log(jonas[inIntrested]);
}
else{
    console.log('You choose wrong option. Please select from these somefirstName, lastName, fatherName, job, friends, age ')
}
*/

/*
const jonas={
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthyear:1991,
    job: 'teacher',
    friends:['Michael','Elsha','Farahn'],
    hasDriverLicense:true,

    // calcAge: function(birthyear){
    //     return 2037-birthyear;
    // }
    calcAge: function(){
        this.age= 2037-this.birthyear;
        return this.age;
    },
    ///Challenge//////
    addSummary:function(){
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense?'a':'no'} driverLicense.`
    }
};

console.log(jonas.calcAge());
console.log(jonas.age) // if calcAge function is called then we can access
//jonas.age otherwise it will show undefined.
console.log(jonas.addSummary());
console.log(jonas['addSummary']());//Calling of a function using brackets.
*/



/*
///////////Coding Challenge #2//////////////
Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data 
below
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can 
actually be the returned value of a function! So you can just call a function as array 
values (so don't store the tip values in separate variables first, but right in the new
*/
/*
///Task1/////
const billValue=100;
const calcTip= function(billValue){
    return ( billValue>50 &&billValue<300? billValue*0.15: billValue*0.2);
}
console.log(calcTip(billValue));
const calcTip= function(billValue){
    return ( billValue>50 &&billValue<300? billValue*0.15: billValue*0.2);
}
////Task2/////
const bills=[125,555,44];
console.log(bills);
////Task3////
const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
console.log(tips);
////Task4////
const total= [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
console.log(total);
*/


/*
/////////////Coding Challenge #3/////////////
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall.
GOOD LUCK 

const mark={
    fullName:'Mark Miller',
    mass:78,
    height:1.69,
    calcBMI: function(){
        this.BMI=this.mass/(this.height**2);
        return this.BMI;
    }
};
const john={
    fullName:'John Smith',
    mass:92,
    height:1.95,
    calcBMI: function(){
        this.BMI=this.mass/(this.height**2);
        return this.BMI;
    }
};
// console.log(mark.BMI);
// console.log(john.BMI);
console.log(`${mark.calcBMI()>=john.calcBMI()? 'Mark':'John'}'s BMI (${mark.BMI>=john.BMI? mark.BMI:John.BMI}) is higher than ${mark.BMI<john.BMI? 'Mark':'John'}'s (${mark.BMI<john.BMI? mark.BMI:john.BMI})!`);
console.log(mark.BMI);
console.log(john.BMI);
*/



/*
///////////Coding Challenge #4////////////////
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the 
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
an argument. This function calculates the average of all numbers in the given 
array. This is a difficult challenge (we haven't done this before)! Here is how to 
solve it:
4.1. First, you will need to add up all values in the array. To do the addition, 
start by creating a variable 'sum' that starts at 0. Then loop over the 
array using a for loop. In each iteration, add the current value to the 
'sum' variable. This way, by the end of the loop, you have all values 
added together
4.2. To calculate the average, divide the sum you calculated before by the 
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array.


const bills=[22,295,176,440,37,105,10,1100,86,52];
const calcTip= function(billValue){
    return ( billValue>50 &&billValue<300? billValue*0.15: billValue*0.2);
}
let tips= [];
let total= [];
for(let i=0;i<10;i++){
    tips[i]=calcTip(bills[i]);
    total[i]=tips[i]+bills[i];
}
console.log(bills);
console.log(tips);
console.log(total);
*/
