const router = require("express").Router();
const axios = require('axios'); 
const booksController = require('../../controllers/booksController')

router.route('/')
  .get(booksController.findAllSaved)
  .post(booksController.saveBook)

  router.route('/:id')
  .delete(booksController.deleteBook)

module.exports = router;