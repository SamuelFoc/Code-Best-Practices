//
// !BAD EXAMPLE

// BadExample component is responsible for both rendering the list of items
// and handling the addition of new items, violating the SRP. This approach
// leads to a more complex and less maintainable component, as it accumulates
// multiple responsibilities in a single place.

//
//

import React, { useState } from "react";

function BadExample() {
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState("");

  const handleInputChange = (event) => {
    setNewItemName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = { id: Date.now(), name: newItemName };
    setItems([...items, newItem]);
    setNewItemName("");
  };

  const itemList = items.map((item) => <div key={item.id}>{item.name}</div>);

  return (
    <div>
      <h1>Items</h1>
      {itemList}
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newItemName} onChange={handleInputChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default BadExample;
