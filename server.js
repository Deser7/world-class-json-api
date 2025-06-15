const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('world_class_test.json');
const middlewares = jsonServer.defaults();
const cors = require('cors');

// Настройка middleware
server.use(cors());
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Кастомные маршруты
server.get('/api/test-cases', (req, res) => {
  const data = router.db.get('test_cases').value();
  res.json(data);
});

server.get('/api/questions', (req, res) => {
  const data = router.db.get('questions').value();
  res.json(data);
});

server.get('/api/questions/:category', (req, res) => {
  const category = req.params.category;
  const data = router.db.get(`questions.${category}`).value();
  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ error: 'Category not found' });
  }
});

server.get('/api/settings', (req, res) => {
  const data = router.db.get('settings').value();
  res.json(data);
});

// Использование роутера
server.use('/api', router);

// Запуск сервера
const PORT = process.env.PORT || 7878;
server.listen(PORT, () => {
  console.log(`JSON Server запущен на порту ${PORT}`);
  console.log(`API доступно по адресу: http://localhost:${PORT}/api`);
}); 