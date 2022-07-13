import { Router } from 'express';
import { createBooks, deleteBook, getAllBooks, getBook, updateBook } from '../controllers/booksController';

const router = Router();

router.get('/', getAllBooks);
router.post('/', createBooks);
router.get('/:bookId', getBook)
router.put('/:bookId', updateBook);
router.delete('/:bookId', deleteBook);

export default router;