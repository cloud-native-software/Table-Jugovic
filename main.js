const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const data = []

let message = "\nEnter numbers from 1 to 100 (type '0' to process numbers or 'q' to quit): "

// get input from user
function main() {
  rl.question(message, (input) => {
    if (input === "q") {
      rl.close()
      console.log("\nClosing application...")
      process.exit(0)
    } else {
      if (input === "0") {
        if (data.length === 0) {
          console.log(`\nYou have not entered any numbers yet.`)
          main()
        } else {
          console.log("Array: ", data)
          console.log("Ascending: ", sortAsc(data))
          console.log("Descendig: ", sortDesc(data))
          console.log("Min: ", findMin(sortAsc(data)))
          console.log("Max: ", findMax(sortDesc(data)))
          console.log("Number of odd: ", countOdd(findOdd(data)))
          console.log("Number of even: ", countEven(findEven(data)))
          console.log("\nThank you for using our app")
          rl.close()
          process.exit(0)
        }
      } else {
          let n = parseInt(input)
          if (isNaN(n)) {
            console.log(`\n${input} is not a number`)
            main()
          }
          else if (n >= 1 && n <= 100) {
            enterData(data, n)
            console.log(`\nNumber added: ${n}\nYour current list: ${data}`)
            main()
          } else {
            console.log("\nNumber must be between 1 and 100")
            main()
        }
      }
    }
  })
}

function enterData(arr, number) {
  arr.push(number)
}

function findMin(Asc) {
  /// ... is a spread operator
  return Asc[0]
}

function findMax(Desc) {
  return Desc[0]
}

function findOdd(data) {
  return data.filter(number => number % 2 !== 0)
}

function findEven(data) {
  return data.filter(number => number % 2 === 0)
}

function countOdd(odd) {
  return odd.length
}

function countEven(even) {
  return even.length
}

function sortAsc(data) {
  return data.sort((a, b) => a - b)
}

function sortDesc(data) {
  return data.sort((a, b) => b - a)
}

main()