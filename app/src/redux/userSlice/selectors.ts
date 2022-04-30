import { AppState } from '../types';
import { createDraftSafeSelector } from '@reduxjs/toolkit';

const selectSelf = (state: AppState) => state.user;

export const getUser = createDraftSafeSelector(
  selectSelf,
  (store) => store.user
);

export const isAuthorized = createDraftSafeSelector(selectSelf, (store) =>
  Boolean(store.user?.accessToken)
);

export const getUserError = createDraftSafeSelector(
  selectSelf,
  (store) => store.error
);
