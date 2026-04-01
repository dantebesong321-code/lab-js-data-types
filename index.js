/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";



// Concatenate the string variables into one new string

let tongueTwister;

let firstPhrase = s1.concat(" ", s2," ", s3, " ",s4," ",s5, " ");
let secondPhrase = s3.concat(" ", s2," ", s1, " ",s4);

tongueTwister = firstPhrase += secondPhrase; 


// Print out the concatenated string

console.log(tongueTwister) 


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

let cameLtaiL;

let wordOne = part1.slice(0,3) + part1.toUpperCase().slice(3);
let wordTwo = part2.charAt(0).toUpperCase() + part2.slice(1);


cameLtaiL = wordOne + wordTwo ;


// Print the cameLtaiL-formatted string

console.log(cameLtaiL)



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
 let tip = (84 * 15) / 100;

 tipAmount = tip;

// Print out the tipAmount

console.log(tipAmount)


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)




// Print the generated random number

function RandomNum(num) {
  return Math.floor(Math.random(0 >=10) * num);
}

console.log(RandomNum(10));



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; //true because the are of the same value

const expression2 = a || b; //true because they both are letters

const expression3 = !a && b; //false bacuse 'a' is false

const expression4 = !(a && b); //false  

const expression5 = !a || !b; //true because they both are false

const expression6 = !(a || b); //true because they both are letters

const expression7 = a && a; //true because there are the same letter