#!/bin/sh
PORT=3001
echo "Фронт доступен по адресу: http://<IP_СЕРВЕРА>:$PORT"

# Поднимаем фронт на всех интерфейсах
npx serve ./public -l $PORT --listen 0.0.0.0
