const db = require('../models');

module.exports = {
    findAllSaved: (req, res) => {
        db.Book
            .find({}).then(bookData => res.json(bookData))
    },
    saveBook: (req, res) => {
        db.Book
    },
    deleteBook: (req, res) => {
        db.Book
            .remove({Book:id}).then(bookData => res.json(bookData))
    }
}