import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import machineReducer from './machineSlice';
import employeeReducer from './employeeSlice';

export const store = configureStore({
  reducer: { employee: employeeReducer, machines: machineReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
