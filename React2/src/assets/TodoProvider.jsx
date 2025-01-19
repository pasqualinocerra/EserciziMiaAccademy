import { createContext, useCallback, useState } from "react";
import TodoList from "./TodoList";

export const TodoContext = createContext();

const TodoProvider = () => {
    const [filter, setFilter] = useState("");

    const handleFilterChange = useCallback((event) => {
        setFilter(event.target.value);
    }, []);

    return (
        <TodoContext.Provider value={{ filter, handleFilterChange }}>
            <TodoList />
        </TodoContext.Provider>
    );
};

export default TodoProvider;