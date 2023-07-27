import React from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackagingList from "./PackagingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = React.useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function deleteItem(id) {
    const tempArr = items;
    const resultArr = tempArr.filter((el) => el.id !== id);
    setItems([...resultArr]);
  }

  function itemPacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    if (!!items) return alert("Sorry, No items in the list");
    let confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackagingList
        itemsList={items}
        onDeleteItem={deleteItem}
        onPackedItem={itemPacked}
        onClearList={handleClearList}
      />
      <Stats
        totalItems={items.length}
        packedCount={items.filter((item) => item.packed).length}
      />
    </div>
  );
}

export default App;
