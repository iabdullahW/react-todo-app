import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(-1); // State to track the index of the item being edited

  const handleSubmit = (event) => {
    setTodo(event.target.value);
  };

  const newTask = () => {
    setList([...list, todo]);
    setTodo(""); // Clear input after adding task
  };

  const handleDelete = (index) => {
    setList(list.filter((item, i) => index !== i));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setTodo(list[index]); // Set input value to the value of the item being edited
  };

  const handleEditChange = (event) => {
    setTodo(event.target.value);
  };

  const handleEditSave = (index) => {
    const newList = [...list];
    newList[index] = todo; // Update the item in the list with new value
    setList(newList);
    setEditIndex(-1); // Reset edit index after saving
    setTodo(""); // Clear input after saving
  };

  return (
    <div className="app-container">
      <h1 className="app-heading">Todo List App</h1>
      <div className="input-container">
        <input type="text" value={todo} onChange={handleSubmit} placeholder="Add a new task" />
        <button onClick={newTask}>Add</button>
      </div>
      <div className="list-container">
        {list.map((name, index) => {
          return (
            <div key={index} className="todo-item">
              {editIndex === index ? (
                <>
                  <input type="text" value={todo} onChange={handleEditChange} />
                  <button className="save-btn" onClick={() => handleEditSave(index)}>Save</button>
                </>
              ) : (
                <>
                  <p>{name}</p>
                  <div>
                    <button className="edit-btn" onClick={() => handleEdit(index)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
