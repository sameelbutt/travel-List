import { useState } from "react";

export function Form({ onAddItems }) {
  let [description, setDescription] = useState("");
  let [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    let newitems = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    onAddItems(newitems);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
