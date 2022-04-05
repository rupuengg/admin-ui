import React from "react";
import { Table } from "react-bootstrap";
import { IUser } from "../../interfaces/user";
import Pagination from "../Pagination";
import './UserList.css';

export interface IUserList {
  getUsers: () => void;
  users: IUser[];
  totalUsers: number;
  filterUsers: (searchTerm: string) => void;
  pageChangeUser: (page: number) => void;
}

export const UserList = (props: IUserList) => {
  const { getUsers, users, filterUsers, totalUsers, pageChangeUser } = props;
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
    filterUsers(e.currentTarget.value);
  }

  React.useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div>
      <div className="search-box">
        <input type="text" placeholder="Search by name, email or role" value={searchTerm} onChange={e => handleChange(e)} />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: IUser) =>
            <tr key={user.id.toString()}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>Action</td>
            </tr>
          )}
          {users.length === 0 && (
            <tr>
              <td colSpan={5}>No data found</td>
            </tr>
          )}
        </tbody>
      </Table>
      <Pagination totalItems={totalUsers} perPageItem={10} onPageChange={pageChangeUser} />
    </div>
  );
}

export default UserList;