const express = require("express")
const {getAllMovies, addNewMovies, updateMovies, deleteMovies} = require('../controller/moviesController')
const router = express.Router()
const upload = require('../helper/multer')

router.get('/', getAllMovies)
router.post('/', upload.single('cover'), addNewMovies)
router.patch('/:id', updateMovies)
router.delete('/:id', deleteMovies)




module.exports = router