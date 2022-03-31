import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiRoutes, ROSATOM_API } from '../../utils/api';

type defaultError = {
  message: string;
};
