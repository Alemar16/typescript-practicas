const calculator2 = (a: number, b: number, op: 'multiply' | 'add' | 'divide') => {
  if (op === 'multiply') return a * b
  if (op === 'add') return a + b
  if (op === 'divide') {
    if (b === 0) return 'Cannot divide by 0'
    return a / b
  }
}
const result10 = calculator2(1, 2, 'multiply')
const result20 = calculator2(1, 2, 'add')
const result30 = calculator2(1, 2, 'divide')

console.log(result10)
console.log(result20)
console.log(result30)