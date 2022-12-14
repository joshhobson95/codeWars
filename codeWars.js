

//! 12/12/22

//1 Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
function sumTwoSmallestNumbers(numbers) {      
let smallest = numbers.sort((a, b) => a - b);  
let answer = smallest[0] + smallest[1]   
console.log(answer)
return answer
}
      


    //2 The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
    // To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
    // Input
    // Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
    // Output
    // Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

function openOrSenior(data){
return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');                         
}

    //3 Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

function removeSmallest(numbers) {
numbers = numbers.slice(0);
const min = Math.min(...numbers);
numbers.splice(numbers.indexOf(min), 1);
return numbers;
}

    //? almost works but removes multiple small numbers..
    // function removeSmallest(numbers) {
    //     let smallest = (Math.min(...numbers))
    //     let copy = [...numbers]        
    //      let filtered = copy.filter(e => e !== smallest)    
    //      return filtered   
    //    }

//4 You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

function likes(names){

  if(names.length === 0) {
    return ("no one likes this")
  } else if (names.length ===1) {
    return (names[0] + ' likes this')
  } else if (names.length ===2){
    return (names[0] + " and " + names[1] + " like this")
  } else if (names.length ===3) {
    return (names[0]+ ", " + names[1] + " and " + names[2] + " like this") 
  } else if (names.length >= 4) {
    return (names[0]+ ", " + names[1] + ` and ${names.length - 2} others like this`)
  }
    
  }

//^ 12/15/22

//1
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  let digits = n.toString().split("")
  let realDigits = digits.map(Number)
  let answer = realDigits.reverse()
  return answer 
  }


//2
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

function friend(friends){
  return friends.filter(e => e.length === 4);
}


//3
// You need to write regex that will validate a password to make sure it meets the following criteria:
//     At least six characters long
//     contains a lowercase letter
//     contains an uppercase letter
//     contains a digit
//     only contains alphanumeric characters (note that '_' is not alphanumeric)

const REGEXP = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/;


//& 12/16/22

//1
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21]. 

function deleteNth(arr, n) {
  let totals = {};
return arr.filter(o => (totals[o] = ++totals[o] || 0) < n);   
return totals
 }
  
//2
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
  const string = num.toString();
  if (string.length === 1) {
  return 0;
  }
    const nextNum = string.split('').reduce((a, b) => a * b, 1);
    return 1 + persistence(nextNum);
  }
  

  
//& 1/1/2023

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  let bmData = weight / height ** 2
  if (bmData <= 18.5) {
    return "Underweight"
  }
   else if (bmData <= 25.0) {
     return "Normal"
   }
   else if (bmData <= 30.0) {
     return "Overweight"
   }
   else if (bmData > 30){
     return "Obese"
   }
 }

 function moveZeros(arr) {
 

  // Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

  //first trying filter
  //filter out zeros
  //count array length vs filtered length
  //add that many zeroes to the end


const filtered = arr.filter(entry => entry !== 0)
const numOfZeroes = arr.length - filtered.length

for ( let i =0; i < numOfZeroes; i++){
  filtered.push(0) 
}
return filtered
}

//& 1/5/23

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
  let words = str.split(" ");
  let newArr = []
  
  newStr = "";
  
  for (let i = 0; i < words.length; i++){
      newStr = words[i].slice(1) + words[i].charAt(0) + "ay"; 
      newArr.push(newStr);
    } return newArr.join(" ")
}

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

//     It must start with a hashtag (#).
//     All words must have their first letter capitalized.
//     If the final result is longer than 140 chars it must return false.
//     If the input or the result is an empty string it must return false.


function generateHashtag (str) {
  let wordArray = str.split(' ').filter(char => char !== "");
  let result = "#";
  
  if (wordArray.length === 0) {
    return false;
  };
  
  result = result + wordArray.map(word => {
    let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    return capitalizedWord;
  }).join('');
  if(result.length > 140) {
    return false;
  } else{
    return result;
  };
  
};


//& 1/6/2023
// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

function scramble(str1, str2) {
  var l = str2.length;
  for (var i = 0; i < l; i++) {
    if (str1.indexOf(str2[i]) > -1) {
      str1 = str1.replace(str2[i], '');
    } else {
      return false;
    }
  }
  return true;
}

//&  1/10/2023

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.


function sortArray(array) {

  const odds = array.filter(x => x%2).sort((a, b) => a - b);
  return array.map(x => x%2 ? odds.shift() : x);


console.log(sortOddsOnly(array));


}