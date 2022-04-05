import UserApi from "../api/user"
import { IUser } from "../interfaces/user";
import { createAction } from "./actionTypes";

export enum UserType {
  SET_USERS = 'user/SET_USERS',
  SET_USER_DETAIL = 'user/SET_USER_DETAIL',
  SET_FILTER_USERS = 'user/SET_FILTER_USERS',
  PAGE_CHANGE_USER = 'user/PAGE_CHANGE_USER',
};

export const UserAction = {
  setUsers: (users: IUser[]) => createAction(UserType.SET_USERS, { users }),
  setUserDetail: (userDetail: IUser) => createAction(UserType.SET_USER_DETAIL, { userDetail }),
  setFilterUsers: (searchTerm: string) => createAction(UserType.SET_FILTER_USERS, { searchTerm }),
  pageChangeUser: (page: number) => createAction(UserType.PAGE_CHANGE_USER, { page }),
};

export const getUsers = () => (dispatch: any) => (
  UserApi.getUsers().then(res => {
    dispatch(UserAction.setUsers(res));
  })
)

export const getUserDetail = (userId: Number) => (dispatch: any) => (
  UserApi.getUserDetail(userId).then(res => {
    dispatch(UserAction.setUserDetail(res));
  })
)