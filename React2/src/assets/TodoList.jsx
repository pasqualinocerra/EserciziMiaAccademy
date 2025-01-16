import React, { useState } from "react";
import useFetch from "react-fetch-hook";
import { useFilteredTodos } from "./useFilteredTodos";

const TodoList = () => {
    const { data: todos, isLoading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/todos"
    );

    const [filter, setFilter] = useState("");

    const filteredTodos = useFilteredTodos(todos, filter);

    if (isLoading) {
        return <p>Caricamento in corso...</p>;
    }

    if (error) {
        return <p>Si è verificato un errore: {error.message}</p>;
    }
    
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <>
            <div>
                <h1>Lista di To-Do</h1>
                <input
                    type="text"
                    placeholder="Cerca tra i to-do"
                    value={filter}
                    onChange={handleFilterChange}
                />
                <ul>
                    {filteredTodos.map((todo) => (
                        <li key={todo.id}>
                            <p>{todo.title}</p> -{" "}
                            {todo.completed ? "Completato" : "Non completato"}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default TodoList;
