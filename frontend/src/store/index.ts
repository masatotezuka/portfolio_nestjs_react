import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import machineReducer from './machineSlice';

export const store = configureStore({
  reducer: { machine: machineReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
