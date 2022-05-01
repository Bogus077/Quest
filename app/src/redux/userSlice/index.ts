import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../types/user';
import { logIn, signUp } from './thunks';

export type InitialState = {
  user?: User;
  dialogsQueue?: Array<'welcomeDialog'>;
  error?: string;
  loading: boolean;
};

const initialState: InitialState = {
  loading: false,
  dialogsQueue: ['welcomeDialog'],
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    clearErrors: (state) => {
      state.error = undefined;
    },
    makeWelcomeDialogDone: (state) => {
      state.dialogsQueue = state.dialogsQueue?.filter(
        (item) => item !== 'welcomeDialog'
      );
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
export const { clearErrors, makeWelcomeDialogDone } = userSlice.actions;
export * from './thunks';
export * from './selectors';
