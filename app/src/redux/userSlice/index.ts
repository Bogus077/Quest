import { createSlice, current } from '@reduxjs/toolkit';

export type InitialState = [];

const initialState: InitialState = [];

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const { reducer: userReducer } = userSlice;
export * from './thunks';
export * from './selectors';
