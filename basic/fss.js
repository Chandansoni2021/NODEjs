const fs = require('fs');

// crearting a new file 

// fs.mkdirSync('hello.txt')
// fs.writeFileSync("new.txt", "welcome code_with_chandan11");
// overwrite ho raha hai 



// yadi mai overwrite n karna chahta to 

// fs.appendFileSync('new.txt', "hiii bhai . ")

// append karne ke liy e



// yadi read karna hai to 
// const data =fs.readFileSync('new.txt','utf-8');
// console.log(data) 

// output - ffer 77 65 6c 63 6f 6d 65 20 63 6f 64 65 5f 77 69 74 68 5f 63 68 61 6e 64 61 6e 31 31 68 69 69 69 20 62 68 61 69 20 2e 20>.


// binary format mai save kaarne ke liye 

// orginal_data = data.toString()
// console.log(orginal_data)

// output welcome code_with_chandan11hiii bhai . 


// to rename the file 

fs.renameSync('read.txt', 'read_write.txt');

//rmkdir
//unlinksys - to delete the file 