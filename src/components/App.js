import "./index.css";
import TodoList from "./TodoList";

export const initialTodoTask = [
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

export default App;
