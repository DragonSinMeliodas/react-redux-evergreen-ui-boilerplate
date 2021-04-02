// Function to take an argument and do an action

export const setUsers = (users) => ({
  type: ActionTypes.SET_USERS,
  payload: users,
});
