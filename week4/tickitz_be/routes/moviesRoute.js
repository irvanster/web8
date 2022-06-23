const express = require("express")
const {getAllMovies, addNewMovies, updateMovies, deleteMovies} = require('../controller/moviesController')
const router = express.Router()

router.get('/', getAllMovies)
router.post('/', addNewMovies)
router.patch('/:id', updateMovies)
router.delete('/:id', deleteMovies)




module.exports = router