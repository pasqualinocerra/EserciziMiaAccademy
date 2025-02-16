import { Todo } from './types'; 

export type TodoRecord = {
    [id: number]: Todo;
  };
  
  export const convertArrayToRecord = (todos: Todo[]): TodoRecord => {
    return todos.reduce((acc, todo) => {
      acc[todo.id] = todo;
      return acc;
    }, {} as TodoRecord);
  };

function filterTodos(todos: Todo[], filterFn: (todo: Todo) => boolean): Todo[] {
  return todos.filter(filterFn);
}

export { filterTodos };
