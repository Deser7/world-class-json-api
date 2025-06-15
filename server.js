const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('world_class_test.json');
const middlewares = jsonServer.defaults();
const cors = require('cors');

// Настройка CORS
server.use(cors());

// Используем middleware по умолчанию
server.use(middlewares);

// Используем роутер
server.use(router);

// Запускаем сервер
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server запущен на порту ${PORT}`);
}); 