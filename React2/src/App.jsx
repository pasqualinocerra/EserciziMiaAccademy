import React from "react";
import TodoProvider from "./assets/TodoProvider";
import TodoList from "./assets/TodoList";

const App = () => {
    return (
        <TodoProvider>
            <TodoList />
        </TodoProvider>
    );
};

export default App;