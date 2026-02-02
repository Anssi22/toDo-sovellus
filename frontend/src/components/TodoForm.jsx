import { useState } from "react";

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTodo(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Uusi tehtävä..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Lisää</button>
    </form>
  );
}

export default TodoForm;
