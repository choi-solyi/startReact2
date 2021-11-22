import { useEffect } from "react";
export default function UserList({ users, getUsers }) {
  useEffect(() => {
    //   async function getUsers() {
    //     try {
    //       start();
    //       const res = await axios.get("https://api.github.com/users");

    //       success(res.data);
    //     } catch (error) {
    //       fail(error);
    //     }
    //   }
    getUsers();
  }, [getUsers]);

  console.log(users);

  if (users.length === 0) {
    return <p>현재 유저 정보가 존재하지 않음</p>;
  }
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.login}</li>
      ))}
    </ul>
  );
}
