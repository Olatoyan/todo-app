import SummaryTexts from "./SummaryTexts";

export default function TodosSummaryBox({
  items,
  onDeleteCompleted,
  activeFilter,
  onFilterChange,
}) {
  const numTodos = items.length;
  const numChecked = items.filter((item) => item.checked).length;

  return (
    <div className="summary__box">
      <SummaryTexts>{numTodos - numChecked} items left</SummaryTexts>
      <div className="todo__states">
        <SummaryTexts
          onClickedStates={() => onFilterChange("All")}
          isClicked={activeFilter === "All"}
        >
          All
        </SummaryTexts>
        <SummaryTexts
          onClickedStates={() => onFilterChange("Active")}
          isClicked={activeFilter === "Active"}
        >
          Active
        </SummaryTexts>
        <SummaryTexts
          onClickedStates={() => onFilterChange("Completed")}
          isClicked={activeFilter === "Completed"}
        >
          Completed
        </SummaryTexts>
      </div>
      <SummaryTexts onClickedStates={onDeleteCompleted}>
        Clear Completed
      </SummaryTexts>
    </div>
  );
}
