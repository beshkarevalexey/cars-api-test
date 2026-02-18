#!/bin/sh
PORT=3001

echo "Frontend available at: http://0.0.0.0:$PORT"

# Serve on all interfaces in container
npx serve ./public --listen "0.0.0.0:$PORT"
