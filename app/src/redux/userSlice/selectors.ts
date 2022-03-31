import { AppState } from '../types';
import { createDraftSafeSelector } from '@reduxjs/toolkit';

const selectSelf = (state: AppState) => state.user;

export const getUser = createDraftSafeSelector(selectSelf, (store) => store);
