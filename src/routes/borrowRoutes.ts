import { Router } from 'express'
import { BorrowController } from '../controllers/borrowController'

const router = Router()

router.post('/', BorrowController.createBorrowBook)

export const BorrowRoutes = router
