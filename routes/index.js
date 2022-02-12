const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

const Movies = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) =>{
    Movies.find()
    .then((movies)=>{
        res.render("movies", {movies})
    })
})

router.get('/movies/:id/movie', (req, res)=>{
    const id = req.params.id
    Movies.findById(id)
    .then(movie=>{
        res.render("movie", movie)
    })
})

module.exports = router;
