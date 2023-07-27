import React from "react";

const Form = (props) => {
  const [itemName, setItemName] = React.useState("");
  const [quantity, setQuantity] = React.useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!itemName) return;
    const newItem = { itemName, quantity, packed: false, id: Date.now() };
    props.onAddItems(newItem);
    setItemName("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((el) => (
          <option value={el} key={el}>
            {el}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
