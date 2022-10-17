import React from "react";
import Item from "./Components/item";
import "./App.css";

function App() {
  const [ToDoItem, addToDoItem] = React.useState("");
  const [ToDoList, addToDoList] = React.useState([]);
  function HandleSubmit(event) {
    event.preventDefault();
    if (addToDoItem) {
      addToDoList([...ToDoList, ToDoItem]); //imp
      addToDoItem("");
    }
  }
  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          placeholder="Enter To Do list Item"
          onChange={(e) => addToDoItem(e.target.value)}
          name="ToDoItem"
          value={ToDoItem}
        />
        <button>Submit</button>
      </form>
      <div>
        {ToDoList.map((i) => (
          <Item key={i} value={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
