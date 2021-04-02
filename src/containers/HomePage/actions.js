// Function to take an argument and do an action
import { ActionTypes } from "./constants";
export const setUsers = (users) => ({
  type: ActionTypes.SET_USERS,
  payload: users,
});
