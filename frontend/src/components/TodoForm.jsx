import { useState, useEffect } from "react";

function TodoForm({ addTodo, editingTodo, updateTodo, cancelEdit }) {
  const [title, setTitle] = useState("");

  // Kun editingTodo vaihtuu, esitäytä kenttä tai tyhjennä
  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.text); // backendiltä tuleva kenttä
    } else {
      setTitle("");
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;

    if (editingTodo) {
      // muokkaus
      updateTodo(editingTodo._id, trimmed);
    } else {
      // uusi
      addTodo(trimmed);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Uusi tehtävä..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">
        {editingTodo ? "Tallenna muokkaus" : "Lisää"}
      </button>
      {editingTodo && (
        <button type="button" onClick={cancelEdit}>
          Peru
        </button>
      )}
    </form>
  );
}

export default TodoForm;
