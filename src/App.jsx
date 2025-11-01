import { useState } from "react";
import "./App.css"; 

function App() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleSaveItem = () => {
    if (value.trim() === "") {
      alert("value must not be empty");
    } else {
      const newItem = { text: value, checked: false };
      setItems([...items, newItem]);
      setValue("");
    }
  };

  const handleToggleCheck = (indexToToggle) => {
    const updatedItems = items.map((item, index) => {
      if (index === indexToToggle) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const handleDeleteItem = (indexToDelete) => {
    const filteredItems = items.filter((_, index) => index !== indexToDelete);
    setItems(filteredItems);
  };

  return (
    <div className="main-container">
      <h2 className="text">✨ To-Do List ✨</h2>

      
      <div className="input-container">
        <input
          type="text"
          placeholder="enter text"
          value={value}
          onChange={handleInputChange}
        />
        <button className="save" onClick={handleSaveItem}>
          save
        </button>
      </div>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleToggleCheck(index)}
              />
              <span className={item.checked ? "checked" : ""}>{item.text}</span>
            </label>
            <button onClick={() => handleDeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
