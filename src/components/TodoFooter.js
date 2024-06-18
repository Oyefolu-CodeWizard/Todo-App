import { click } from "@testing-library/user-event/dist/click";

export default function TodoFooter({
  todos,
  setTodos,
  setFilteredTodos,
  numTaskLeft,
}) {
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

  function handleChangedColor(e) {
    const clicked = e.target.closest(".change");

    if (!clicked) return;

    const all = document.querySelectorAll(".change");
    all.forEach((c) => c.classList.remove("change--active"));

    clicked.classList.add("change--active");
  }

  return (
    <footer>
      <p>
        {numTaskLeft} {orderNumTaskLeft} left
      </p>
      <div className="below" onClick={handleChangedColor}>
        <p className="all change--active change" onClick={handleAllTask}>
          All
        </p>
        <p className="active change" onClick={handleActiveTask}>
          Active
        </p>
        <p className="change" onClick={filterCompletedTask}>
          Completed
        </p>
      </div>

      <p onClick={handleClearCompletedTask}>Clear Completed</p>
    </footer>
  );
}
