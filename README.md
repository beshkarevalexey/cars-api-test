# Cars API Test

## Цель
Поднять тестовое API и фронт для работы с машинами.

## Шаги для кандидата

1. Перейти в репозиторий:
```bash
cd ~/cars-api-test

2. Собрать и поднять API и FRONT стенды:
```bash
docker compose up -d --build

3. Стенды поднимутся на:
API:
http://localhost:3000/health

UI:
http://localhost:3000

4. Проверить работу API:
curl http://localhost:3000/health
