const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = 3000;
const STATUS_CREATED = 201;
const STATUS_NO_CONTENT = 204;
const STATUS_NOT_FOUND = 404;

const app = express();

let todos = [
  { id: 1, text: " Learn Javascript", done: true },
  { id: 2, text: "Seek for a job", done: false },
  { id: 3, text: "forget everything", done: false }
];

app.get("/todos", (request, response) => {
  response.json(todos);
});
//GET http://localhost:3000/todos/2
app.get("/todos/:id", (request, response) => {
  let id = +request.params.id;
  let index = findIndex(id);
  const todo = todos[index];
  if (index === -1) {
    response.status(STATUS_NOT_FOUND).send("Todo Not Found");
  }

  response.json(todo);
});

function findIndex(id) {
  return todos.findIndex(todo => todo.id === id);
}

app.listen(PORT, () => console.log(`server up and running on port ${PORT}`));
