import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createEmployeeAdmin,
  deleteEmployeeAdmin,
  fetchEmployeesAdmin,
} from '../../features/api';
import { Employee } from '../../features/types';

type InitialState = {
  employees: Employee[];
  status: 'idle' | 'fulfilled' | 'rejected' | 'pending';
};

const initialState: InitialState = {
  employees: [],
  status: 'idle',
};

export const createEmployee = createAsyncThunk(
  'employees/create',
  async (employees: Employee) => {
    return await createEmployeeAdmin(employees);
  },
);

export const fetchEmployees = createAsyncThunk('employees/fetch', async () => {
  return await fetchEmployeesAdmin();
});

export const deleteEmployees = createAsyncThunk(
  'employees/delete',
  async (userId: number): Promise<number> => {
    return await deleteEmployeeAdmin(userId);
  },
);

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createEmployee.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.employees.push(action.payload);
      })
      .addCase(createEmployee.rejected, (state, action) => {
        state.status = 'rejected';
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.employees = action.payload;
      })
      .addCase(deleteEmployees.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        const deletedUserId = action.payload;
        state.employees = state.employees.filter(
          (employee) => deletedUserId !== employee.id,
        );
      });
  },
});

export default employeeSlice.reducer;
