//
// * Item List

// ItemList component is responsible for rendering the list of items.

//
//

import React from "react";

function ItemList({ items }) {
  const itemList = items.map((item) => <div key={item.id}>{item.name}</div>);

  return (
    <div>
      <h1>Items</h1>
      {itemList}
    </div>
  );
}

export default ItemList;
