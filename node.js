
 console.log('hello world');

 function sortDrinkByPrice(drinks) {
    return drinks.sort((a,b)=> a.price-b.price)
  }
  
  // console.log(sortDrinkByPrice([{name: "lime", price: 50}, {name: "lemonade", price: 10}]));

  function isFirstSuperior(arr1, arr2) {
    for(i=0;i<arr1.length;i++){
      if(arr1[i]> arr2[i]){
        return true
      }
    }
    return false
  }
  
  // console.log(isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]));

  function addUp(num) {
    var count=0;
    var addition=0
   for(i=0;i<num;i++){
     count++
     addition=addition+ count
   }
  
    return addition
  }
  
  console.log(addUp(4))

  // console.log(addUp(4))

// function addition(a,b){
//   return a+b
// }

// console.log(addition(-3, -2))

function minMax(arr) {
    var min= arr[0];
    var max= arr[0];
  
    for(var i =0;i<arr.length;i++){
      if(arr[i]<min){
        min = arr[i]
      }
      if(arr[i]> max){
        max= arr[i]
      }
    }
    return [min,max]
  
  }
  
  console.log(minMax([1, 2, 3, 4, 5]))
    // ➞ [1, 5]
  
  minMax([2334454, 5]) 
    // ➞ [5, 2334454]
  
  minMax([1])
    // ➞ [1, 1]

    function detectWord(str) {
        var words='';
         for(let i =0;i<str.length;i++){
            if(str[i]===str[i].toLowerCase()){
              words+= str[i]
            }
         }
         return words
       }
       
       console.log(detectWord("UcUNFYGaFYFYGtNUH"))
         // ➞ "cat"

         function charCount(myChar, str) {
            let letter=0
            for(let i =0;i < str.length;i++){
              if(str[i]===myChar){
                letter++
              }
            }
            return letter
          }
          
          console.log( charCount("b", "big fat bubble"))
        //   4

        function numberSplit(n) {
            let firstNum = Math.round(n/2);
             let secondNum= n- firstNum;
             return [secondNum, firstNum]
           }
           
           console.log(numberSplit(4))
             // ➞ [2, 2]
           
           console.log(numberSplit(11)) 
             // ➞ [5, 6]

             function numberSplit(n) {
                let firstNum = Math.round(n/2);
                 let secondNum= n- firstNum;
                 return [secondNum, firstNum]
               }
               
               // console.log(numberSplit(4))
               //   // ➞ [2, 2]
               
               // console.log(numberSplit(11)) 
               //   // ➞ [5, 6]
               
               function filterArray(arr) {
                // return arr.filter((num)=>Number.isInteger(num))
                 let num =[];
                 for(let i =0;i<=arr.length;i++){
                   if(Number.isInteger(arr[i])){
                     num.push(arr[i])
                   }
                 }
                 return num
               }
               
               console.log(filterArray([1, 2, "aasf", "1", "123", 123]))
                           // ➞ [1, 2]
               
               filterArray([1, "a", "b", 0, 15]) 
                 // ➞ [1, 0, 15]


                 function countVowels(str) {
                    const vowels=['a','e','i','o','u']
                     let arr= str.split('');
                    let count =0;
                    for(i=0;i<=arr.length;i++){
                      if(vowels.includes(arr[i])){
                        count++
                      }
                    }
                    return count
                    
                  }
                  
                  console.log(countVowels("Celebration"))
                    // ➞ 5

                    function sortByLength(arr) {
                        for(let i =0;i<arr.length;i++){
                          for( let j=0;j<arr.length-i -1;j++){
                            var temp= arr[j]
                            if(arr[j].length> arr[j+1].length){
                              arr[j]=arr[j+1];
                              console.log(arr[j+1])
                              arr[j+1]= temp
                            }
                          }
                        }
                         return arr
                          }
                       
                       console.log(sortByLength(["Google", "Apple", "Microsoft"]))
                       // ➞ ["Apple", "Google", "Microsoft"]


                       function getAbsSum(arr) {
                        let addition=0
                       for(let i =0;i< arr.length;i++){
                         if(arr[i]<0){
                          addition += -arr[i]
                         }else{
                           addition+= arr[i]
                         }
                       }
                      return addition
                    }
                    
                    console.log(getAbsSum([2, -1, 4, 8, 10]))
                      // ➞ 25

                      function sortNumsAscending(arr) {
                        let n = arr.length;
                        for(let i =0;i<n-1;i++){
                          for(let j =0;j<n-i-1;j++){
                            if(arr[j]>arr[j+1]){
                              let temp =arr[j];
                              arr[j]= arr[j+1];
                              arr[j+1]= temp
                            }
                            
                          }
                        }
                        return arr
                      }
                      
                      console.log(sortNumsAscending([1, 2, 10, 50, 5]))
                        // ➞ [1, 2, 5, 10, 50]

                        // I just did bubble sort


                        function bomb(str) {
                            // return (str.toLowerCase()).includes('bomb')?'Duck!!!': 'There is no bomb, relax.'
                            let find= str.split(' ')
                            for(let i=0;i<find.length;i++){
                              if(find[i].includes('bomb')){
                                return "Duck!!!"
                              }else{
                                return "There is no bomb"
                              }
                            }
                            
                          }
                          
                          console.log(bomb("There is a bomb."))
                            // ➞ "Duck!!!"

                            function removeVowels(str) {
                                let vowels=['a','e','i','o','u'];
                                let result='';
                              
                                for(let i =0;i<str.length;i++){
                                  let currentChar = str[i].toLowerCase();
                              
                                  if(!vowels.includes(currentChar)){
                                    result+=str[i]
                                  }
                                }
                                return result
                              }
                              
                              console.log(removeVowels("I have never seen a thin person drinking Diet Coke."))
                              // ➞ " hv nvr sn  thn prsn drnkng Dt Ck."

                              function fibonacci(n){
                                const fib=[0,1];
                                for(let i =2;i<n;i++){
                                  fib[i]=fib[i-1]+ fib[i-2];
                                }
                                return fib
                              }
                              
                              console.log(fibonacci(3)) 
                              // [0,1,1]
                            //   learning fibonacci sequence 

                            // console.log(fibonacci(3)) 

function firstVowel(str) {

    let vowels =['a','e','i','o','u'];
  
    for(let i =0;i<str.length;i++){
      for( let j =0;j<vowels.length;j++){
        if(str[i].toLowerCase()===vowels[j]){
          return i
        }
      }
    }
    return -1
  }
  
  // console.log(firstVowel("strIng")) 
    // ➞ 0
  
  function findLargestNums(arr) {
     let largeNumber=[]
    for(let i =0;i<arr.length;i++){
       largeNumber.push(Math.max(...arr[i]))
    }
    return largeNumber
  }
  
  console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])) 
    // ➞ [7, 90, 2]

    // Factorial of a Number

function factorial(f){
    let number =1;
    for(let i=2;i<= f;i++){
      number =  i* number
      // console.log(i*number)
      // console.log("this is i",i)
      // console.log("this is number",number)
  
  
    }
    return number
  }
  
  console.log(factorial(0))
  console.log(factorial(1))
  console.log(factorial(5))

  function getDays(date1, date2) {
    const millisec= 1000* 60 *60 *24;
    const diffInMilli= date2-date1;
    return Math.floor(diffInMilli/millisec)
  }
  
  console.log(getDays(
    new Date("June 14, 2019"),
    new Date("June 20, 2019")
  )) 
    // ➞ 6