#!/bin/bash
PORT=3001
IP=$(hostname -I | awk '{print $1}')
echo "Фронт доступен по адресу: http://$IP:$PORT"

# Минимальный фронт через Node (можно использовать serve или любой http-сервер)
# Для простоты создаём временный index.html
mkdir -p /app/public
cat <<EOT >/app/public/index.html
<!DOCTYPE html>
<html>
<head>
  <title>Cars Frontend</title>
</head>
<body>
  <h1>Cars API Frontend</h1>
  <p>Здесь можно взаимодействовать с API через curl или формы (по желанию расширить)</p>
</body>
</html>
EOT

# Поднимаем простой сервер на Node
npx serve /app/public -l $PORT
