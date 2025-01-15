import React from "react";
import useFetch from "react-fetch-hook"; 

const TodoList = () => {
  const { data: todos, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  if (isLoading) {
    return <p>Caricamento in corso...</p>;
  }

  if (error) {
    return <p>Si è verificato un errore: {error.message}</p>;
  }

  return (
    <div>
      <h1>Lista di To-Do</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p>{todo.title}</p> -{" "}
            {todo.completed ? "Completato" : "Non completato"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
