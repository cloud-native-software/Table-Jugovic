const data = [3, 1, 4, 5, 2]

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

console.log("Array: ", data)
console.log("Asc: ", sortAsc(data))
console.log("Desc: ", sortDesc(data))
console.log("Min: ", findMin(data))
console.log("Max: ", findMax(data))
console.log("Odd: ", sortAsc(findOdd(data)))
console.log("Even: ", sortAsc(findEven(data)))
