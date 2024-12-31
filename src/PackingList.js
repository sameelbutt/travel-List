import { Item } from "./Item";

export function PackingList({
  items,
  onRemoveItem,
  onToggleItemPacked,
  onclearList,
}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onRemoveItem={onRemoveItem}
            onToggleItemPacked={onToggleItemPacked}
          />
        ))}
      </ul>
      <div className="action">
        <button onClick={onclearList}>Clear List</button>
      </div>
    </div>
  );
}
