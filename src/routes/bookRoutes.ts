import { Router } from 'express'
import { BookController } from '../controllers/bookController'

const router = Router()

router.post('/', BookController.createBook)
router.get('/', BookController.getAllBooks)
router.get('/:id', BookController.getSingleBookByID)
router.patch('/:id', BookController.updateBookByID)
router.delete('/:id', BookController.deleteBookByID)

export const BookRoutes = router
