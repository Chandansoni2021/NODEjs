const fs = require('fs')

// fs.writeFile('read.txt','today is the awesome day ',(err)=>{
//     console.log('files is created')
// })

// asyncronus mai ye hai ki agar aap koi bhi kam karva rahe ho to us kam ke khatamhone ke baad aap kya karvaan achahte ho to ham err ko show kara sakte ho 


// fs.appendFile('read.txt','my_chhanle',(err)=>{
//     console.log('task complted')
// })


fs.readFile('read.txt',"UTF-8",(err,data)=>{
    console.log(data)
})