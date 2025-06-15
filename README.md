# World Class Test JSON API

JSON-сервер для предоставления API на основе JSON-данных. Развернут на Render.

## API Endpoints

- `GET /api/test-cases` - получение всех тестовых случаев
- `GET /api/settings` - получение настроек

## Локальный запуск

```bash
# Установка зависимостей
npm install

# Запуск сервера
npm start
```

Сервер будет доступен по адресу: `http://localhost:7878/api`

## Технологии

- Node.js
- Express
- JSON Server
- CORS

## Структура проекта

```
.
├── server.js          # Основной файл сервера
├── package.json       # Зависимости и скрипты
├── world_class_test.json  # JSON данные
└── README.md         # Документация
``` 