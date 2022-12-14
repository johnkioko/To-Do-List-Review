/* eslint-disable*/
import displayTodo from "./render.js";
import { todosArr, updateLocalStorage } from "../index.js";

function updateIndex() {
  let i = 0;
  todosArr.forEach((element) => {
    element.index = i;
    i += 1;
  });
}

export default function clearCompletedTodo(todosArr) {
  todosArr = todosArr.filter((todo) => todo.completed === false);

  displayTodo();
  updateIndex();
  window.location.reload(updateLocalStorage());
}
