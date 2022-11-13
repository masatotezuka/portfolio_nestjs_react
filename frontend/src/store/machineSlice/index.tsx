import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { RootState } from '..';
import {
  createAdminMachine,
  fetchAdminMachinesByUserId,
  updateAdminMachine,
} from '../../features/api';
import {
  Machine,
  CreateMachine,
  UpdateMachine,
  MachineData,
} from '../../features/types';
import { format } from 'date-fns';

const machineAdapter = createEntityAdapter<Machine>();
const machineInitialEntityState = machineAdapter.getInitialState({
  status: "'idle",
});
export const fetchMachines = createAsyncThunk('machine/fetch', async () => {
  return await fetchAdminMachinesByUserId();
});

export const createMachine = createAsyncThunk(
  'machine/create',
  async (createdMachine: CreateMachine) => {
    return await createAdminMachine(createdMachine);
  },
);

export const updateMachine = createAsyncThunk(
  'machine/update',
  async (updatedMachine: UpdateMachine) => {
    const response = await updateAdminMachine(updatedMachine);
    const data = {
      id: updatedMachine.id,
      changes: response,
    };
    return data;
  },
);

const machineSlice = createSlice({
  name: 'machines',
  initialState: machineInitialEntityState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createMachine.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        machineAdapter.addOne(state, action.payload);
      })
      .addCase(createMachine.rejected, (state) => {
        state.status = 'rejected';
      })
      .addCase(fetchMachines.fulfilled, (state, action) => {
        machineAdapter.upsertMany(state, action.payload);
        state.status = 'fulfilled';
      })
      .addCase(fetchMachines.rejected, (state) => {
        state.status = 'rejected';
      })
      .addCase(updateMachine.fulfilled, (state, action) => {
        machineAdapter.updateOne(state, action.payload);
        state.status = 'fulfilled';
      })
      .addCase(updateMachine.rejected, (state, action) => {
        state.status = 'rejected';
      });
  },
});

export const { selectAll: selectAllMachines, selectById: selectMachineById } =
  machineAdapter.getSelectors((state: RootState) => state.machines);

export const selectMachineDataList = createSelector(
  selectAllMachines,
  (state) => {
    return state.map((m): MachineData => {
      console.log(m);

      const userName = m.userMachines
        ? m.userMachines.user.lastName + m.userMachines.user.firstName
        : '';
      const updatedAt = format(new Date(m.updatedAt), 'yyyy-MM-dd');
      const purchasedAt = m.purchasedAt
        ? format(new Date(m.purchasedAt), 'yyyy-MM-dd')
        : '';
      return {
        id: m.id,
        symbol: m.symbol,
        name: m.name,
        category: m.category,
        purchasedAt,
        userName,
        updatedAt,
        usageStatus: m.usageStatus,
      };
    });
  },
);

export default machineSlice.reducer;
