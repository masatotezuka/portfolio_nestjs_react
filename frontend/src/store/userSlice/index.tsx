import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import { createUserAdmin } from '../../features/api';
import { User } from '../../features/types';

type InitialState = {
  users: User[];
  status: 'idle' | 'fulfilled' | 'rejected' | 'pending';
};

const initialState: InitialState = {
  users: [],
  status: 'idle',
};

export const createUser = createAsyncThunk(
  'users/create',
  async (users: User) => {
      return await createUserAdmin(users);
  },
);

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = 'rejected';
        console.log('rejected');
      });
  },
});

export default userSlice.reducer;
