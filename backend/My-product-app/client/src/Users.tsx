import React, { useEffect } from "react";

type TUser = {
  id: number;
  name: string;
  email: string;
}[];

export default function Users() {
  const [users, setUsers] = React.useState<TUser>([]);
  async function getUsers() {
    const res = await fetch("http://localhost:3000/users");
    const data = await res.json();
    console.log(data);
    setUsers(data);
  }

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <h1>Users</h1>
      {users?.length > 0 ? (
        // <div>
        //   {users.map((user) => (
        //     <div>
        //       <h3>{user.name}</h3>
        //       <p>{user.email}</p>
        //     </div>
        //   ))}
        // </div>
        <table>
          <thead>
            <tr>
              <th>Sno</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>
                  {user.name.substring(0, 1).toUpperCase() +
                    user.name.substring(1)}
                </td>
                <td>{user.email}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2>No users found</h2>
      )}
    </div>
  );
}
