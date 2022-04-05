import React from "react";
import { ITodo } from "../../interfaces/todo";
import { IUser } from "../../interfaces/user";
import './Todo.css';

export interface ITodoState {
  todos: ITodo[];
  addTodoItem: (item: string) => void;
  markDone: (index: Number) => void;
  getUsers: () => void;
  users: IUser[];
  currentUser: IUser;
  getUserDetail: (userId: Number) => void;
}

export const Todo = (props: ITodoState) => {
  const { todos, addTodoItem, markDone, getUsers, users, currentUser, getUserDetail } = props;
  const [item, setItem] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItem(e.currentTarget.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodoItem(item);
    setItem('');
  }

  const handleSelect = (todo: ITodo) => {
    markDone(todo.id);
  }

  const handleSelectUser = (user: IUser) => {
    getUserDetail(user.id);
  }

  React.useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div>
      <div>
        <h2>Add Item to Todo</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" value={item} onChange={e => handleChange(e)} />
        </form>
      </div>
      <h1>TodoLists</h1>
      {todos.map(todo => <li key={todo.id.toString()} className={todo.is_done ? 'mark-as-done' : ''} onClick={() => handleSelect(todo)}>{todo.name}</li>)}
      <h1>Users</h1>
      <ul>
        {users && users.map((user: IUser) => <li key={user.id.toString()} className={user.role ? '' : ''} onClick={() => handleSelectUser(user)}>{`${user.name} (${user.role})`}</li>)}
      </ul>
      <h1>User Detail</h1>
      <pre>
        <code>
          {JSON.stringify(currentUser)}
        </code>
      </pre>
    </div>
  );
}

export default Todo;