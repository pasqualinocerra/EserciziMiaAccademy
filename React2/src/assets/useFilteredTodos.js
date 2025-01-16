import { useState, useEffect } from "react";

export const useFilteredTodos = (todos, search) => {

    const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (!todos || todos.length === 0) {
      setFiltered([]);
      return;
    }

    const lowerCaseSearch = search.toLowerCase(); 
    const filteredTodos = todos.filter((todo) =>
      todo.title.toLowerCase().includes(lowerCaseSearch)
    ); 
    setFiltered(filteredTodos); 
  }, [todos, search]); 

  return filtered;

}

