/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */

var doubleArray = function(arr){
  var double = [];
  for(var i = 0; i<arr.length; i++){
    double.push(arr[i]*2);
  }
  return double;
}

/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Bool}
 */


// var numbers = [10, 20, 30, 40] // sums to 100
// var sum = 0;

// for (var i = 0; i < numbers.length; i++) {
//   sum += numbers[i]
// }



var sumArrays = function(arr1, arr2){
  var sum = 0;
  for(var i =0; i<arr1.length; i++){
    sum += arr1[i];
    sum += arr2[i];
  }
  return sum;
}


// arrSum1 = 0;
// arrSum2 = 0;
// finalSum = 0;

// var sumArrays = function(arr1, arr2){
//   for(var i = 0; i<arr1.length; i++){
//     arrSum1 += arr1[i];
//     arrSum2 += arr2[i];
//     finalSum = arrSum1 + arrSum2;
//   }
//   return finalSum;
// }


/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */

var stringCount = function(string){
  return string.length;
}

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */

var arrayLength = function(arr){
  return arr.length;
}

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */

var countAll = function(arr){
  var sum = 0;
  for(var i = 0; i<arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */

var countStrings = function(arr){
  var strLength = [];
  for(var i = 0; i<arr.length; i++){
    strLength.push(arr[i].length);
  }
  return strLength;
}

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */

var countAllStrings = function(arrOfStrings){
  var strLength = [];
  var sum = 0;
  for(var i =0; i<arrOfStrings.length; i++){
    strLength.push(arrOfStrings[i].length);
    sum += strLength[i];
  }
  return sum;
}

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */


var convertToArray = function(obj){
  return Object.values(obj);
}

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */


var objectSize = function(nowObject){
  var keyArr = Object.keys(nowObject);
  return keyArr.length;
}

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Zero}
 */


var createZeroFilledArray = function(num){
  var zeroArr = [];
  for(var i = 0; i<num; i++){
    zeroArr.push(0);
  }
  return zeroArr;
}


/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */


var poppedArray = function(arr){
  arr.pop();
  return arr;
}


/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */

var splitString = function(str){
  return str.split('');
}

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */

var lengthOfLast = function(arr){
  var last = arr.pop();
  return last.length;
}

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */



var sumBelowTen = function(arr){
  var lowNum = [];
  var sum = 0;
  for(var i = 0; i<arr.length; i++){
    if(arr[i]<10){
      sum += arr[i];
    }
  }
  return sum;
}


/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */

var moreThanTenLetters = function(arr){
  var sum = 0;
  for(var i = 0; i<arr.length; i++){
    if(arr[i].length > 10){
      sum += 1;
    }
  }
  return sum;
}

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */

var multiplyAll = function(arr){
  var sum = 1;
  for(var i = 0; i<arr.length; i++){
    sum *= arr[i];
  }
  return sum;
}

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */

var sumAllPositive = function(arr){
  var sum = 0;
  for(var i = 0; i<arr.length; i++){
    if(arr[i]>0){
      sum += arr[i];
    }
  }
  return sum;
}

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree = function(arr){
  var sum = 0;
  for(var i = 0; i<arr.length; i++){
    if(arr[i].length < 4){
      sum +=1
    }
  }
  return sum;
}

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */

var countObjects = function(arr){
  return arr.length;
}

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */

var getObjectKeys = function(obj){
  return Object.keys(obj);
}


//             OR
//
// var getObjectKeys = function(obj){
//   return Object.keys(obj);
// }

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */str+=1;
console.log(str);

var getObjectValues = function(obj){
  
}

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */


var makeObject = function(key, value){

}


/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Bool}
 */

var makeObjectReverse = function(value, key){

}


/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */

var tupleToObject = function(arr){
  var obj = {};
  var secondElem = arr.splice(1,1);
  var stringArr = arr.toString();
  var stringSecondElem = parseInt(secondElem);
  obj[stringArr] = stringSecondElem;
  return obj;
}

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */

var tupleToObjectReverse = function(arr){
  var obj = {};
  var secondTuple = arr.splice(1,1);
  obj[secondTuple] = parseInt(arr);
  return obj;
}

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */

var strToKeys = function(arr){
  var obj = {};
  for(var i = 0; i<arr.length; i++){
    obj[arr[i]] = 0;
  }
  return obj;
}

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */

var getValues = function(obj){
  return Object.values(obj);
}

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */

var getKeys = function(obj){
  return Object.keys(obj);
  console.log(Object.keys(obj));
}

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */

var objectToArray = function(obj){
  var emptyArr = [];
  var tuple1 = [];
  var tuple2 = [];
  var final = [];
  emptyArr.push(Object.keys(obj));
  emptyArr.push(Object.values(obj));
  //console.log(emptyArr);
  oneEmptyArr = emptyArr[0].concat(emptyArr[1]);
  //console.log(oneEmptyArr);
  tuple1.push(oneEmptyArr[0]);
  tuple2.push(oneEmptyArr[1]);
  tuple1.push(oneEmptyArr[2]);
  tuple2.push(oneEmptyArr[3]);
  // console.log(tuple1);
  // console.log(tuple2);
  final.push(tuple1);
  final.push(tuple2);
  return final;
}

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */

var arrayToObject = function(arr){
  var emptyObj = {};
  for(var i =0; i<arr.length; i++){
  emptyObj[arr[i]] = false;
  }
  return emptyObj;
}

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */

var arraysToObject = function(arr1, arr2){
  var emptyObj = {};
  for(var i = 0; i<arr1.length; i++){
    emptyObj[arr1[i]] = arr2[i];
  }
  return emptyObj;
}

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */

// var objectsToTuples = function(obj1, obj2){
//   var arr = [];
//   var arr2 = [];
//   var finalArr = ;
//   arr.push(Object.entries(obj1));
//   //var arrCon = arr[0].concat(arr[1]);
//   arr2.push(Object.entries(obj2));
//   //var arrCon2 = arr2[0].concat(arr2[1]);
//   // console.log(arr)
//  // console.log(arr2)
//  // console.log(arrCon)
//  // console.log(arrCon2)
//  finalArr.push(arr[0]);
//  finalArr.push(arr2[0]);
//  finalArr.push(arr[1]);
//  finalArr.push(arr2[1]);
//  console.log(finalArr)
// }

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */

var mapArrayValues = function(arr){
  var emptyObj = {};
  for(var i = 0; i<arr.length; i++){
    emptyObj[arr[i]] = true;
  }
  return emptyObj;
}

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */

var mapStringCounts;

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums;

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys;

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap;

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Bool}
 */
var frequencyMap;

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Bool}
 */
var tupleConvertToObject;


module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays, 
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: null,
  mapArrayValues: mapArrayValues,
  mapStringCounts: null,
  arrayToObjectNums: null,
  stringToKeys: null,
  charCountMap: null,
  frequencyMap: null,
  tupleConvertToObject: null
}
