import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { RootState } from '..';
import {
  createAdminMachine,
  fetchAdminMachinesByUserId,
} from '../../features/api';
import { Machine, CreateMachine } from '../../features/types';

const machineAdapter = createEntityAdapter<Machine>();
const machineInitialEntityState = machineAdapter.getInitialState({
  status: "'idle",
});

export const createMachine = createAsyncThunk(
  'machines/create',
  async (machine: CreateMachine,): Promise<Machine> => {
    return await createAdminMachine(machine);
  },
);

export const fetchMachines = createAsyncThunk(
  'machine/fetch',
  async (): Promise<Machine[]> => {
    return await fetchAdminMachinesByUserId();
  },
);

const machineSlice = createSlice({
  name: 'machines',
  initialState: machineInitialEntityState,
  reducers: {
    addMachine: (state, action) => {
      return machineAdapter.addOne(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createMachine.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        machineAdapter.addOne(state, action.payload);
      })
      .addCase(createMachine.rejected, (state, action) => {
        state.status = 'rejected';
      })
      .addCase(fetchMachines.fulfilled, (state, action) => {
        machineAdapter.upsertMany(state, action.payload);
        state.status = 'fulfilled';
      })
      .addCase(fetchMachines.rejected, (state, action) => {
        state.status = 'rejected';
      });
  },
});

export const { selectAll: selectAllMachines, selectById: selectMachineById } =
  machineAdapter.getSelectors((state: RootState) => state.machines);

export const { addMachine } = machineSlice.actions;

export default machineSlice.reducer;
