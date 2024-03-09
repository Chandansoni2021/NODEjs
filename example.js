const express = require('express')

const app = express();

app.get("/", (req, res) => {
    res.send("hii mare n tum ab tak")
})
app.get("/home", (req, res) => {
    res.send("hiihomehome ")
})
app.get("/help", (req, res) => {
    res.send("hii help help")
})
const path = require('path')

// const newpath = path.join(__filename)
const pathh = path.join(__dirname, 'pubic')
console.log(pathh)

app.use(express.static(pathh))

app.get("/about", (req, res) => {
    res.send(`
        <input type="text" placeholder="user name" value=${req.query.value}/>
    `);
});

app.set('view engine', 'ejs');

app.get('/profile', (req, res) => {
    const user = {
        name: "chandan",
        email: "chandan@gmail.com",
        skills: ['c', 'cpp']
    }
    res.render('profile', { user })
})


app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/index', (req, res) => {
    res.sendFile(`${pathh}/index.html`)
})
app.get('*', (req, res) => {
    res.sendFile(`${pathh}/error.html`)
})
// console.log(path.basename(__dirname))

app.listen(3000, () => {
    console.log(`mai chalu ho gyi at http://localhost:3000/`)
})