import { useState } from "react";

export default function InputField({ onAddItems }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!todo.trim()) return;
    const newTodo = { todo, checked: false, id: Date.now() };
    onAddItems(newTodo);

    setTodo("");
  };

  return (
    <form className="input__box" onSubmit={handleSubmit}>
      <button className="border"></button>
      <input
        type="text"
        placeholder="create a todo..."
        className="todo__input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
    </form>
  );
}
