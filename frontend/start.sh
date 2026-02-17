#!/bin/bash
PORT=3001
IP=$(hostname -I | awk '{print $1}')
echo "Фронт доступен по адресу: http://$IP:$PORT"
npm run dev -- --port $PORT --host
