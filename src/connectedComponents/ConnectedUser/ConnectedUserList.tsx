import { connect } from "react-redux";
import { getUsers, UserAction } from "../../actions/user.action";
import UserList, { IUserList } from "../../components/User/UserList";

export const ConnectedUserList = (props: IUserList) => {
  return (
    <UserList {...props} />
  );
}

const mapStateToProps = (store: any) => ({
  users: store.user.filterUser.users,
  totalUsers: store.user.filterUser.totalItems,
});

const mapDispatchToProps = (dispatch: any) => ({
  getUsers: () => dispatch(getUsers()),
  filterUsers: (searchTerm: string) => dispatch(UserAction.setFilterUsers(searchTerm)),
  pageChangeUser: (page: number) => dispatch(UserAction.pageChangeUser(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedUserList);