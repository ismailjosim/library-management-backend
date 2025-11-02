import { Router } from 'express'
import { BorrowController } from '../controllers/borrowController'

const router = Router()

router.post('/', BorrowController.createBorrowBook)
router.get('/', BorrowController.borrowedSummary)

export const BorrowRoutes = router
