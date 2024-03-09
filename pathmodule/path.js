import path from 'path'


// console.log(path.dirname('C:\Users\yashk\OneDrive\Desktop\thapa_express\path.js'))

console.log(path.extname('C:\Users\yashk\OneDrive\Desktop\thapa_express\path.js'))

console.log(path.basename('C:\Users\yashk\OneDrive\Desktop\thapa_express\path.js'))

const mypath = path.parse('C:\Users\yashk\OneDrive\Desktop\thapa_express\path.js')


console.log(mypath.name)


