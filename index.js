import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
import alphabet from "./sortingOptions/alphabetically.js";
import byNumberFromSmallerToBigger from "./sortingOptions/byNumberFromSmallerToBigger.js";
import byNumberFromBiggerToSmaller from "./sortingOptions/byNumberFromBiggerToSmaller.js";
import numberOfLetter from "./sortingOptions/inAscendingOrder.js";
import uniqueWords from "./sortingOptions/uniqueWords.js";
import uniqueWordsAndNumbers from "./sortingOptions/uniqueWordsAndNumbers.js";

const rl = readline.createInterface({input, output});

const arrayOfStringsAndNumbers = [];

const words = await rl.question('Enter your words or numbers.');

const arrayOfStrings = words.split(' ');

arrayOfStrings.map(element => {
    if (Number(element)) {
        arrayOfStringsAndNumbers.push(Number(element))
    } else {
        arrayOfStringsAndNumbers.push(element)
    }
});

console.log('a. sortingOptions words alphabetically');
console.log('b. Show numbers from lesser to greater');
console.log('c. Show numbers from bigger to smaller');
console.log('d. Display words in ascending order by number of letters in the word');
console.log('e. Show only unique words');
console.log('f. Display only unique values from the set of words and numbers entered by the user');
console.log('To exit the program, you need to enter "exit"');


let optionOfSort = await rl.question('How to sort?');

while (optionOfSort !== 'exit'){
    switch (optionOfSort) {
        case 'a':
            alphabet(arrayOfStringsAndNumbers);
            break;
        case 'b':
            byNumberFromSmallerToBigger(arrayOfStringsAndNumbers);
            break;
        case 'c':
            byNumberFromBiggerToSmaller(arrayOfStringsAndNumbers);
            break;
        case 'd':
            numberOfLetter(arrayOfStringsAndNumbers);
            break;
        case 'e':
            uniqueWords(arrayOfStringsAndNumbers);
            break;
        case 'f':
            uniqueWordsAndNumbers(arrayOfStringsAndNumbers);
            break;
        case 'exit':
            rl.close();
            break;
    }
    optionOfSort = await rl.question('How to sort?');
}
rl.close();
rl.close();
rl.close();
rl.close();





