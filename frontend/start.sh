#!/bin/sh
PORT=3001
echo "Фронт доступен по адресу: http://<IP_СЕРВЕРА>:$PORT"

# создаём временный frontend
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

# Поднимаем сервер на всех интерфейсах (0.0.0.0)
npx serve /app/public -l $PORT --listen 0.0.0.0
