const express = require("express")
const { verify } = require("jsonwebtoken")
const {getAllMovies, addNewMovies, updateMovies, deleteMovies} = require('../controller/moviesController')
const router = express.Router()
const upload = require('../helper/multer')
const verifyAuth = require("../helper/verifyAuth")

router.get('/', getAllMovies)
router.post('/', verifyAuth, upload.single('cover'), addNewMovies)
router.patch('/:id',verifyAuth, updateMovies)
router.delete('/:id',verifyAuth, deleteMovies)




module.exports = router