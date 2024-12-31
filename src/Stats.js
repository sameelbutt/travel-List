export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start some items adding to packing List</em>
      </p>
    );
  let numItems = items.length;
  let numPacked = items.filter((item) => item.packed).length;
  let percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go"
          : `You have ${numItems} items on your list, and you already packed
        ${numPacked} (${percentage}%) items🚀`}
      </em>
    </footer>
  );
}
