export default function TodoFooter({ todos, setTodos, setFilteredTodos, numTaskLeft }) {
  const orderNumTaskLeft = numTaskLeft > 1 ? "items" : "item";

  function handleAllTask() {
    setFilteredTodos(todos);
  }

  function handleActiveTask() {
    const activeTodos = todos?.slice().filter((todo) => !todo.completed);
    setFilteredTodos(activeTodos);
  }

  function filterCompletedTask() {
    const completedTodos = todos?.slice().filter((todo) => todo.completed);
    setFilteredTodos(completedTodos);
  }

  function handleClearCompletedTask() {
    const completedTask = todos?.slice().filter((todo) => !todo.completed);
    setFilteredTodos(completedTask);
    setTodos(todos?.slice().filter((todo) => !todo.completed));
  }

  return (
    <footer>
      <p>
        {numTaskLeft} {orderNumTaskLeft} left
      </p>
      <div className="below">
        <p className="all" onClick={handleAllTask}>
          All
        </p>
        <p className="active" onClick={handleActiveTask}>
          Active
        </p>
        <p onClick={filterCompletedTask}>Completed</p>
      </div>

      <p onClick={handleClearCompletedTask}>Clear Completed</p>
    </footer>
  );
}
