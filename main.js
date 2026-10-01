const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`Get root route`);
});

router.get('/users', (req, res) => {
  res.send('Get users route');
});

router.post('/users', (req, res) => {
  res.send('Post users route');
});

// Визначення маршруту з параметром
router.get('/users/:userId', (req, res) => {
  res.send(`Get user by Id route: ${req.params.userId}`);
});
// Створення маршрутного обробника для різних типів запитів

router.put('/users/:userId', (req, res) => {
  res.send(`Put user by Id route: ${req.params.userId}`);
});

router.delete('/users/:userId', (req, res) => {
  res.send(`Delete user by Id route:  ${req.params.userId}`);
});

router.get('/articles', (req, res) => {
  res.send(`Get articles route`);
});
router.post('/articles', (req, res) => {
  res.send(`Post articles route`);
});
router.get('/articles/:articleId', (req, res) => {
  res.send(`Get article by Id route: ${req.params.articleId}`);
});
router.put('/articles/:articleId', (req, res) => {
  res.send(`Put article by Id route:  ${req.params.articleId}`);
});
router.delete('/articles/:articleId', (req, res) => {
  res.send(`Delete article by Id route: ${req.params.articleId}`);
});
// Використання роутера
app.use('/', router);

// Запускаємо сервер
app.listen(port, () => {
  console.log(`Сервер запущено за адресою <http://localhost>:${port}`);
});