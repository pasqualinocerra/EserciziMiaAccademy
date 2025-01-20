import React, { createContext, useState, useEffect, useCallback } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const [filter, setFilter] = useState("");
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((data) => {
                setTodos(data);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    }, []);

    const handleFilterChange = useCallback((event) => {
        setFilter(event.target.value);
    }, []);

    return (
        <TodoContext.Provider value={{ todos, isLoading, error, filter, handleFilterChange }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;