export function Item({ item, onRemoveItem, onToggleItemPacked }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItemPacked(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        <span className="item-quantity">{item.quantity}</span>
        <span className="item-description">{item.description}</span>
      </span>
      <button onClick={() => onRemoveItem(item.id)}>❌</button>
    </li>
  );
}
