const express = require('express');
const path = require('path');

const app = express();
const PORT = 4600;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//variable arrays
const reservations = [
];

const waitlist = [
];

//routes
app.get('/', (req, res) => {
    res.send('Welcome to Hot Restaurant!');
});

app.get('/reservations', (req, res) => {
    res.json(reservations)
});

app.get('/waitlist', (req, res) => {
    res.json(waitlist)
});

//add reservations
app.post('/reservations', (req, res) => {
    const newRes = req.body;

    newRes.routeName = newRes.routeName.replace(/\s+/g, '');
    console.log(newRes);

    if (reservations.length < 5) {
        reservations.push(newRes);
        res.json(newRes);
    } else {
        waitlist.push(newRes);
        res.json(newRes);
    }
});

//listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
