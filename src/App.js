const todoTask = [
  {
    checked: false,
    task: "Completed online JavaScript course",
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
  return (
    <div className="todo-list">
      <Nav />
      <TodoInput />
      <Todos />
      <ReOrderTodos />
    </div>
  );
}

function Nav() {
  return (
    <div className="nav">
      <h1>TODO</h1>
      <img src="./images/icon-moon.svg" alt="moon" />
    </div>
  );
}

function TodoInput() {
  return (
    <div className="todo-input">
      <span className="circle"></span>
      <input type="text" placeholder="Create a new todo..." />
    </div>
  );
}

function Todos() {
  return (
    <div className="todos">
      <TodoItems />
      <TodoItems />
      <TodoItems />
      <TodoItems />
      <TodoItems />
      <TodoItems />
      <TodoFooter />
    </div>
  );
}

function TodoItems() {
  return (
    <div className="todo-items">
      <ul>
        <li>
          <div className="todo-text">
            <span className="circle"></span>
            <p>Complete online JavaScript course</p>
          </div>
          <img src="./images/icon-cross.svg" alt="Times" />
        </li>
      </ul>
    </div>
  );
}

function TodoFooter() {
  return (
    <footer>
      <p>X items left</p>
      <div>
        <p>All</p>
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
// function Todo() {
//   return (
//     <>
//       <Nav />
//       <div className="">
//         <input type="text" className="" placeholder="Currently typing" />
//         <ul className="">
//           <li className="">
//             <span>Complete online JavaScript course</span>
//             <button className="">X</button>
//           </li>
//           <li className="">
//             <span>Jog around the park 3x</span>
//             <button className="">X</button>
//           </li>
//           <li className="">
//             <span>10 minutes meditation</span>
//             <button className="">X</button>
//           </li>
//           <li className="">
//             <span>Read for 1 hour</span>
//             <button className="">X</button>
//           </li>
//           <li className="">
//             <span>Pick up groceries</span>
//             <button className="">X</button>
//           </li>
//           <li className="">
//             <span>Complete Todo App on Frontend Mentor</span>
//             <button className="">X</button>
//           </li>
//         </ul>
//         <footer className="">
//           <span>5 items left</span>
//           <button>All</button>
//           <button>Active</button>
//           <button>Completed</button>
//           <button>Clear Completed</button>
//         </footer>
//       </div>
//     </>
//   );
// }

export default App;
