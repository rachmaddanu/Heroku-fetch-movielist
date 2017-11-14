const axios = require('axios')
const express = require('express');
const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=4b4a1310f1f32db76ad377720216c66e&language=en-US&page=1';
const app = express();

app.get('/', (req, res) => {
    console.log('req coming to homepage')
    res.send('halo');
});

app.get('/tmdb', (req, res) => {
    axios.get(url)
    .then((response) => {
        const alldata= [];
        // res.send(response.data.results.map((data) => {data.title}))
        response.data.results.map((data, index) => {
            const obj= {
                id: data.id,
                title: data.title,
                poster: data.poster_path,
                backdrop: data.backdrop_path,
                overview: data.overview,
                release: data.release_date
            }
            alldata.push(obj)   
        });
        res.send(alldata);
    });
})

const port = process.env.PORT || 3000; //untuk debugging pake 3000

app.listen(port, () => {
    console.log('app is running');
}); //port, callback