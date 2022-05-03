import { addKidToTeamRequest, Kid } from './../../types/kids/index';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiRoutes, ROSATOM_API } from '../../utils/api';
import { InitialState } from '../userSlice';

type defaultError = {
  errorMessage: string;
};

export const getAvailableKidsThunk = createAsyncThunk<
  Kid[],
  unknown,
  { rejectValue: defaultError }
>('team/getAvailableKids', async (_, { getState, rejectWithValue }) => {
  const state: { user: InitialState } = getState() as { user: InitialState };
  try {
    const { data } = await ROSATOM_API.get(apiRoutes.getAvailableKids, {
      headers: {
        Authorization: `Bearer ${state.user.user?.accessToken as string}`,
      },
    });
    return data;
  } catch ({ response: { data } }) {
    return rejectWithValue(data as defaultError);
  }
});

export const addKidToTeamThunk = createAsyncThunk<
  Kid[],
  addKidToTeamRequest,
  { rejectValue: defaultError }
>('team/addKidToTeamThunk', async (request, { getState, rejectWithValue }) => {
  const state: { user: InitialState } = getState() as { user: InitialState };
  try {
    const { data } = await ROSATOM_API.put(apiRoutes.addKidToTeam, request, {
      headers: {
        Authorization: `Bearer ${state.user.user?.accessToken as string}`,
      },
    });
    return data;
  } catch ({ response: { data } }) {
    return rejectWithValue(data as defaultError);
  }
});

export const getTeamKidsThunk = createAsyncThunk<
  Kid[],
  unknown,
  { rejectValue: defaultError }
>('team/getTeamKidsThunk', async (_, { getState, rejectWithValue }) => {
  const state: { user: InitialState } = getState() as { user: InitialState };
  try {
    const { data } = await ROSATOM_API.get(apiRoutes.getTeam, {
      headers: {
        Authorization: `Bearer ${state.user.user?.accessToken as string}`,
      },
    });
    return data;
  } catch ({ response: { data } }) {
    return rejectWithValue(data as defaultError);
  }
});
