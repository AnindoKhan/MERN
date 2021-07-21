/**
 * Sorts an array by traversing backwards to find each value's correct position.
 * 
 * @param {number[]} arr an UNSORTED array of numbers
 * @returns {number[]} the INPUT array (ie. sorts "in place")
 */

function insertionSort(arr) {
    for(i=0; i<arr.length; i++){
      for(j=0; j<arr.length;j++){
        if(arr[j+1] < arr[j]) {
          let temp = arr[j+1];
          arr[j+1] = arr[j]
          arr[j] = temp
        }
      }
    }
    return arr
  }
  
  console.log(insertionSort([1, 5, 2, 8, 3, 4]));
  // should log [1, 2, 3, 4, 5, 8]
  
  
  /**
   * Sorts an array of objects according to an array of keys.
   * 
   * @param {Object[]} arr an UNSORTED array of objects
   * @param {string[]} keys an array of keys to sort by
   * 
   * Use any of the sorting algos we've covered thus far.
   */
  
  function multiKeySort(arr, keys) {
    for(i=0; i<arr.length; i++){      //This cycles through the whole array
      for(j=0; j < arr.length-1; j++){   //Cycle through first name and sort.
        if(arr[j+1][keys[0]] === arr[j][keys[0]]){  //If same first name, sort by last instead.
          if(arr[j+1][keys[1]] < arr[j][keys[1]]){  
            let temp = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = temp;
          }
        }
        else if(arr[j+1][keys[0]] < arr[j][keys[0]]){
          let temp = arr[j+1];
          arr[j+1] = arr[j];
          arr[j] = temp;
        }
      }
    }                          
    return arr;                                 //If two identical first names, sort by last name for those.
  }
  
  console.log(multiKeySort([
    {
      firstName: 'Lee',
      lastName: 'Babba'
    },
    {
      firstName: 'Lee',
      lastName: 'Abba'
    },
    {
      firstName: 'Adam',
      lastName: 'Smith'
    }
  ], ['firstName', 'lastName']));

  /**
 * Creates a new sorted array from two sorted arrays.
 * 
 * @param {number[]} arr1 a sorted array of numbers
 * @param {number[]} arr2 a sorted array of numbers
 * @returns {number[]} a sorted array with all elements from both input arrays
 */

function combineSortedArrays(arr1, arr2) {
  // your code here
}

console.log(combineSortedArrays([2, 4, 6], [1, 3, 5]));
// should log [1, 2, 3, 4, 5, 6]
console.log(combineSortedArrays([1], [3])); // should log [1, 3]
console.log(combineSortedArrays([1], [])); // should log [1]


/**
 * Sorts an array with a "divide and conquer" approach.
 * Uses combineSortedArrays internally.
 * 
 * @param {number[]} arr an UNSORTED array of numbers
 * @returns {number[]} the new sorted array
 */

function mergeSort(arr) {
  // your code here
}

[1, 2, 3, 4, 5].slice(); // returns [1, 2, 3, 4, 5]
[1, 2, 3, 4, 5].slice(2); // returns [3, 4, 5]
[1, 2, 3, 4, 5].slice(2, 4); // returns [3, 4]

console.log(mergeSort([1, 5, 2, 8, 3, 4]));
// should log [1, 2, 3, 4, 5, 8]

function combineSortedArrays(arr1, arr2) {
  let i = 0;
  let ii = 0;
  let returnArr = []
  while (i<arr1.length && ii<arr2.length) {
    if (arr1[i]<arr2[ii]) {
      returnArr.push(arr1[i])
      i++
    }
    else if(arr1[i]>arr2[ii]) {
      returnArr.push(arr2[ii])
      ii++
    } 
    else if(arr1[i] == arr2[ii]) {
      returnArr.push(arr1[i]);
      returnArr.push(arr2[ii]);
      i++;
      ii++;
    }
  }
  if (i<arr1.length) {
    returnArr.push(arr1[arr1.length-1])
  }
  else {
    returnArr.push(arr2[arr2.length-1])
  }
  return returnArr;
}
function arrayPartition(arr, startIdx = 0, endIdx = arr.length - 1) {
  // your code here
  let pivotIndex = Math.ceil(Math.random() * (endIdx - startIdx) + startIdx);
  //Math.floor(Math.random() * (1 + High - Low)) + Low
  let pivot = arr[pivotIndex];
  //[1, 5, 8, 4, 2, 6]
  //[]
  while(startIdx < endIdx){
      while(arr[startIdx] < pivot){
          startIdx++;
      }
      while(arr[endIdx] > pivot){
          endIdx--;
      }
      if (startIdx < endIdx){
          let temp = arr[startIdx];
          arr[startIdx] = arr[endIdx];
          arr[endIdx] = temp;
      }
  }
  return startIdx;

}

const arr = [1, 5, 8, 4, 2, 6]
console.log("Pivot Value: " + arrayPartition(arr));
console.log(arr);

/**
 * Creates an intersection (elements in both) of two sorted arrays.
 * 
 * @param {number[]} arr1 a sorted array of numbers
 * @param {number[]} arr2 a sorted array of numbers
 * @returns {number[]} a NEW SORTED array of the shared elements
 */
// iterate through both arrays
    // see if the value at that index in each array is equivalent
    // then push it into the new array
    // temp variable
    // a new array 

    function intersectSortedArrays(arr1, arr2) {
      let temp = 0;
      let newArr = []
      for(let i=0; i < arr1.length; i++){
        for(let j=0; j <arr2.length; j++){
          if (arr1[i] == arr2[j]){
            newArr.push(arr1[i]);
            break
          }
        }
      }
        return newArr;
    }
    
    console.log(intersectSortedArrays([1, 2, 2, 3], [2, 2, 4]));
  // should log [2, 2]
  
  
  /**
   * BONUS: ensure that each element in the returned array is unique
   * 
   * @param {number[]} arr1 a sorted array of numbers
   * @param {number[]} arr2 a sorted array of numbers
   * @returns {number[]} a NEW SORTED array of the shared elements
   */
  
  function intersectSortedArraysDedupe(arr1, arr2) {
    let newArr = intersectSortedArrays(arr1,arr2)
    for(i=0;i < newArr.length;i++){
      if (newArr[i] == newArr[i+1]){
        newArr.pop();
      }
    }
    return newArr;
  }
  
  console.log(intersectSortedArraysDedupe([1, 2, 2, 3], [2, 2, 4]));
  // should log [2]