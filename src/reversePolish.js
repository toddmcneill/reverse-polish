const operators = ['+', '-', '*', '/']

function reversePolish (inputStr) {
  const input = inputStr.split(' ').map(char => isOperator(char) ? char : parseInt(char, 10))

  // Continue applying operators where possible until no operator is left.
  while (inputIncludesOperator(input)) {
    for (let i = 2; i < input.length; i++) {
      const operator = input[i]
      const operand1 = input[i - 2]
      const operand2 = input[i - 1]

      // Search for an operator preceded by 2 numbers.
      if (!isOperator(operator) || isOperator(operand1) || isOperator(operand2)) {
        continue
      }

      // Calculate the value.
      let val
      switch (operator) {
        case '+':
          val = operand1 + operand2
          break
        case '-':
          val = operand1 - operand2;
          break;
        case '*':
          val = operand1 * operand2;
          break;
        case '/':
          val = operand1 / operand2;
          break;
      }

      // Replace the 3 input characters with the calculated value.
      input.splice(i - 2, 3, val)
    }
  }

  // There should only be 1 value left in the array, which is the solution.
  return input[0]
}

function inputIncludesOperator (input) {
  for (let i = 0; i < input.length; i++) {
    if (isOperator(input[i])) {
      return true
    }
  }
  return false
}

function isOperator (char) {
  return operators.includes(char)
}

module.exports = {
  reversePolish,
  inputIncludesOperator,
  isOperator
}