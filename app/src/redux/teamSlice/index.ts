import { createSlice } from '@reduxjs/toolkit';
import { Competition } from '../../types/competitions';
import { Kid } from '../../types/kids';
import {
  getAvailableKidsThunk,
  addKidToTeamThunk,
  getTeamKidsThunk,
  getCompetitionsThunk,
} from './thunks';

export type InitialState = {
  availableKids: Kid[];
  teamKids: Kid[];
  competitions: Competition[];
  error?: string;
  loading: boolean;
};

const initialState: InitialState = {
  loading: false,
  availableKids: [],
  teamKids: [],
  competitions: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    clearTeamStoreErrors: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAvailableKidsThunk.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(getAvailableKidsThunk.fulfilled, (state, { payload }) => {
      state.availableKids = payload;
      state.loading = false;
    });
    builder.addCase(getAvailableKidsThunk.rejected, (state, { payload }) => {
      state.error = payload?.errorMessage;
      state.loading = false;
    });

    builder.addCase(addKidToTeamThunk.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(addKidToTeamThunk.fulfilled, (state, { payload }) => {
      state.teamKids = payload;
      state.loading = false;
    });
    builder.addCase(addKidToTeamThunk.rejected, (state, { payload }) => {
      state.error = payload?.errorMessage;
      state.loading = false;
    });

    builder.addCase(getTeamKidsThunk.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(getTeamKidsThunk.fulfilled, (state, { payload }) => {
      state.teamKids = payload;
      state.loading = false;
    });
    builder.addCase(getTeamKidsThunk.rejected, (state, { payload }) => {
      state.error = payload?.errorMessage;
      state.loading = false;
    });

    builder.addCase(getCompetitionsThunk.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(getCompetitionsThunk.fulfilled, (state, { payload }) => {
      state.competitions = payload;
      state.loading = false;
    });
    builder.addCase(getCompetitionsThunk.rejected, (state, { payload }) => {
      state.error = payload?.errorMessage;
      state.loading = false;
    });
  },
});

export const { reducer: teamReducer } = userSlice;
export const { clearTeamStoreErrors } = userSlice.actions;
export * from './thunks';
export * from './selectors';
