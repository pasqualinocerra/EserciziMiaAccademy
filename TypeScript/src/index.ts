import { Todo, User, Project, TodoStatus } from "./types";
import { PartialTodo } from './types'; 

const todos: Todo[] = [];
const users: User[] = [];

const updatePartialTodo = (todoId: number, updates: PartialTodo): Todo | undefined => {
  const todo = todos.find(t => t.id === todoId); 

  if (!todo) return undefined; 

  Object.assign(todo, updates);  
  
  return todo; 
};

const createProject = (name: string, users: User[], todos: Todo[]): Project => {
  return {
    id: Date.now(),
    name,
    users,
    todos,
  };
};

const addTodo = (title: string, metadata?: string | object): Todo => {
  const newTodo: Todo = { id: Date.now(), title, completed: false, status: TodoStatus.Pending, metadata };
  todos.push(newTodo);
  return newTodo;
};

const updateTodo = (id: number, updates: Partial<Todo>): Todo | undefined => {
  const todo = todos.find((t) => t.id === id);
  if (!todo) return undefined; 
  
  Object.assign(todo, updates); 
  return todo;
};

const updateTodoStatus = (todoId: number, status: TodoStatus): Todo | undefined => {
  const todo = todos.find((t) => t.id === todoId);
  if (!todo) return undefined;
  
  todo.status = status;
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

const user1 = new User(1, "Pasqualino");
const user2 = new User(2, "Manfredi");
users.push(user1, user2);

const todo1: Todo = addTodo("Buy groceries");
const todo2: Todo = addTodo("Learn TypeScript");

user1.addTodo(todo1);
user2.addTodo(todo2);
