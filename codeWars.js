//1 Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

function sumTwoSmallestNumbers(numbers) {  
    //find the two lowest numbers
      // add them together 
      //return answer
      
       
    
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
         
        











