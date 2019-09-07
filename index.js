const { reversePolish } = require('./src/reversePolish')

// Run reversePolish with an expression from the command line.
console.log(reversePolish(process.argv[2]))
