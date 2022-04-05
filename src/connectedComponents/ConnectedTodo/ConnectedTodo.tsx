import { connect } from "react-redux";
import { TodoType } from "../../actions/todo.action";
import { getUserDetail, getUsers } from "../../actions/user.action";
import Todo, { ITodoState } from "../../components/Todo";

export const ConnectedTodo = (props: ITodoState) => {
  return (
    <Todo {...props} />
  );
}

const mapStateToProps = (store: any) => ({
  todos: store.todo.todos,
  users: store.user.users,
  currentUser: store.user.currentUser,
});

const mapDispatchToProps = (dispatch: any) => ({
  addTodoItem: (item: string) => dispatch({ type: TodoType.TODO_Add, payload: item }),
  markDone: (index: Number) => dispatch({ type: TodoType.MARK_AS_DONE, payload: index }),
  getUsers: () => dispatch(getUsers()),
  getUserDetail: (userId: Number) => dispatch(getUserDetail(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedTodo);