import TodosList from "./TodosList";

export default function TodoTextBox({
  onDeleteItems,
  onToggleItems,
  filteredItems,
}) {
  return (
    <div>
      {filteredItems.map((item) => (
        <TodosList
          item={item}
          key={item.id}
          filteredItems={filteredItems}
          onDeleteItems={onDeleteItems}
          onToggleItems={onToggleItems}
        />
      ))}
    </div>
  );
}
