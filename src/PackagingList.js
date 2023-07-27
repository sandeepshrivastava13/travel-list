import React from "react";
import Item from "./Item";

const PackagingList = (props) => {
  const [sortBy, setSortBy] = React.useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = props.itemsList;

  if (sortBy === "itemName")
    sortedItems = props.itemsList
      .slice()
      .sort((a, b) => a.itemName.localeCompare(b.itemName));

  if (sortBy === "packed")
    sortedItems = props.itemsList
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            deleteItem={props.onDeleteItem}
            packedItem={props.onPackedItem}
          />
        ))}
      </ul>
      <div className="action">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="itemName">Sort by description order</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={props.onClearList}>Clear List</button>
      </div>
    </div>
  );
};

export default PackagingList;
