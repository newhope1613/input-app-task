import { Transaction } from '../models.js';

//Получаем данные при обнавлений
export const getTransactions = async (req, res) => {
	try {
		const items = await Transaction.findAll({
			order: [['datetime', 'DESC']],
		});
		res.status(200).json({
			success: true,
			transactions: items,
			count: items.length,
		});
	} catch (error) {
		console.error('Ошибка при получении данных:', error);
		res.status(500).json({ message: 'Ошибка при получении данных' });
	}
};

// Создание новой транзакции
export const createTransaction = async (req, res) => {
	try {
		const { author, sum, category, comment } = req.body;

		if (!author || !sum || !category) {
			return res.status(400).json({
				message: 'Заполните обязательные поля: author, sum, category',
			});
		}

		const item = {
			datetime: new Date(),
			author,
			sum,
			category,
			comment: comment || '',
		};
		const transaction = await Transaction.create(item);

		res.status(201).json({
			success: true,
			transaction,
		});
	} catch (error) {
		console.error('Ошибка при создании транзакции:', error);
		res.status(500).json({ message: 'Ошибка сервера' });
	}
};

// Удаление транзакции
export const deleteTransaction = async (req, res) => {
	try {
		const { id } = req.params;
		const transaction = await Transaction.findByPk(id);

		if (!transaction) {
			return res.status(404).json({ message: 'Транзакция не найдена' });
		}

		await transaction.destroy();
		res
			.status(200)
			.json({ success: true, message: 'Транзакция успешно удалена', id });
	} catch (error) {
		console.error('Ошибка при удалении транзакции:', error);
		res.status(500).json({ message: 'Ошибка сервера' });
	}
};
