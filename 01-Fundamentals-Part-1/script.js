// let js='puneet';
// // if(js==='puneet') alert('Puneet is a developer');
// console.log(12+13+11-7);

/*
//////////Coding challange 1/////////////////////

Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76

const markMass= 78;
const johnMass= 92;
const markHeight= 1.69;
const johnHeight= 1.95;
const markMass= 95;
const johnMass= 85;
const markHeight= 1.88;
const johnHeight= 1.76;
const markBmi= markMass/(markHeight**2);
const johnBmi= johnMass/(johnHeight**2);
console.log(markBmi);
console.log(johnBmi);
let markHeigherBmi;
markHeigherBmi=markBmi>johnBmi;
console.log(markHeigherBmi);
*/

// STRING AND TEMPLATE LITRALS//////////////
/*const firstName='Puneet';
const lastName= 'Awasthi';
const birthYear = 2000;
const job = 'Software Developer';
const year=2021;8/

//Using string concatination property/////

/*const intro= "I'm "+ firstName +" "+ lastName +" is a "+ job +',\n\ and ' +(year-birthYear)+ "year old";
console.log(intro);*/

// Using Template Litrals property///////
/*In Template litrals we don't have to use special corrector for space and forceline break, it will show on console as we write.

const intro1=`I'm ${firstName} ${lastName} is a ${job},
and ${year-birthYear} old`;
console.log(intro1); 
*/



/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 


const markMass= 78;
const johnMass= 92;
const markHeight= 1.69;
const johnHeight= 1.95;
// const markMass= 95;
// const johnMass= 85;
// const markHeight= 1.88;
// const johnHeight= 1.76;
const markBmi= markMass/(markHeight**2);
const johnBmi= johnMass/(johnHeight**2);
if(markBmi>=johnBmi){
    console.log(`Mark's BMI is heigher than Jons's BMI`);
}
else{
    console.log(`John's BMI is heigher than Mark's BMI`);
}
if(markBmi>=johnBmi){
    console.log(`Mark's BMI (${markBmi}) is heigher than Jons's BMI (${johnBmi})`);
}
else{
    console.log(`John's BMI (${johnBmi}) is heigher than Mark's BMI (${markBmi})`);
}
*/

/*
///////////Coding Challenge #3////////////

There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const scoreDolphins1=96;
const scoreDolphins2=108;
const scoreDolphins3=89;
const scoreKoalas1=88;
const scoreKoalas2=91;
const scoreKoalas3=110;
const avgScoreDolphins= (scoreDolphins1+scoreDolphins2+scoreDolphins3)/3;
const avgScoreKoalas= (scoreKoalas1+scoreKoalas2+scoreKoalas3)/3;

/////////Task 1//////////
console.log(avgScoreDolphins);
console.log(avgScoreKoalas);
//////////Task2///////////
if(avgScoreDolphins> avgScoreKoalas){
    console.log("Dolphins wins the match");
}
else if(avgScoreDolphins <avgScoreKoalas){
    console.log("Koalas wins the match");
}
else{
    console.log("Match has been drawn");
}
*/
/*
/////////////Task3//////////////
const scoreDolphins1=97;
const scoreDolphins2=112;
const scoreDolphins3=101;
const scoreKoalas1=109;
const scoreKoalas2=95;
const scoreKoalas3=123;
const avgScoreDolphins= (scoreDolphins1+scoreDolphins2+scoreDolphins3)/3;
const avgScoreKoalas= (scoreKoalas1+scoreKoalas2+scoreKoalas3)/3;
if(avgScoreDolphins> avgScoreKoalas && avgScoreDolphins>=100){
    console.log("Dolphins wins the match");
}
else if(avgScoreDolphins <avgScoreKoalas && avgScoreKoalas>=100){
    console.log("Koalas wins the match");
}
else{
    console.log("Match has been drawn");
}
*/
/*
/////////Task4//////////////
const scoreDolphins1=97;
const scoreDolphins2=112;
const scoreDolphins3=101;
const scoreKoalas1=109;
const scoreKoalas2=95;
const scoreKoalas3=106;
const avgScoreDolphins= (scoreDolphins1+scoreDolphins2+scoreDolphins3)/3;
const avgScoreKoalas= (scoreKoalas1+scoreKoalas2+scoreKoalas3)/3;
if(avgScoreDolphins> avgScoreKoalas && avgScoreDolphins>=100){
    console.log("Dolphins wins the match");
}
else if(avgScoreDolphins <avgScoreKoalas && avgScoreKoalas>=100){
    console.log("Koalas wins the match");
}
else if(avgScoreDolphins ===avgScoreKoalas &&avgScoreKoalas>=100){
    console.log("Match has been drawn");
}
else{
    console.log("No team has won the Trophy");
}
*/
/*
///////////////////////////Coding Challenge #4///////////////////////////
Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 

////////Test Case 1///////////
const billValue=275;
const tip= (billValue>50)&&(billValue<300)? (billValue*15)/100: (billValue*20)/100;
console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue+tip}`);
////////Test Case 2///////////
const billValue=40;
const tip= (billValue>50)&&(billValue<300)? (billValue*15)/100: (billValue*20)/100;
console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue+tip}`);
////////Test Case 3///////////
const billValue=340;
const tip= (billValue>50)&&(billValue<300)? (billValue*15)/100: (billValue*20)/100;
console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue+tip}`);
*/