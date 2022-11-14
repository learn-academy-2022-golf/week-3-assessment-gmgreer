// ASSESSMENT 3: Coding Practical Questions with Jest





// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("fib", ()=>{
  it("function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", ()=>{
    const fibLength1 = 6
    const output1 = [1, 1, 2, 3, 5, 8]

    const fibLength2 = 10
    const output2 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

    expect(fib(fibLength1)).toEqual(output1)
    expect(fib(fibLength2)).toEqual(output2)

  })
})

describe("fibRec", ()=>{
  it("function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", ()=>{
    const fibLength1 = 6
    const output1 = [1, 1, 2, 3, 5, 8]

    const fibLength2 = 10
    const output2 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

    expect(fibRec(fibLength1)).toEqual(output1)
    expect(fibRec(fibLength2)).toEqual(output2)

  })
})


// b) Create the function that makes the test pass
// create a function that takes in a number as an argument
// return an array of length of the number with the fibonacci sequence. The fibonacci sequence is just the sum of the previous two numbers.
// there will need to be a loop that sums the previous two numbers in an array then place that summed number at the end of the array. The array should loop until the length of the array reaches the function argument.
//since the number will never be less than or equal to two the first three numbers in the fibonacci array will always be [1,1,2]. This give us a place to start and start adding up numbers based on their index.
//after I began writing I decided to go with a while loop to decide when to stop. I just need to return the sum of the last two numbers in the array as the last number in the array

//recursion
//Out of practice with recursion so I am going to try it.
//Using recursion I will set up a base condition to stop the recursion and then just call the function again and again until I meat that condition
//This was difficult, I understood how to get a sequence of numbers but putting it into an array was really difficult.
// The condition is that the number won't be 2 or less so we can set the initial condition as n < 3 and return the array we are supposed to get so this will be the initial array created when we return from the top of the stack
//the stack is a concept in recursion, each time we go into the return statement past the base case we are calling fibRec again so it isn't able to complete its return and it will place the result on top of a stack.
//It will keep doing this until the base condition of num < 3 so when num = 2 we will set the arr to [1,1]. After this it will call the stack in order so we will keep adding the next sum to the array.
//The current fibRec function is the third refactoring, I was trying to get it in one line of code. The explanation above should still be accurate I am just using ternary operator to smoosh it down. 


const fib = (num) => {
  let fibArr = [1,1,2]
  while (fibArr.length < num){
    fibArr.push((fibArr[fibArr.length -1]) + (fibArr[fibArr.length - 2]))
  }
  return fibArr
 }


 const fibRec = (num) => {
  return num < 3 ? [1,1] : [...fibRec(num-1), fibRec(num-1)[num-2]
   + fibRec(num-1)[num-3]]
 }
  


// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// result after coming back and doing the recursion
// Test Suites: 1 passed, 1 total
// Tests:       5 passed, 5 total


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

describe("orderedArray", () => {
  it("unction that takes in an object and returns an array of the values sorted from least to greatest.", ()=> {

    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
    const output =  [15, 15, 20, 30, 30, 60, 90]

    expect(orderedArray(studyMinutesWeek1)).toEqual(output)
  })
})

describe("orderedArrayForIn", () => {
  it("function that takes in an object and returns an array of the values sorted from least to greatest.", ()=> {

    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
    const output =  [15, 15, 20, 30, 30, 60, 90]

    expect(orderedArrayForIn(studyMinutesWeek1)).toEqual(output)
  })
})

// b) Create the function that makes the test pass.
// create a function that takes an object as an argument
// the function will return an array of the objects values ordered from least to greatest
// Will use the suggested Object.value() to get the values of the object into an array, otherwise could have done a for..in loop to extract only the values. May try that as well for practice.
// after we extract the array of only values can simply sort the array with .sort(a,b => a-b)
//i thought that the for in loop obj.x would work but it needs to be in bracket notation.

const orderedArray = (obj) => {
   return Object.values(obj).sort((a,b) => a-b)
}

const orderedArrayForIn = (obj) => {
  let arr = []
  for (let x in obj) {
    arr.push(obj[x])
  }
  return arr.sort((a,b)=> a-b)
}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("sumArray", ()=> {
  it("function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", ()=> {
    const accountTransactions1 = [100, -17, -23, -9]
    let output1 = [100, 83, 60, 51]

    const accountTransactions2 = [250, -89, 100, -96]
    let output2 = [250, 161, 261, 165]

    const accountTransactions3 = []
    let output3 = []

    expect(sumArray(accountTransactions1)).toEqual(output1)
    expect(sumArray(accountTransactions2)).toEqual(output2)
    expect(sumArray(accountTransactions3)).toEqual(output3)


  })
})



// b) Create the function that makes the test pass.
// create a function that takes an array as an argument
// the function will return an array that sums with the previous number in the array replacing the index with the new sum then moves on to the next index and repeats so that the array is of equal length as the previous array.
// if given an empty array should return an empty array.
// We must loop through the array while also saving the new sum to be used on the next value
// I believe I can create a variable to keep track of that new sum and push that new sum into a new array.


const sumArray = (arr) => {
  let newArr = []
  let sum = 0
  for (let i = 0; i < arr.length; i++) {  
    sum += arr[i]
    newArr.push(sum)
    }
    return newArr
}

// Test Suites: 1 passed, 1 total
// Tests:       4 passed, 4 total