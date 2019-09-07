# Reverse Polish Calculator

Evaluate an expression in reverse polish notation.

---

## Description

Rather than the more familiar 1 + 1 = 2, reverse polish notation is written 1 1 + = 2.

The operator is after the 2 operands instead of between them. This means that there is no ambiguity with order of operations.

For example, in the expression, `5 + 2 + 8 * 3`, 8 must be multiplied by 3, then the result is added to 5 and 2, giving a result of 31.  
In reverse polish notation the expression is written as `5 2 + 8 3 * +`, which simplifies down to `10 24 +`, solving to 31 as well, but with no need to multiply before adding.

---

## How to Run
`yarn start {expression}`  
`npm start -- {expression}`

`{expression}` must be space separated and surrounded by quotes. For example, `yarn start "1 1 +1"` 

---

## Run Tests
`yarn test`  
`npm test`