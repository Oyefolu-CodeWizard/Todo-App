import Items from "./Items";

export default function TodoItems({ filteredTodos, onDeleteTask, onCompletedTask }) {
  return (
    <div className="todo-items">
      <ul>
        {filteredTodos.map((task) => (
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
