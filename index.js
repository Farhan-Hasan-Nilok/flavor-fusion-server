const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
app.use(cors());

const chefsData = require('./data/chefs.json');
const reviews = require('./data/reviews.json');

app.get('/', (req, res) => {
    res.send('Server is online !!');
});

app.get('/reviews', (req, res) => {
    res.send(reviews);
});

app.get('/chefs', (req, res) => {
    res.send(chefsData);
})
app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const chef = chefsData.find(c => c.id === id);
    res.send(chef);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})