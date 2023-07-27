import React from "react";

const Item = (props) => {
  return (
    <li>
      <input
        type="checkbox"
        value={props.item.packed}
        onChange={() => {
          props.packedItem(props.item.id);
        }}
      />
      <span style={props.item.packed ? { textDecoration: "line-through" } : {}}>
        {props.item.quantity} {props.item.itemName}
      </span>
      <button onClick={() => props.deleteItem(props.item.id)}>❌</button>
    </li>
  );
};

export default Item;
