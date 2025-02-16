export enum TodoStatus {
  Pending = "Pending",
  InProgress = "InProgress",
  Completed = "Completed"
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  status: TodoStatus;
  userId?: number;
  metadata?: string | object;
}

export type PartialTodo = Partial<Todo>;  

export class User {
  id: number;
  name: string;
  email?: string;
  todos: Todo[];

  constructor(id: number, name: string, email?: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.todos = [];
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }
}

export interface TodoWithMetadata extends Todo {
  metadata: any;  
}

export interface Project {
  id: number;
  name: string;
  users: User[];
  todos: Todo[];
}
