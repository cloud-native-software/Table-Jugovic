const { format } = require('path')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const data = []

let message = "\nEnter numbers from 1 to 100 (type '0' to process numbers or 'q' to quit): "

// get numbers from user
function promptUser() {
  rl.question(message, (number) => {
    // check if input is q
    if (number === "q") {
      rl.close()
      console.log("\nClosing application...")
      process.exit(0)
    } else {
      let n = parseInt(number)
      // check if input is 0
      if (number === "0") {
        if (data.length === 0) {
          console.log(`\nYou have not entered any numbers yet.`)
          promptUser()
        } else {
          console.log("Array: ", data)
          console.log("Ascending: ", sortAsc(data))
          console.log("Descendig: ", sortDesc(data))
          console.log("Min: ", findMin(data))
          console.log("Max: ", findMax(data))
          console.log("Number of odd: ", countOdd(findOdd(data)))
          console.log("Number of even: ", countEven(findEven(data)))
          rl.close()
          console.log("\nThank you for using our app")
          process.exit(0)
        }
        // if input is correct
      } else if (n >= 1 && n <= 100) {
        // add to array
        enterData(data, n)
        console.log(`\nNumber added: ${n}\nYour current list: ${data}`)
        promptUser()
      } else {
        console.log("\nOops! Looks like you misstyped...")
        promptUser()
      }
    }
  })
}

// insert numbers to array
function enterData(arr, number) {
  arr.push(number)
}

// min
function findMin(data) {
  /// ... is a spread operator
  return Math.min(...data)
}

// max
function findMax(data) {
  return Math.max(...data)
}

// odd
function findOdd(data) {
  return data.filter(number => number % 2 !== 0)
}

// even
function findEven(data) {
  return data.filter(number => number % 2 === 0)
}

// count odd
function countOdd(odd) {
  return odd.length
}

// count even
function countEven(even) {
  return even.length
}

function sortAsc(data) {
  return data.sort((a, b) => a - b)
}

// order by descending
function sortDesc(data) {
  return data.sort((a, b) => b - a)
}

promptUser()