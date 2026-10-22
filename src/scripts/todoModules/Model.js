import { LS_DATA_KEY } from "../constants.js";

function Model(defaultData = [], dataKey = LS_DATA_KEY) {
  let todos = [];

  function saveData() {
    localStorage.setItem(dataKey, JSON.stringify(todos));
  }

  function getData() {
    const savedData = localStorage.getItem(dataKey);

    if (savedData === null) {
      todos = defaultData;
      saveData();
    } else {
      todos = JSON.parse(savedData);
    }

    return todos;
  }

  function getTodoById(id) {
    return todos.find((todo) => todo.id === id);
  }

  function addTodo(title, description) {
    const today = new Date().toLocaleDateString("en-CA");

    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      completed: false,
      createdAt: today,
      updatedAt: today,
    };

    todos.push(newTodo);
    saveData();

    return newTodo;
  }

  function updateTodoById(id, title, description) {
    const todo = getTodoById(id);

    if (!todo) {
      return;
    }

    todo.title = title.trim();
    todo.description = description.trim();
    todo.updatedAt = new Date().toLocaleDateString("en-CA");

    saveData();

    return todo;
  }

  function toggleTodoById(id) {
    const todo = getTodoById(id);

    if (!todo) {
      return;
    }

    todo.completed = !todo.completed;
    todo.updatedAt = new Date().toLocaleDateString("en-CA");

    saveData();

    return todo;
  }

  function removeTodoById(id) {
    todos = todos.filter((todo) => todo.id !== id);
    saveData();
  }

  function searchTodos(query) {
    const searchQuery = query.trim().toLowerCase();

    return todos.filter((todo) => {
      return todo.title.toLowerCase().includes(searchQuery);
    });
  }

  function filterTodos(status = "all") {
    if (status === "active") {
      return todos.filter((todo) => !todo.completed);
    }

    if (status === "completed") {
      return todos.filter((todo) => todo.completed);
    }

    return [...todos];
  }

  return {
    getData,
    getTodoById,
    addTodo,
    updateTodoById,
    toggleTodoById,
    removeTodoById,
    searchTodos,
    filterTodos,
  };
}

export default Model;
