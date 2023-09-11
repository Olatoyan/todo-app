import TodoTextBox from "./TodoTextBox";
import TodosSummaryBox from "./TodosSummaryBox";

export default function TodoListBox({
  items,
  filteredItems,
  onDeleteItems,
  onToggleItems,
  onDeleteCompleted,
  activeFilter,
  onFilterChange,
}) {
  return (
    <div className="todo__list-box">
      <TodoTextBox
        filteredItems={filteredItems}
        onDeleteItems={onDeleteItems}
        onToggleItems={onToggleItems}
      />
      <TodosSummaryBox
        items={items}
        filteredItems={filteredItems}
        onDeleteCompleted={onDeleteCompleted}
        activeFilter={activeFilter}
        onFilterChange={onFilterChange}
      />
    </div>
  );
}
