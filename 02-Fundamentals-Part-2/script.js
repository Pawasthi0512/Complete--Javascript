
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