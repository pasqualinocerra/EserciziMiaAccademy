import { Todo, User } from "./types";

const todos: Todo[] = [];
const users: User[] = [];

const addTodo = (title: string, metadata?: string | object): Todo => {
    const newTodo: Todo = { id: Date.now(), title, completed: false, metadata };
    todos.push(newTodo);
    return newTodo;
  };

  const updateTodo = (id: number, updates: Partial<Todo>): Todo | undefined => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return undefined; 
  
    Object.assign(todo, updates); 
    return todo;
  };

  const getTodoSummary = (todo: Todo): [string, boolean] => {
    return [todo.title, todo.completed];
  };

const assignTodoToUser = (todoId: number, userId: number): boolean => {
    const todo = todos.find((t) => t.id === todoId);
    const user = users.find((u) => u.id === userId);
  
    if (!todo || !user) return false; 
  
    todo.userId = userId; 
    return true;
  };

  const getUserTodos = (userId: number): Todo[] => {
    return todos.filter((todo) => todo.userId === userId);
  };

  const error = (message: string): never => {
    throw new Error(message);
  };

  const parseInput = (input: unknown): string => {
    if (typeof input === "string") {
      return input; 
    } 
    if (typeof input === "number") {
      return input.toString(); 
    } 
    return error("Input non valido: deve essere una stringa o un numero.");
  };