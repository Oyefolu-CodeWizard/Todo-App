import TodoFooter from "./TodoFooter";
import TodoItems from "./TodoItems";

export default function Todos({
  todos,
  setTodos,
  onDeleteTask,
  onCompletedTask,
  filteredTodos,
  setFilteredTodos,
  numTaskLeft,
}) {
  return (
    <div className="todos">
      <TodoItems
        todos={todos}
        onDeleteTask={onDeleteTask}
        onCompletedTask={onCompletedTask}
        filteredTodos={filteredTodos}
      />
      <TodoFooter
        todos={todos}
        setTodos={setTodos}
        setFilteredTodos={setFilteredTodos}
        numTaskLeft={numTaskLeft}
      />
    </div>
  );
}
