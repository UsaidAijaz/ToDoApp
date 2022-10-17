import React from "react";
import Item from "./Components/item";
import "./App.css";

function App() {
  const [ToDoItem, addToDoItem] = React.useState("");
  const [ToDoList, addToDoList] = React.useState([]);
  const [hide, triggerHide] = React.useState(0);
  function HandleSubmit(event) {
    event.preventDefault();
    if (addToDoItem) {
      addToDoList([...ToDoList, ToDoItem]); //imp
      addToDoItem("");
    }
  }
  return (
    <div className="MainApp">
      <h1>THINGS TO DO</h1>
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          placeholder="Enter To Do list Item"
          onChange={(e) => addToDoItem(e.target.value)}
          name="ToDoItem"
          value={ToDoItem}
        />
        <button className="Hide"></button>
      </form>
      <div>
        {ToDoList.map((i, index) => (
          <Item key={index} value={i} hide={hide} />
        ))}
      </div>
      <button
        className="button bottom-button"
        onClick={() => {
          triggerHide((p) => !p);
        }}
      >
        {hide ? "Show All" : "Show Pending"}
      </button>
    </div>
  );
}

export default App;
