import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { setUsers } from "./actions";
import { makeSelectUsers } from "./selectors";
import UsersList from "./usersList";

//  defining which selector to use to get the state
const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}));

//  defining the action dispatch function object
const actionDispatcher = (dispatch) => ({
  setUser: (users) => dispatch(setUsers(users)),
});

export default function HomePage(props) {
  const { users } = useSelector(stateSelector);

  //   using hooks to call dispatch function
  const { setUser } = actionDispatcher(useDispatch());

  const fetchUsers = async () => {
    const response = await axios
      .get("https://reqres.in/api/users")
      .catch((err) => {
        console.log(`Error : ${err}`);
      });

    setUser(response.data.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log("users: ", users);

  return (
    <div>
      <UsersList />
    </div>
  );
}
