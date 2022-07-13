import { RequestHandler } from "express";
import { Books } from "../models/books";

export const getAllBooks: RequestHandler = async (req, res, next) => {
    let books = await Books.findAll();
    res.status(200).json(books);
}

export const createBooks: RequestHandler = async (req, res, next) => {
    let newBook: Books = req.body;
    if (newBook.title && newBook.description) {
        let created = await Books.create(newBook);
        res.status(201).json(created);
    }
    else {
        res.status(400).send();
    }
}

export const getBook: RequestHandler = async (req, res, next) => {
    let bookId = req.params.bookId;
    let bookFound = await Books.findByPk(bookId);
    if (bookFound) {
        res.status(200).json(bookFound);
    }
    else {
        res.status(404).json();
    }
}

export const updateBook: RequestHandler = async (req, res, next) => {
    let bookId = req.params.bookId;
    let newBook: Books = req.body;
    
    let bookFound = await Books.findByPk(bookId);
    
    if (bookFound && bookFound.bookId == newBook.bookId
        && newBook.title && newBook.description) {
            await Books.update(newBook, {
                where: { bookId: bookId }
            });
            res.status(200).json();
    }
    else {
        res.status(400).json();
    }
}

export const deleteBook: RequestHandler = async (req, res, next) => {
    let bookId = req.params.bookId;
    let bookFound = await Books.findByPk(bookId);
    
    if (bookFound) {
        await Books.destroy({
                where: { bookId: bookId }
        });
        res.status(200).json();
    }
    else {
        res.status(404).json();
    }
}