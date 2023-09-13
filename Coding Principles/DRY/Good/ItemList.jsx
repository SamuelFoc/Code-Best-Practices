//

// In this improved example, the rendering logic is encapsulated within the ItemList component,
// which accepts both the items and title as props. By doing this, you eliminate code duplication
//  and adhere to the DRY principle. You can now reuse the ItemList component in
//  multiple places without repeating the same rendering code.

//

import React from "react";

function ItemList({ items, title }) {
  const itemList = items.map((item) => <div key={item.id}>{item.name}</div>);

  return (
    <div>
      <h1>{title}</h1>
      {itemList}
    </div>
  );
}

export default function App() {
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
  ];

  return (
    <div>
      <ItemList items={items} title="List 1" />
      <ItemList items={items} title="List 2" />
    </div>
  );
}
