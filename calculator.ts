const operations = ['multiply', 'add', 'divide']
const calculator = (a: number, b: number, op: string) => {
  if (!operations.includes(op)) {
    console.log('This operation is not defined')
    throw new Error('Invalid operation')
  }
  if (op === 'multiply') return a * b
  if (op === 'add') return a + b
  if (op === 'divide') {
    if (b === 0) return 'Cannot divide by 0'
    return a / b
  }
  
}

const result1 = calculator(1, 3, 'multiply')
const result2 = calculator(1, 3, 'add')
const result3 = calculator(1, 3, 'divide')
const result4 = calculator(5, 0, 'divide')
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)