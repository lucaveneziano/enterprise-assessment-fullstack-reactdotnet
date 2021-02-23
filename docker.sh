#! /bin/bash
# This file exposes the following functions:
# start-server
# kill-server
# start-ui
# kill-ui

start-server () {
  DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

    docker build -t server $DIR/server

    docker run \
      -it \
      --rm \
      -v $DIR/server:/app \
      -p 5000:5000 \
      --name blogmodo-server \
      server
}

kill-server () {
    docker kill blogmodo-server
}

start-ui () {
  DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

  docker build -t blogmodo:ui $DIR/ui

  docker run \
    -it \
    --rm \
    -v ${DIR}/ui:/app \
    -v /app/node_modules \
    -p 3000:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    --name blogmodo-ui \
    blogmodo:ui

}

kill-ui () {
  docker kill blogmodo-ui
}

start-db () {
  DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

  docker build -t mysql $DIR/database

  docker run \
    -p 5001:3306 \
    --detach \
    --rm \
    --name blogmodo-db \
    mysql

  # docker exec -it blogmodo-db mysql -u root -h 127.0.0.1
  docker exec -it blogmodo-db /bin/bash
}

kill-db () {
  docker kill blogmodo-db
}

# Check if the function exists (bash specific)
if declare -f "$1" > /dev/null
then
  # call arguments verbatim
  "$@"
else
  # Show a helpful error
  echo "'$1' is not a known function name" >&2
  exit 1
fi