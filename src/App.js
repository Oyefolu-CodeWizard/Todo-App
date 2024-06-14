import { useState, useEffect } from "react";
import iconCheck from "./images/icon-check.svg";
import iconCross from "./images/icon-cross.svg";
import iconMoon from "./images/icon-moon.svg";
import iconSun from "./images/icon-sun.svg";
import "./index.css";

const initialTodoTask = [
  {
    id: 1,
    task: "Completed online JavaScript course",
    completed: false,
  },
  {
    id: 2,
    task: "Jog around the park 3x",
    completed: false,
  },
  {
    id: 3,
    task: "10 minutes meditation",
    completed: false,
  },
  {
    id: 4,
    task: "Read for 1 hour",
    completed: false,
  },
  {
    id: 5,
    task: "Pick up groceries",
    completed: false,
  },
  {
    id: 6,
    task: "Complete Todo App on Frontend Mentor",
    completed: false,
  },
];

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

function TodoList() {
  const [todos, setTodos] = useState(initialTodoTask);
  const [task, setTask] = useState("");

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
          onDeleteTask={handleDeleteTask}
          onCompletedTask={handleCompletedTask}
        />
      )}
      {todos.length > 0 && <ReOrderTodos />}
    </div>
  );
}

function Nav() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : false;
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  const handleSwitchTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.documentElement.setAttribute(
      "data-theme",
      newTheme ? "dark" : "light"
    );
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <div className="nav">
      <h1>TODO</h1>
      <img
        src={isDarkMode ? iconSun : iconMoon}
        alt={isDarkMode ? "moon" : "sun"}
        onClick={handleSwitchTheme}
      />
    </div>
  );
}

function TodoInput({ task, setTask, onAddTask }) {
  function handleSubmitTask(e) {
    e.preventDefault();

    if (!task) return;

    const newTodoTask = {
      id: crypto.randomUUID(),
      task,
      completed: false,
    };

    onAddTask(newTodoTask);

    setTask("");
  }

  return (
    <form className="todo-input" onSubmit={handleSubmitTask}>
      <span className="circle"></span>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Create a new todo..."
      />
    </form>
  );
}

function Todos({ todos, onDeleteTask, onCompletedTask }) {
  return (
    <div className="todos">
      <TodoItems
        todos={todos}
        onDeleteTask={onDeleteTask}
        onCompletedTask={onCompletedTask}
      />
      <TodoFooter />
    </div>
  );
}

function TodoItems({ todos, onDeleteTask, onCompletedTask }) {
  return (
    <div className="todo-items">
      <ul>
        {todos.map((task) => (
          <Items
            task={task}
            key={task.id}
            onDeleteTask={onDeleteTask}
            onCompletedTask={onCompletedTask}
          />
        ))}
      </ul>
    </div>
  );
}

function Items({ task, onDeleteTask, onCompletedTask }) {
  return (
    <li>
      <div className="todo-text">
        <span
          className={task.completed ? "circle checked" : "circle"}
          onClick={() => onCompletedTask(task.id)}
        >
          <img
            src={iconCheck}
            alt="iconCheck"
            style={task.completed ? { display: "block" } : { display: "none" }}
          />
        </span>
        <p className={task.completed ? "completed" : ""}>{task.task}</p>
      </div>
      <div className="icon-cross">
        <img
          src={iconCross}
          alt="Times"
          className="times"
          onClick={() => onDeleteTask(task.id)}
        />
      </div>
    </li>
  );
}

function TodoFooter() {
  return (
    <footer>
      <p>X items left</p>
      <div>
        <p className="all">All</p>
        <p>Active</p>
        <p>Completed</p>
      </div>

      <p>Clear Completed</p>
    </footer>
  );
}

function ReOrderTodos() {
  return <div className="reorder-list">Drag and drop to reorder list</div>;
}

export default App;
