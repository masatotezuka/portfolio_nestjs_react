import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { RootState } from '..';
import { createAdminMachine, fetchAdminMachines } from '../../features/api';
import { MachineItem, CreateMachine } from '../../features/types';

type InitialState = {
  machines: MachineItem[];
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
};

const initialState: InitialState = {
  machines: [],
  status: 'idle',
};

export const createMachine = createAsyncThunk(
  'machines/create',
  async (machine: CreateMachine): Promise<MachineItem> => {
    return await createAdminMachine(machine);
  },
);

export const fetchMachines = createAsyncThunk(
  'machine/fetch',
  async (): Promise<MachineItem[]> => {
    return await fetchAdminMachines();
  },
);

const machineSlice = createSlice({
  name: 'machines',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createMachine.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.machines.push(action.payload);
      })
      .addCase(createMachine.rejected, (state, action) => {
        state.status = 'rejected';
      })
      .addCase(fetchMachines.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.machines = action.payload;
      })
      .addCase(fetchMachines.rejected, (state, action) => {
        state.status = 'rejected';
      });
  },
});

export const machineItemsSelector = (state: RootState) =>
  state.machine.machines;

export default machineSlice.reducer;
