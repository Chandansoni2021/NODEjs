const os = require("os") 



console.log(os.arch())

console.log(os.freemem()/1024/1024/1024)  
// how many memory left in youru pc 

console.log(os.totalmem()/1024/1024/1024)

// total memory 

console.log(os.hostname())

console.log(os.platform())
console.log(os.machine())

console.log(os.type())