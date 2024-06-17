import iconCheck from "./images/icon-check.svg";
import iconCross from "./images/icon-cross.svg";

export default function Items({ task, onDeleteTask, onCompletedTask }) {
  return (
    <li>
      <div className="todo-text">
        <span
          className={task.completed ? "circle checked" : "circle"}
          onClick={() => onCompletedTask(task.id)}
        >
          <img
            src={iconCheck}
            alt="check"
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
