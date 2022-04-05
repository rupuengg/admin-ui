export interface IUser {
  id: Number,
  name: string,
  email: string,
  role: string,
};

export const defaultUser: IUser = {
  id: 1,
  name: 'Test',
  email: 'test@onc.com',
  role: 'admin',
};

export interface IFilterUser {
  users: IUser[],
  currentPage: Number,
  totalItems: Number,
}

export const defaultFilterUser: IFilterUser = {
  users: [],
  currentPage: 0,
  totalItems: 10,
}

export interface IUserStore {
  users: IUser[];
  filterUsers: IUser[];
  currentUser?: IUser;
  filterUser: IFilterUser;
};

export const defaultTodoState: IUserStore = {
  users: [defaultUser],
  filterUsers: [defaultUser],
  filterUser: defaultFilterUser,
};