//
// * Add Item

// AddItemForm component is responsible for adding new items.

//
//

import React, { useState } from "react";

function AddItemForm({ addItem }) {
  const [newItemName, setNewItemName] = useState("");

  const handleInputChange = (event) => {
    setNewItemName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem(newItemName);
    setNewItemName("");
  };

  return (
    <div>
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newItemName} onChange={handleInputChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddItemForm;
