## Шаги для запуска

1. Стянуть репозиторий:

git clone https://github.com/beshkarevalexey/cars-api-test.git

2. Перейти в репозиторий:

```bash
cd ~/cars-api-test

2. Собрать проект и поднять контейнеры:

```bash
docker compose up -d --build

3. Проверить доступность сервисов:

API healthcheck: http://localhost:3000/health
Фронт: http://localhost:3001

4. Протестировать API - ручку создания авто:

# Создание автомобиля
curl -X POST http://localhost:3000/api/cars \
  -H "Content-Type: application/json" \
  -d '{"brand":"BMW","model":"X5","year":2022,"color":"black","price":50000}'

================== INFO ==================

Другие имеющиеся методы:

# Healthcheck:
curl http://localhost:3000/health

# Получение всех автомобилей:
curl http://localhost:3000/api/cars

# Получение автомобиля по id:
curl http://localhost:3000/api/cars/1

# Удаление автомобиля по id:
curl -X DELETE http://localhost:3000/api/cars/1

