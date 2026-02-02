import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList.jsx";

const API_URL = "http://localhost:5000/todos";

function App() {
  const [todos, setTodos] = useState([]);

  // Hae tehtävät backendistä
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  // Lisää tehtävä
  const addTodo = async (title) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title })
    });

    const newTodo = await res.json();
    setTodos([...todos, newTodo]);
  };

  // Päivitä tehtävän tila
  const toggleTodo = async (id) => {
    const todo = todos.find(t => t._id === id);

    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !todo.completed })
    });

    const updatedTodo = await res.json();
    setTodos(todos.map(t => t._id === id ? updatedTodo : t));
  };

  // Poista tehtävä
  const deleteTodo = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setTodos(todos.filter(t => t._id !== id));
  };

  return (
    <div className="container">
      <h1>Todo-sovellus</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
