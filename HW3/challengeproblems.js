/* 1. Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output: 34223 */


function reverseArray (number){
    let toString = number.toString();
    let temp = ""

    for(let i = toString.length - 1 , j = 0 ; i >= 0 ; i--){
        temp = temp + toString[i];
        
    }
    return parseInt(temp);
}


console.log(reverseArray(123456789));

/*2.Write a JavaScript function that checks whether a passed string is palindrome or not? 
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
madam or nurses run. */


function palindromeChecker(string){
    let tempArray = [...string];

    while(tempArray.length >=1){
        
        if(tempArray[0] !== tempArray[tempArray.length-1]){
            return false;
        }
        tempArray = tempArray.slice(1,-1);
    }


    return true;


    
}


console.log(palindromeChecker('ADA'));
console.log(palindromeChecker("RACECAR"));
console.log(palindromeChecker("melih"));

//challenge 4

/*Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Example string: 'webmaster' 
Expected Output: 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.*/

function alphabetical(string){

    return string.split('').sort().join('');

}

console.log(alphabetical("caca"));
console.log(alphabetical("papa"));
console.log(alphabetical("melih"));



//5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '

function convertToUppercase(string){

    let str = string.split(" ");
    
    for(let i = 0; i < str.length; i++){
        str[i] = str[i][0].toUpperCase()+ str[i].substring(1);
    }
   return str.join(" ");
    
}


console.log(convertToUppercase("the quick brown fox"));
// Expected Output: 'The Quick Brown Fox '

/*6.Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
Example string: 'Web Development Tutorial' 
Expected Output: 'Development'*/



function longestWord(string){
    let word = string.split(" ");
    let size = 0;

    let array = [' '];

    for(let i = 0; i <word.length;i++){
        if(word[i].length >= size){
            size = word[i].length;
            if(array[array.length-1].length < word[i].length){
                array = [];
                array.push(word[i]);
            }

            else{
                array = [array,word[i]];
            } 
        }
    }
    return [...array];
}

console.log(longestWord('Web Development Tutorial'));


/*7.Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
Example string: 'The quick brown fox' 
Expected Output: 5*/



function countVowels(string){
    
    const count = string.match(/[aeiou]/gi).length;
    return count;
}

console.log(countVowels('The quick brown fox'));

/*
8. Write a JavaScript function that accepts a number as a parameter and check 
the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that 
has no positive divisors other than 1 and itself.*/


function isPrime(num, testNum = num - 1) {
    
    if(num < 2) return false;
    
    if(testNum === 1 || num === 2) return true;
    
    if(num % testNum === 0) return false
    
  
    return isPrime(num, testNum - 1)
  }
  
  console.log(isPrime(1)); //-> false
  console.log(isPrime(2)); //-> true
  console.log(isPrime(3)); //-> true
  console.log(isPrime(4)); //-> false
  console.log(isPrime(5)); // -> true

  //challenge 9

function typeOf(userInput = input){

    return typeof userInput;

}

console.log(typeOf((1===1)));
console.log(typeOf(obj = {1:1}));
console.log(typeOf(x => x*2));
console.log(typeOf("hello word"));


//challenge 10
function identityMatrix(size){

    let row;
    let column;

        for (row=0; row < size; row++)
        {
          for (column=0; column < size; column++)
          {
               if (row === column)
               {
                
                 console.log(' 1 ');
               }
                      
               else 
                {
                 console.log(' 0 ');}
                }
             console.log('----------');
           }
       }


console.log(identityMatrix(4));


/* challenge 11
 Write a JavaScript function which will take an array of numbers stored 
and find the second lowest and second greatest numbers, respectively. 
Sample array: [1,2,3,4,5]
Expected Output: 2,4 */


function findSeconds(number){
   
    number = number.toString();

    let temp = [...number].sort();
    let newArray = temp.slice(1,-1);

    const firstChar = newArray[0];
    const lastChar = newArray[newArray.length-1];

    return `the second to first is: ${firstChar} the second to last is: ${lastChar}`;
    

    

}

console.log(findSeconds(12345));

//13. Write a JavaScript function to compute the factors of a positive integer.

function factors(number)
{
 let factors = [];
 let i;
 
 for (i = 1; i <= Math.floor(Math.sqrt(number)); i++)
  if (number % i === 0)
  {
    factors.push(i);
   if (number / i !== number)
    factors.push(number / i);
  }
 factors.sort(function(x, y)
   {
     return x - y;});  
     return factors;
    }
console.log(factors(15)); 
console.log(factors(16));   
console.log(factors(17));  


/*14. Write a JavaScript function to convert an amount to coins. 
Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
Output: 25, 10, 10, 1*/


function  amountTocoins(amount, coins) {
    var result = [];
    for (let i = 0; i < coins.length; i++) {
      if (amount >= coins[i]) {
        result.push(coins[i]);
        amount = amount - coins[i];
        i = i - 1;
      }
    }
    return result;
  }
  console.log(amountTocoins(52, [25, 10, 5, 2, 1]));


    /*15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
bases. Accept b and n from the user and display the result.*/


  function pow(base, exponent) {
  
    if(exponent === 1)
      return base;
    
    return base * pow(base , exponent -1);
    
  
  }
  

  console.log(pow(2, 4)); 
  console.log(pow(3, 5));


  /*16. Write a JavaScript function to extract unique characters from a string. 
    Example string: "thequickbrownfoxjumpsoverthelazydog"
    Expected Output: "thequickbrownfxjmpsvlazydg"*/

  function findUniqueCharacters(str){
    let temp = "";
    for (let i = 0; i < str.length; i++){
        if (temp.includes(str[i]) === false){
            temp += str[i];
        }
    }
    return temp;
}

console.log(findUniqueCharacters("thequickbrownfoxjumpsoverthelazydog"))

/*17. Write a JavaScript function to get the number of occurrences of 
each letter in specified string.*/

function numberOfOccurences(string) {
    let result = [];
    for (let i = 0; i < string.length; i++) {
        let a = string.charAt(i);
        if (result[a] === undefined) result[a] = 1;
        else result[a] += 1;
    }
    return result;
}

console.log(numberOfOccurences('RACECAR'));


// 19. Write a JavaScript function that returns array elements larger than a number. 

function largerThanANumber(num, array){
    let result = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] > num){
            result.push(array[i])
        }
    }
    return result;
}

console.log(largerThanANumber(5, [1,3,5,6,7,8,9]));


// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample   character   list:
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function generateStringId(length){
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++){
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;

}

console.log(generateStringId(11));

/*21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
// combinations in an array.*/

const subsetOfNums = (nums,sb) => {
    const subsets = [[]];
    for (n of nums) {
      subsets.map((el) => {
        subsets.push([...el, n]);
      });
    }
    return subsets;
  };
  
  console.log(subsetOfNums([1, 2, 3],2)); 


// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
// will count the number of occurrences of the specified letter within the string. 
// Sample arguments: 'microsoft.com', 'o'
// Expected output: 3 


function numberOfOccurences(string, letter) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === letter) count++;
    }
    return count;
}

console.log(numberOfOccurences('microsoft.com', 'o'));


// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments: 'abacddbec' 
// Expected output: 'e' 


function firstNonRepeat(s){

for(let i = 0; i < s.length; i++)
{

if (s.indexOf(s.charAt(i),s.indexOf(s.charAt(i))+1) == -1)
{

   return (s[i]);
    
}
}

}

 
  
    console.log(firstNonRepeat('abalaabalad'))


    // 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple
// sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing
// each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]


function bubbleSort(arr){
    
    for (let i = 0; i < arr.length; i++){
        for (let j = i; j < arr.length; j++){
            if (arr[j] > arr[i]){
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));


// 25.Write a JavaScript function that accept a list of country names as input and returns the
// longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"

function longestNameCountry(arr){
    let temp = "";
    for (let name of arr){
        if (name.length > temp.length){
            temp = name;
        }
    }
    return temp;
}

console.log(longestNameCountry(["Australia", "Germany", "United States of America"]));



// 27. Write a JavaScript function that returns the longest palindrome in a given string.
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest
// symmetric factor problem is the problem of finding a maximum - length contiguous substring of a
// given string that is also a palindrome.For example, the longest palindromic substring of
// "bananas" is "anana".The longest palindromic substring is not guaranteed to be unique; for
// example, in the string "abracadabra", there is no palindromic substring with length greater than
// three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings(that is, all
// substrings that are themselves palindromes and cannot be extended to larger palindromic
// substrings) rather than returning only one substring or returning the maximum length of a
// palindromic substring.


function findLongestPalindrome(sentence) {
    let wordArray = sentence.match(/\b\w+\b/g),
        longestWord = 0,
        word = " ";
  
    for (let i = 0; i < wordArray.length; i++) {
      if (longestWord < wordArray[i].length && isPalindrome(wordArray[i])) {
        longestWord = wordArray[i].length;
        word = wordArray[i]
      }
    }
    
    return word;
  }
  
  function isPalindrome(str) {
    return str.split('').reverse().join('') === str;
  }
  
  console.log(
    findLongestPalindrome('This is a sentence: RACECAR, ADA, melih')
  )



//28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 

function returnFunction(func){
    func();
}

function anotherFunction(){
    console.log("Function?");

}

returnFunction(anotherFunction);

  

//29. Write a JavaScript function to get the function name.

function getFunction(func){
    return func.name;
}

console.log(getFunction(isPalindrome));




