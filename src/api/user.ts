const { REACT_APP_BASE_URL } = process.env;

const getUsers = () => {
  return fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(err => {
      console.log(err);
    });
}

const getUserDetail = (userId: Number) => {
  return fetch(`${REACT_APP_BASE_URL}users/${userId}`)
    .then(res => {
      return res.json();
    }).catch(err => {
      console.log(err);
    });
}

export const UserApi = {
  getUsers,
  getUserDetail,
};

export default UserApi;