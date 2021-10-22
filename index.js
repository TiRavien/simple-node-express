const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello from second ever node');
})

const users = [
    { id: 0, name: 'Muhammad', email: 'muhammad@gmail.com', cell: '8764531208' },
    { id: 1, name: 'Tareq', email: 'tareq@gmail.com', cell: '8764531208' },
    { id: 2, name: 'Imtiaz', email: 'imtiaz@gmail.com', cell: '8764531208' },
    { id: 3, name: 'Ravien', email: 'ravien@gmail.com', cell: '8764531208' },
    { id: 4, name: 'Sabrina', email: 'sabrina@gmail.com', cell: '8764531208' },
    { id: 5, name: 'Shea', email: 'shea@gmail.com', cell: '8764531208' },
]


app.get('/users', (req, res) => {
    const search = req.query.search;
    //use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
    }
    else {
        res.send(users);
    }
})

//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('Hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})


//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy');
})

app.listen(port, () => {
    console.log('Listening to port', port);
})