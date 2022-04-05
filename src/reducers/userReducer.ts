import { UserType } from "../actions/user.action";
import { IUser, IUserStore } from "../interfaces/user";

const initialState: IUserStore = {
  users: [],
  filterUsers: [],
  filterUser: {
    users: [],
    currentPage: 0,
    totalItems: 0
  },
};

export const userReducer = (state: IUserStore = initialState, action: any): IUserStore => {
  switch (action.type) {
    case UserType.SET_USERS:
      const users = [...action.payload.users];
      users.sort(function (a, b) {
        return a.id - b.id || a.name.localeCompare(b.name);
      });
      console.log(users);
      return {
        ...state,
        users: [...users],
        filterUsers: [...users],
        filterUser: {
          ...state.filterUser,
          users: [...users.slice(0, 10)],
          totalItems: users.length,
        }
      };
    case UserType.SET_USER_DETAIL:
      return { ...state, currentUser: action.payload.userDetail };
    case UserType.SET_FILTER_USERS:
      const searchTerm: string = action.payload.searchTerm.toString().toLowerCase();
      const newUsers = state.users.filter((user: IUser) => (
        user.name.toLowerCase().indexOf(searchTerm) >= 0 ||
        user.email.toLowerCase().indexOf(searchTerm) >= 0 ||
        user.role.toLowerCase().indexOf(searchTerm) >= 0));
      return {
        ...state,
        filterUsers: [...newUsers],
        filterUser: {
          ...state.filterUser,
          users: [...newUsers.slice(0, 10)],
          totalItems: newUsers.length,
          currentPage: 1,
        }
      };
    case UserType.PAGE_CHANGE_USER:
      const currentPage: number = action.payload.page;
      return {
        ...state,
        filterUser: {
          ...state.filterUser,
          users: [...state.filterUsers.slice((currentPage - 1) * 10, (currentPage * 10))],
          totalItems: state.filterUsers.length,
          currentPage: 1,
        }
      };
    default:
      return state;
  }
}

export default userReducer;