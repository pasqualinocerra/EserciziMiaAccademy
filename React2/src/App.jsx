import React from "react";
import TodoProvider from "./TodoProvider";
import TodoList from "./TodoList";

const App = () => {
    return (
        <TodoProvider>
            <TodoList />
        </TodoProvider>
    );
};

export default App;