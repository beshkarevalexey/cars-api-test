# Cars API Test

## Цель
Поднять тестовое API и фронт для работы с машинами.

## Шаги для кандидата

1. Перейти в репозиторий:
```bash
cd ~/cars-api-test

2. Собрать и поднять API и фронт:
docker compose up -d --build

3. Проверить работу API:
curl http://localhost:3000/health

4. Посмотреть логи фронт-стенда:
docker compose logs frontend
