
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