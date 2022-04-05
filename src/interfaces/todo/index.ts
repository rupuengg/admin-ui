export interface ITodo {
  id: Number,
  name: string,
  is_done: boolean,
};

export const defaultTodo: ITodo = {
  id: 1,
  name: 'Test',
  is_done: false,
};

export interface ITodoStore {
  todos: ITodo[];
};

export const defaultTodoState: ITodoStore = {
  todos: [defaultTodo],
};