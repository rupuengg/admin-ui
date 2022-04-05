import { TodoType } from "../actions/todo.action";
import { ITodo, ITodoStore } from "../interfaces/todo";

const initialState: ITodoStore = {
  todos: [],
};

export const todoReducer = (state: ITodoStore = initialState, action: any): ITodoStore => {
  switch (action.type) {
    case TodoType.TODO_Add:
      const newTodos = [...state.todos];
      newTodos.push({
        id: Math.random(),
        name: action.payload,
        is_done: false,
      });
      return { ...state, todos: [...newTodos] };
    case TodoType.MARK_AS_DONE:
      const findIndex = state.todos.findIndex(item => item.id === action.payload);
      const newTodos1: ITodo[] = [...state.todos];
      newTodos1[findIndex].is_done = !newTodos1[findIndex].is_done;
      return { ...state, todos: [...newTodos1] };
    default:
      return state;
  }
}

export default todoReducer;