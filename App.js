import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState("");
  let [arr, setArr] = useState([]);
  function change(event) {
    setList(event.target.value);
  }
  function addItem() {
    if (list === "") {
      alert("ENTER YOUR ITEM: ");
      return;
    }
    setArr((preValue) => {
      return [...preValue, list];
    });
    document.getElementById("tex").value = "";
    setList("");
  }
  function deleteItem(event) {
    let id = event.target.id;
    setArr((preValue) => {
      const arr = [...preValue];
      arr.splice(id, 1);
      return arr;
    });
  }
  function editItem(event) {
    const index = event.target.id;
    setArr((preValue) => {
      const z = prompt("EDIT YOUR ITEM: ");
      const arr = [...preValue];
      arr[index] = z;
      return arr;
    });
  }
  return (
    <>
      <div className="main">
        <div className="app">
          <h1>To Do List</h1>
          <br />
          <input
            id="tex"
            type="text"
            placeholder="✍ Type here...."
            onChange={change}
          />
          <i className="fa fa-plus" onClick={addItem} title="Add Item"></i>
          <br />
          <ol>
            {arr.map((el, ind) => {
              return (
                <li key={ind}>
                  <i
                    id={ind}
                    onClick={deleteItem}
                    className="fa fa-trash"
                    title="Delete Item"
                  ></i>
                  &nbsp;
                  <i
                    id={ind}
                    onClick={editItem}
                    className="fa fa-edit"
                    title="Edit Item"
                  ></i>
                  &nbsp;&nbsp;&nbsp;&nbsp;{el}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
