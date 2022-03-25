import { UserActionTypes } from "./user.types.js";

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const setCurrentUsers = (users) => ({
  type: UserActionTypes.SET_CURRENT_USERS,
  payload: users,
});
