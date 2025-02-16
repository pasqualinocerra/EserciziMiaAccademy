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

export interface User {
  id: number;
  name: string;
  email?: string;
  readonly todos: ReadonlyArray<Todo>;
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
