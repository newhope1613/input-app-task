import express from 'express';
import {
	getTransactions,
	createTransaction,
	deleteTransaction,
} from '../controller/controller.js';

const router = express.Router();

router.get('/', getTransactions);
router.post('/', createTransaction);
router.delete('/:id', deleteTransaction);

export default router;
