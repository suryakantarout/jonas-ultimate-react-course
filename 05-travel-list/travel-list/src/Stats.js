export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage =
    numItems === 0 ? 0 : Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      {percentage === 100 && <em>You got everything! Ready to go ✈️</em>}
      {percentage !== 100 && (
        <em>
          🧳 You have {numItems} items on your list and you already packed{" "}
          {numPacked}({percentage}%)
        </em>
      )}
    </footer>
  );
}
