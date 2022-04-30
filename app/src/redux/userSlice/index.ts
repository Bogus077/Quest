import { createSlice, current } from '@reduxjs/toolkit';
import { User } from '../../types/user';
import { logIn, signUp } from './thunks';

export type InitialState = {
  user?: User;
  error?: string;
  loading: boolean;
};

const initialState: InitialState = {
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    clearErrors: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.loading = false;
    });
    builder.addCase(signUp.rejected, (state, { payload }) => {
      state.error = payload?.errorMessage;
      state.loading = false;
    });

    builder.addCase(logIn.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(logIn.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.loading = false;
    });
    builder.addCase(logIn.rejected, (state, { payload }) => {
      state.error = payload?.errorMessage;
      state.loading = false;
    });
  },
});

export const { reducer: userReducer } = userSlice;
export const { clearErrors } = userSlice.actions;
export * from './thunks';
export * from './selectors';
