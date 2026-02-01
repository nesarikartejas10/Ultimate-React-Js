import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../features/user/userSlice";

const User = () => {
  const users = useSelector((state) => state.user.users);
  const error = useSelector((state) => state.user.error);
  //   console.log(error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <div>
      <h2>Users Data</h2>
      {error ? <p style={{ color: "red" }}>{error}</p> : null}
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default User;
