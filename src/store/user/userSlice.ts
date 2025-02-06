import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "../../types/definitions";

interface UserState {
  currentUser: null | UserData
}

const initialState: UserState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser(state, action:PayloadAction<UserData | null>) {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
