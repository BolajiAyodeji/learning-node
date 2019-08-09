const c = require('./script2.js')

const a = c.largeNumber;
const b = 6;

console.log(a + b)

setTimeout(() => {
    console.log(__dirname)
},3000)