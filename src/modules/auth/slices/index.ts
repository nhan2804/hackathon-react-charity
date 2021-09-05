import { createSlice } from "@reduxjs/toolkit";

export interface authState {
  isAuth: boolean;
  token: string;
  user: any;
}

const initialState: authState = {
  isAuth: false,
  token: "",
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isAuth = true;
      state.token = action.payload?.access_token;
      state.user = action.payload?.user;
    },
    logout: (state) => {
      state.isAuth = false;
      state.token = "";
      state.user = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
