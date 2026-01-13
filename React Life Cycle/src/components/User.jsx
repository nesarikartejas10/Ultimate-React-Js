import { useEffect, useState } from "react";

function User() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  console.log(users);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
      localStorage.setItem("users", JSON.stringify(data));
    })();

    return () => {
      localStorage.clear();
    };
  }, []);
  return (
    <div>
      <h2>Users:</h2>
      {users.map((user) => {
        return <p key={user.id}>{user.name}</p>;
      })}
    </div>
  );
}

export default User;
