import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../backend/models/userSchema";
import { getOtherUsers as fetchOtherUsers } from "../../../backend/controllers/userController"; // Assuming you are importing this for some async actions

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    otherUsers: null,
  },
  reducers: {
    // multiple actions
    getUser: (state, action) => {
      state.user = action.payload;
    },
    getOtherUsers: (state, action) => {
      state.otherUsers = action.payload;
    },
  },
});

export const { getUser, getOtherUsers } = userSlice.actions;
export default userSlice.reducer;
