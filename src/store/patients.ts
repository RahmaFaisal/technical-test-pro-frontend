import { Patient  } from '@prisma/client';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import config from 'config';
import { parseIds } from 'store/utils';

const SERVER_API_ENDPOINT = config.get('SERVER_API_ENDPOING', '/api');

export const getPatients = createAsyncThunk('getPatients ', async () => {
  const response = await fetch(`${SERVER_API_ENDPOINT}/patients`);
  const parsedResponse = await response.json();
  return parseIds(parsedResponse) as Patient[];
});

const patientAdapter = createEntityAdapter<Patient>({});

export const patientsSelectors = patientAdapter.getSelectors();

const patientSlice = createSlice({
  name: 'patients',
  initialState: patientAdapter.getInitialState({
    loading: false,
    error: null,
    filterPatient:''
  }),
  reducers: {
    filterPatient(state,action){
       state.filterPatient=action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPatients.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPatients.fulfilled, (state, action) => {
        patientAdapter.setAll(state, action.payload);
      state.error = null;
      state.loading = false;
    });
    builder.addCase(getPatients.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
  },
});
let filterPatientAction=patientSlice.actions.filterPatient

export { filterPatientAction}
export default patientSlice;
