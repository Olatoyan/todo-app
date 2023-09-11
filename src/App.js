import { useState } from "react";
import Header from "./components/Header";
import Logo from "./components/Logo";
import MainIconBox from "./components/MainIconBox";
import InputField from "./components/InputField";
import TodoListBox from "./components/TodoListBox";

export default function App() {
  const [items, setItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleFilterChange(filter) {
    setActiveFilter(filter);
  }

  const filteredItems =
    activeFilter === "All"
      ? items
      : activeFilter === "Active"
      ? items.filter((item) => !item.checked)
      : items.filter((item) => item.checked);

  function handleDeleteCompleted() {
    setItems(items.filter((item) => !item.checked));
  }

  return (
    <div>
      <Header />

      <main className="main">
        <section className="main__section">
          <div className="heading__box">
            <Logo />
            <div className="icon__box">
              <MainIconBox img={"images/icon-sun.svg"}>light__icon</MainIconBox>
            </div>
          </div>
          <InputField onAddItems={handleAddItems} />
          <TodoListBox
            items={items}
            filteredItems={filteredItems}
            onDeleteItems={handleDeleteItems}
            onToggleItems={handleToggleItems}
            onDeleteCompleted={handleDeleteCompleted}
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
          />
        </section>
      </main>
    </div>
  );
}
