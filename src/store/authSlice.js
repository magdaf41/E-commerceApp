import { createSlice } from "@reduxjs/toolkit";
import { usersList } from "../db/users";
import { v4 as uuid } from "uuid";

const initialState = {
  loggedUser: null,
  response: {
    success: null,
    message: "",
  },
  users: usersList,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const foundUserByEmail = state.users.find(
        (user) => user.email === action.payload.email
      );
      if (!foundUserByEmail) {
        state.response.success = false;
        state.response.message = "Nie znaleziono użytkownika";
      } else {
        if (foundUserByEmail.password !== action.payload.password) {
          state.response.success = false;
          state.response.message = "Nieprawidłowe hasło";
        }
        if (foundUserByEmail.password === action.payload.password) {
          state.loggedUser = foundUserByEmail;
          state.response.success = true;
          state.response.message = "";
        }
      }
    },
    register: (state, action) => {
      const foundUserByEmail = state.users.find(
        (user) => user.email === action.payload.email
      );
      if (foundUserByEmail) {
        state.response.success = false;
        state.response.message = "Email zajęty";
      } else {
        const newUser = {
          id: uuid(),
          ...action.payload,
        };
        state.users = [...state.users, newUser];
        state.loggedUser = newUser;
        state.response.success = true;
        state.response.message = "";
      }
    },
    logout: (state) => {
      state.loggedUser = null;
    },
  },
});

export const { login, logout, register } = authSlice.actions;

export default authSlice.reducer;
