

console.log("helo")
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

    function numInStr(arr) {
        var result=[];
        for(let i=0;i<arr.length;i++){
          for( let j=0;j<arr[i].length;j++){
            console.log(arr[i][j])
            var num = parseInt(arr[i][j]);
            if(num){
              result.push(arr[i])
            }
          }
        }
        return result
      }
      
      console.log(numInStr(["1a", "a", "2b", "b"]))
        // ➞ ["1a", "2b"]
        function reverseOdd(str) {
            let words= str.split(' ');
            let results=[];
            for(let i=0;i<words.length;i++){
              let word= words[i];
              if(word.length%2!==0){
                let reversedWord ='';
                for(let j=word.length-1;j>=0;j--){
                  reversedWord+=word[j]
                }
                results.push(reversedWord)
              }else{
                results.push(word)
              }
            }
            return results.join(' ')
          }
          
          // console.log(reverseOdd("Bananas"))
            // ➞ "sananaB"
          
          // console.log(reverseOdd("One two three four"))
            // ➞ "enO owt eerht four"
          
          function num_of_digits(num) {
            let numStr=num.toString()
            let totalNum=0;
            for(let i=0;i<numStr.length;i++){
              console.log(numStr[i])
              if(numStr[i]==='-'){
                continue
              }else{
                totalNum++
              }
            }
            return totalNum
          }
          
          // console.log(num_of_digits(-2147483647))
            // ➞ 

            function calculator(num1, operator, num2) {
                switch (operator) {
                    case '+':
                        return num1 + num2;
                    case '-':
                        return num1 - num2;
                    case '*':
                        return num1 * num2;
                    case '/':
                        if (num2 === 0) return "Can't divide by 0!";
                        return num1 / num2;
                }
                return null;
            }

            function reverseWords(string) {
                let newStr=[];
                let strArr=string.split(' ')
              
                for(let i =strArr.length-1;i>=0;i--){
                  if(strArr[i]!==''){
                    newStr.push(strArr[i])
                  }
                }
                return newStr.join(' ')
              }
              
              console.log(reverseWords(" the sky is blue"))
                // ➞ "blue is sky the"

                function findNemo(sentence) {
                    // return sentence.split(' ').indexOf('Nemo') +1;
                   
                     let sentenceNum= sentence.split(' ')
                     let nemoNumber=[];
                     for(let i =0;i<sentenceNum.length;i++){
                       if(sentenceNum[i]==='Nemo'){
                         return `I found Nemo at ${i+1}`
                       }
                       }
                     return "i can't find neomo"
                     
                   }
                   
                   // console.log(findNemo("I am finding Nemo !"))
                     // ➞ "I found Nemo at 4!"
                   
                   function capToFront(s) {
                     let upper ='';
                     let lower='';
                   
                     for(let c of s){
                       console.log(c)
                       if(c===c.toUpperCase()){
                         upper+=c;
                       }else{
                         lower+=c;
                       }
                     }
                     return upper+lower
                   }
                   
                   console.log(capToFront("shOrtCAKE"))

                   function missingNum(arr) {
  
                    const n =arr.length + 1;
                    let expectedSum =0;
                    let actualSum=0;
                  
                    for(let i =1;i<=n;i++){
                      expectedSum+=i;
                      console.log(expectedSum)
                    }
                  
                    for(let num of arr){
                      actualSum+=num
                      console.log(actualSum)
                  
                    }
                    return expectedSum- actualSum
                  
                  }
                  
                  console.log(missingNum([1,2,3,4,6,7,8,9,10]))
                    // ➞ 5
                    function makeTitle(str) {
                      let arrStr= str.split(' ');
                      let newStr=[]
                   
                      for(const word of arrStr){
                         newStr.push(word.charAt(0).toUpperCase()+word.slice(1))
                      }
                     return newStr.join(' ')
                   }
                   
                   console.log(makeTitle("This is a title")) 
                     // ➞ "This Is A Title"

                     function specialReverse(s, c) {
                      let arrStr= s.split(' ');
                      let newStr=[]
                    
                       for (let i=0;i<arrStr.length;i++){
                         if(arrStr[i].charAt(0)===c){
                           newStr.push(arrStr[i].split('').reverse().join(''))
                         }else{
                           newStr.push(arrStr[i])
                         }
                       }
                      return newStr.join(' ')
                    }
                    
                    console.log(specialReverse("word searches are super fun", "s"))
                    // ➞ "word sehcraes are repus fun"

                    function hackerSpeak(str) {
                      let result ='';
                   
                     for (let i = 0; i < str.length; i++) {
                         switch (str[i]) {
                           case 'a':
                             result += '4';
                             break;
                           case 'e':
                             result += '3';
                             break;
                           case 'i':
                             result += '1';
                             break;
                           case 'o':
                             result += '0';
                             break;
                           case 's':
                             result += '5';
                             break;
                           default:
                             result += str[i];
                         }
                       }
                   
                       return result;
                     }
                   
                   console.log(hackerSpeak("javascript is cool")) 
                     // ➞ "j4v45cr1pt 15 c00l"

                     function sumTwoSmallestNums(arr) {
                      // let positives =arr.filter(num=>num>0);
                      // positives.sort((a,b)=>a-b);
                      // return positives[0]+positives[1]
                    
                      
                      
                    }
                    
                    console.log(sumTwoSmallestNums([2, 9, 6, -1]) )
                      // ➞ 8

                      function factorize(num) {
                        let factors =[];
                        for(let i =1;i<=num;i++){
                          if(num%i===0){
                            factors.push(i)
                          }
                        }
                        return factors
                      }
                      
                      console.log(factorize(12))
                        // ➞ [1, 2, 3, 4, 6, 12]
                    

                        function removeABC(str) {
                          const strArr= str.split('');
                          let newStr=[]
                        
                          for(let i =0;i<strArr.length;i++){
                        
                            switch(strArr[i]){
                              case 'a':
                              case 'b':
                              case 'c':
                                break;
                              default:
                                newStr.push(str[i])
                            }
                          }
                          return newStr.join('')
                          
                        }
                        
                        console.log(removeABC("This might be a bit hard") )
                          // ➞ "This might e  it hrd"
                   

                          function reverse(str) {
                            const arrStr= str.split(' ');
                            let result=[]
                          
                            for(let i =0;i<arrStr.length;i++){
                              if(arrStr[i].length>4){
                                let reverseWord=''
                                for(let j = arrStr[i].length-1;j>=0;j--){
                                 reverseWord += arrStr[i][j]
                                }
                                result.push(reverseWord)
                              }else{
                              result.push(arrStr[i])
                              }
                            }
                            return result.join(' ')
                          }
                          
                          console.log(reverse("This is a typical sentence.") )

                          function sevenBoom(arr) {

                            for(let i =0;i<arr.length;i++){
                              let numStr=arr[i].toString();
                              for(let j=0;j<numStr.length;j++){
                                if(numStr[j]==='7'){
                                  return "Boom!"
                                }
                              }
                            }
                            return 'there is nothing'
                            
                          }
                          // time complexity is 0n2
                          
                          console.log(sevenBoom([2, 55, 60, 97, 86]) )
                            // ➞ "Boom!"


function insertionSort(arr) {
  for(let i =1;i<arr.length;i++){
    let numberToInsert=arr[i]
    let j=i-1
    while (j>=0 && arr[j]> numberToInsert){
      arr[j+1]=arr[j]
      j=j-1
    }
    arr[j+1]=numberToInsert
  }
};

const arr = [8,20,-2,4,-6]
insertionSort(arr);
console.log(arr)

function insertWhitespace(s) {
  const Arrs= s.split('');
  let solutionArr=[Arrs[0]]

  for(let i=1;i<Arrs.length;i++){
    if(Arrs[i]===Arrs[i].toUpperCase()){
      solutionArr.push(' ')
    }
    solutionArr.push(Arrs[i])
  }
  return solutionArr.join('')
  
}

console.log(insertWhitespace("SheWalksToTheBeach"))
  // ➞ "She Walks To The Beach"

  function doubleSwap(str, c1, c2) {

    let solution=''
  
    for(let i=0;i<str.length;i++){
      if(str[i]===c1){
        solution+=c2
      }else if(str[i]===c2){
        solution+=c1
      }else{
      solution+=str[i]
      }
    }
    return solution
  }
  
  console.log(doubleSwap( "aabbccc", "a", "b"))
    // ➞ "bbaaccc"

    function uncensor(str, vowels) {
      const strArr= str.split('');
      const vowelsArr=vowels.split('')
      let solution=''
      let vowelsIndex=0;  
   
     for(let i =0;i<strArr.length;i++){
       if(strArr[i]==='*'){
         solution+= vowelsArr[vowelsIndex];
         vowelsIndex++
       }else{
         solution+= str[i]
       }
     }
     return solution
   }
   
   console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"))
     // ➞ "Where did my vowels go?"
     console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"))
     // ➞ "Where did my vowels go?"

    //  STRINGS ////////
// reverse words


function reverseWords(s){
  
  let words=[];
  let word ='';

  for( let i =0;i<s.length;i++){
    if(s[i]==='.'){
    words.push(word);
    word=''
  }else{
    word+=s[i]
  }
  }
  words.push(word);

  let result='';
  for(let i =words.length-1;i>=0;i--){
    result+=words[i]
    if(i>0){
      result+='.'
    }
  }
  return result
}
console.log(reverseWords('i.like.this.program.very.much'))
// anser much.very.program.this.like.i

function longestCommonPrefix(n,arr){
  if(n===0) return "-1";

  let prefix = arr[0];

 for(let i =1;i<n;i++){
   while(arr[i].indexOf(prefix)!==0){
     prefix= prefix.slice(0, -1);
     if(prefix==='') return "-1"
   }
 }
 return prefix
}

console.log(longestCommonPrefix(4,['geeksforgeeks', 'geeks', 'geek', 'geezer']))
// Output: gee
// Explanation: "gee" is the longest common prefix in all the given strings.

function sevenBoom(arr) {

  // for(let i =0;i<arr.length;i++){

  //   if(arr[i].toString().includes(7)){
  //     return 'Boom'
  //   }
  // }
  // return 'there is no no7'

  for(let i =0;i<arr.length;i++){
    let num = arr[i]

    while(num>0){
      console.log(num%10)
      if(num%10===7){
        return 'Boom'
      }
      num = Math.floor(num/10)
    }
  }
  return 'there is no no 7 '
}

console.log(sevenBoom([2, 55, 60, 97, 86]))
console.log(sevenBoom([2, 55, 60, 97, 86]))
console.log(sevenBoom([2, 55, 60, 97, 86]))
console.log(sevenBoom([2, 55, 60, 97, 86]))
console.log(sevenBoom([2, 55, 60, 97, 86]))
console.log(sevenBoom([2, 55, 60, 97, 86]))
console.log(sevenBoom([2, 55, 60, 97, 86]))
console.log(sevenBoom([2, 55, 60, 97, 86]))
console.log(sevenBoom([2, 55, 60, 97, 86]))
console.log(sevenBoom([2, 55, 60, 97, 86]))
console.log(sevenBoom([2, 55, 60, 97, 86]))
console.log(sevenBoom([2, 55, 60, 97, 86]))
console.log(sevenBoom([2, 55, 60, 97, 86]))
console.log(sevenBoom([2, 55, 60, 97, 86]))
console.log(sevenBoom([2, 55, 60, 97, 86]))
console.log(sevenBoom([2, 55, 60, 97, 86]))
console.log(sevenBoom([2, 55, 60, 97, 86]))
console.log(sevenBoom([2, 55, 60, 97, 86]))

function minMax(arr) {

  let minNumber=arr[0];
  let maxNumber=arr[0]

  for(let i =0;i<arr.length;i++){
    if(arr[i]<minNumber){
      minNumber=arr[i]
    }
    if(arr[i]>maxNumber){
      maxNumber = arr[i]
    }
  }
  return [minNumber, maxNumber]
}

console.log(minMax([1, 2, 3, 4, 5]))
console.log(minMax([1, 2, 3, 4, 5]))
console.log(minMax([1, 2, 3, 4, 5]))
console.log(minMax([1, 2, 3, 4, 5]))
console.log(minMax([1, 2, 3, 4, 5]))
console.log(minMax([1, 2, 3, 4, 5]))
console.log(minMax([1, 2, 3, 4, 5]))
console.log(minMax([1, 2, 3, 4, 5]))
console.log(minMax([1, 2, 3, 4, 5]))
console.log(minMax([1, 2, 3, 4, 5]))
















  // ➞ "Boom!"
// 97 contains the number seven.





    