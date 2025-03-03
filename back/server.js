import express from 'express';
import cors from 'cors';
import { Transaction } from './models.js';
import sequelize from './db.js';
import transactionRoutes from './routes/transactionRoutes.js';

const PORT = 5000;
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.json({
		meassge: 'Hello world',
	});
});

app.use('/transactions', transactionRoutes);

const start = async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync();
		app.listen(PORT, () => {
			console.log('Server has been starting on ' + PORT);
		});
	} catch (e) {
		console.log(e);
	}
};

start();
