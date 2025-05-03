

// Given an array arr[], the task is to print every alternate element of the array starting from the first element.

// Examples:
// Input: arr[] = [10, 20, 30, 40, 50]
// Output: 10 30 50
// Explanation: Print the first element (10), skip the second element (20), print the third element (30), skip the fourth element(40) and print the fifth element(50).

// Input: arr[] = [-5, 1, 4, 2, 12]
// Output: -5 4 12

// Answer 

const alternateArray =(arr)=>{
    let res =[];

    for(let i =0;i<arr.length;i+=2){
        res.push(arr[i])
    }
    return res
}

const res=alternateArray([10, 20, 30, 40, 50])

// console.log(res)


// ******************************************************************


// Given an array, arr of n integers, and an integer element x, find whether element x is present in the array. Return the index of the first occurrence of x in the array, or -1 if it doesn’t exist.

// Input: arr[] = [1, 2, 3, 4], x = 3
// Output: 2
// Explanation: There is one test case with array as [1, 2, 3 4] and element to be searched as 3. Since 3 is present at index 2, the output is 2.

const findArr=(arr, value)=>{
    
    for(let i =0;i<arr.length;i++){
        if(arr[i]==value){
            return i
        }
    }
    return -1
}

// console.log(findArr([1, 2, 3, 4],3))
// console.log(findArr([10, 8, 30, 4, 5],5))


// ******************************************************************

// Given an array arr. The task is to find the largest element in the given array. 

// Examples: 

// Input: arr[] = [10, 20, 4]
// Output: 20
// Explanation: Among 10, 20 and 4, 20 is the largest. 


// Input: arr[] = [20, 10, 20, 4, 100]
// Output: 100

const largestArr =(arr)=>{
    let max =arr[0]

    for(let i =0; i<arr.length; i++){
        if(arr[i]>max){
        max = arr[i]
        }
    }
    return max
}

// console.log(largestArr([10, 20, 4]))


// ******************************************************************

// Given an array of positive integers arr[] of size n, the task is to find second largest distinct element in the array.

// Note: If the second largest element does not exist, return -1.

// Examples:

// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.

const secLargestArr=(arr)=>{
    let first = -1
    let second = -1
    for(let i=0;i<arr.length;i++){
        if(arr[i]>first){
            second=first
            first=arr[i]
        }else if(arr[i]<first && arr[i]>second){
            second=arr[i]
        }
    }
    return second
}

console.log(secLargestArr([12, 35, 1, 10, 34, 1]))




