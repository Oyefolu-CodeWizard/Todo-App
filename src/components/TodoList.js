import { useState, useEffect } from "react";
import { initialTodoTask } from "./App";
import ReOrderTodos from "./ReOrderTodos";
import Todos from "./Todos";
import TodoInput from "./TodoInput";
import Nav from "./Nav";

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodoTask);
  const [filteredTodos, setFilteredTodos] = useState(initialTodoTask);
  const [task, setTask] = useState("");

  const numTaskLeft = filteredTodos.filter((todo) => !todo.completed).length;

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  function handleAddTask(todo) {
    setTodos((todos) => [...todos, todo]);
  }

  function handleDeleteTask(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  function handleCompletedTask(id) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <div className="todo-list">
      <Nav />
      <TodoInput task={task} setTask={setTask} onAddTask={handleAddTask} />
      {todos.length > 0 && (
        <Todos
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
          setFilteredTodos={setFilteredTodos}
          onDeleteTask={handleDeleteTask}
          onCompletedTask={handleCompletedTask}
          numTaskLeft={numTaskLeft}
        />
      )}
      {todos.length > 0 && <ReOrderTodos />}
    </div>
  );
}
