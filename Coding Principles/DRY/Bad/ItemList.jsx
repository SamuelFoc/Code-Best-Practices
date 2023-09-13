//

// In this example, the rendering logic for the list is duplicated
// in both ItemList1 and ItemList2. This is not following the DRY
// principle because the same code is repeated.

//

import React from "react";

function ItemList1({ items }) {
  const itemList = items.map((item) => <div key={item.id}>{item.name}</div>);

  return (
    <div>
      <h1>List 1</h1>
      {itemList}
    </div>
  );
}

function ItemList2({ items }) {
  const itemList = items.map((item) => <div key={item.id}>{item.name}</div>);

  return (
    <div>
      <h1>List 2</h1>
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
      <ItemList1 items={items} />
      <ItemList2 items={items} />
    </div>
  );
}
