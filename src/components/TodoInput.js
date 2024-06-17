export default function TodoInput({ task, setTask, onAddTask }) {
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
