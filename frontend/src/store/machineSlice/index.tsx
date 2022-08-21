import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createAdminMachines } from '../../features/api';
import { Machine, CreateMachine } from '../../features/types';

type InitialState = {
  machines: Machine[];
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
};

const initialState: InitialState = {
  machines: [],
  status: 'idle',
};

export const createMachine = createAsyncThunk(
  'machines/create',
  async (machine: CreateMachine): Promise<Machine> => {
    return await createAdminMachines(machine);
  },
);

const machineSlice = createSlice({
  name: 'machines',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createMachine.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.machines.push(action.payload);
    });
  },
});

export default machineSlice.reducer;
