import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import machineReducer from './machineSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {user:userReducer ,machine: machineReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
