export default function TodosList({ item, onDeleteItems, onToggleItems }) {
  return (
    <div className="todo__list">
      <div
        className={`check__icon ${item.checked ? "checked__icon" : ""}`}
        onClick={() => onToggleItems(item.id)}
      ></div>
      <p className={`todo__text ${item.checked ? "checked__text" : ""}`}>
        {item.todo}
      </p>
      <img
        src="images/icon-cross.svg"
        alt="add icon"
        className="remove__icon"
        onClick={() => onDeleteItems(item.id)}
      />
    </div>
  );
}
