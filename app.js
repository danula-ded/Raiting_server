// app.js

const fs = require("fs");
const { readFile } = require("./files/read-file");

readFile();

const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
      if (req.method === "GET") {
        res.statusCode = 200;
        res.end("Спасибо за запрос, скоро придумаю, что тебе ответить");
      }
      break;
    case "/game":
      // Если метод отличается от GET, возвращаем сообщение с ошибкой
      if (req.method === "GET") {
        res.statusCode = 200;
        res.end("Спасибо за запрос, скоро придумаю, что тебе ответить");
      }
      break;
    case "/vote":
      if (req.method === "POST") {
        res.statusCode = 200;
        res.end("Спасибо за запрос, скоро придумаю, что тебе ответить");
      }
      break;
    default:
      res.statusCode = 404;
      res.end("Not Found");
  }
});

server.listen(3000);
