import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

export default function App() {
  let [items, setItems] = useState([]);

  function addItems(item) {
    setItems((items) => [...items, item]);
  }

  function removeItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function toggleItemPacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearList() {
    let confirmend = window.confirm("Are you sure to delete all items");
    if (confirmend) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={addItems} />
      <PackingList
        items={items}
        onRemoveItem={removeItem}
        onToggleItemPacked={toggleItemPacked}
        onclearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}
