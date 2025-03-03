Expense Tracker

Этот проект представляет собой простое приложение для учета расходов. Оно использует `React` на фронтенде и `Node.js` с `Express` и `PostgreSQL` на бэкенде.

Установка и запуск

1. Установка зависимостей

Клонируйте репозиторий и установите зависимости для фронтенда и бэкенда:


# Клонируем репозиторий
git clone https://github.com/newhope1613/input-app-task.git
cd input-app-task

# Устанавливаем зависимости бэкенда
cd back
npm install

# Устанавливаем зависимости фронтенда
cd ../front/my-app
npm install

### 2. Настройка базы данных

Создайте базу данных `expenses` в `PostgreSQL`:

```sql
CREATE DATABASE expenses;
```

Создайте таблицу `expense`:

sql
CREATE TABLE expense (
    id SERIAL PRIMARY KEY,
    author VARCHAR(255) NOT NULL,
    sum DECIMAL NOT NULL,
    category VARCHAR(255) NOT NULL,
    comment TEXT,
    datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


3. Настройка подключения к базе данных

В файле `back/db.js` (или `back/models.js`, если он там находится), настройте подключение к базе данных:

```js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('expenses', 'postgres', 'ВАШ_ПАРОЛЬ', {
	host: 'localhost',
	dialect: 'postgres',
	define: {
		timestamps: false,
	},
});

export default sequelize;
```

Замените `ВАШ_ПАРОЛЬ` на ваш пароль пользователя `postgres`.

4. Запуск бэкенда

Перейдите в папку `back` и запустите сервер:

```sh
cd back
npm start
```

Если всё настроено правильно, сервер запустится на `http://localhost:5000`.

5. Запуск фронтенда

Перейдите в папку `front/my-app` и запустите клиентское приложение:

```sh
cd ../front/my-app
npm run dev
```

Приложение будет доступно по адресу `http://localhost:5174`.
