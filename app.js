const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('req coming to homepage')
    res.send('halo');
});

app.get('/user', (req, res) => {
    console.log('req coming to user')
    res.send([{
        'id' : 1,
        'name' : 'danu'
    }]);
});

const port = process.env.PORT || 3000; //untuk debugging pake 3000

app.listen(port, () => {
    console.log('app is running');
}); //port, callback