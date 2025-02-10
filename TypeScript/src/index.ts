import { Todo, User } from "./types";

const todos: Todo[] = [];
const users: User[] = [];

const assignTodoToUser = (todoId: number, userId: number): boolean => {
    const todo = todos.find((t) => t.id === todoId);
    const user = users.find((u) => u.id === userId);
  
    if (!todo || !user) return false; 
  
    todo.userId = userId; 
    return true;
  };
