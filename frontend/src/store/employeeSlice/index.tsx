import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createEmployeeAdmin,
  deleteEmployeeAdmin,
  fetchEmployeesAdmin,
  updateEmployeeAdmin,
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
  async (employee: Employee) => {
    return await createEmployeeAdmin(employee);
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

export const updateEmployee = createAsyncThunk(
  'employees/update',
  async (employee: Employee): Promise<Employee> => {
    return await updateEmployeeAdmin(employee);
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
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = 'rejected';
      })
      .addCase(deleteEmployees.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        const deletedUserId = action.payload;
        state.employees = state.employees.filter(
          (employee) => deletedUserId !== employee.id,
        );
      })
      .addCase(deleteEmployees.rejected, (state, action) => {
        state.status = 'rejected';
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        const index = state.employees.findIndex(
          (employee) => employee.id === action.payload.id,
        );
        state.employees[index].firstName = action.payload.firstName;
        state.employees[index].lastName = action.payload.lastName;
        state.employees[index].email = action.payload.email;
      })
      .addCase(updateEmployee.rejected, (state, action) => {
        state.status = 'rejected';
      });
  },
});

export default employeeSlice.reducer;
