// import chalk from 'chalk';
// import validator from 'validator';

// console.log(chalk.yellow.bgYellowBright('Hello world!'));


// const res = validator.isEmail('chandan@gm')

// console.log(res ? chalk.green.inverse('true') : chalk.red.inverse('false'))

import path from 'path';
import express from 'express';

const newpath  = path.join(__dirname);
console.log(newpath)
const app = express();

app.get("/", (req, res) => {
    res.send("hello bhoot aaya daro ");
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});

