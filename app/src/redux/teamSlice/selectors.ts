import { AppState } from '../types';
import { createDraftSafeSelector } from '@reduxjs/toolkit';

const selectSelf = (state: AppState) => state.team;

export const getAvailableKids = createDraftSafeSelector(
  selectSelf,
  (store) => store.availableKids
);

export const getTeamKids = createDraftSafeSelector(
  selectSelf,
  (store) => store.teamKids
);

export const getCompetitions = createDraftSafeSelector(
  selectSelf,
  (store) => store.competitions
);
