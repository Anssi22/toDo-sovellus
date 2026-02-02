function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
  if (!todos.length) {
    return <p>Ei vielä tehtäviä.</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>
          <span
            style={{
              textDecoration: todo.done ? "line-through" : "none",
              cursor: "pointer",
            }}
            onClick={() => toggleTodo(todo._id)}
          >
            {todo.text}
          </span>

          {/* Muuta tämä: ✓=toggle, Muokkaa=edit */}
          <button onClick={() => toggleTodo(todo._id)}>✓</button>
          <button onClick={() => editTodo(todo)}>Muokkaa</button>
          <button onClick={() => deleteTodo(todo._id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
