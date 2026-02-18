#!/bin/sh
PORT=3001

echo "Фронт доступен по адресу: http://localhost:$PORT"

# Поднимаем фронт на всех интерфейсах контейнера
npx serve ./public --listen "0.0.0.0:$PORT"
