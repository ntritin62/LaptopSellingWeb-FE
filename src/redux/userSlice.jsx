import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserService } from '../services/userService';
import axios from 'axios';
const initialState = {
  user: { name: '', email: '', phoneNumber: '', address: [{ _id: '' }] },
};

export const getUser = createAsyncThunk(
  'user/getUser',
  async (params, thunkAPI) => {
    const userCart = await getUserService();
    return userCart.data.data.user;
  }
);
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action);
      state.user = action.payload;
      console.log(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
