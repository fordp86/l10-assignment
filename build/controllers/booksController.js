"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.getBook = exports.createBooks = exports.getAllBooks = void 0;
const books_1 = require("../models/books");
const getAllBooks = async (req, res, next) => {
    let books = await books_1.Books.findAll();
    res.status(200).json(books);
};
exports.getAllBooks = getAllBooks;
const createBooks = async (req, res, next) => {
    let newBook = req.body;
    if (newBook.title && newBook.description) {
        let created = await books_1.Books.create(newBook);
        res.status(201).json(created);
    }
    else {
        res.status(400).send();
    }
};
exports.createBooks = createBooks;
const getBook = async (req, res, next) => {
    let bookId = req.params.bookId;
    let bookFound = await books_1.Books.findByPk(bookId);
    if (bookFound) {
        res.status(200).json(bookFound);
    }
    else {
        res.status(404).json();
    }
};
exports.getBook = getBook;
const updateBook = async (req, res, next) => {
    let bookId = req.params.bookId;
    let newBook = req.body;
    let bookFound = await books_1.Books.findByPk(bookId);
    if (bookFound && bookFound.bookId == newBook.bookId
        && newBook.title && newBook.description) {
        await books_1.Books.update(newBook, {
            where: { bookId: bookId }
        });
        res.status(200).json();
    }
    else {
        res.status(400).json();
    }
};
exports.updateBook = updateBook;
const deleteBook = async (req, res, next) => {
    let bookId = req.params.bookId;
    let bookFound = await books_1.Books.findByPk(bookId);
    if (bookFound) {
        await books_1.Books.destroy({
            where: { bookId: bookId }
        });
        res.status(200).json();
    }
    else {
        res.status(404).json();
    }
};
exports.deleteBook = deleteBook;
