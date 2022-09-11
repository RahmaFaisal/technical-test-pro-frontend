import { Practitioner } from '@prisma/client';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import config from 'config';
import { parseIds } from 'store/utils';

const SERVER_API_ENDPOINT = config.get('SERVER_API_ENDPOING', '/api');

export const getPractitioners = createAsyncThunk('getPractitioners', async () => {
  const response = await fetch(`${SERVER_API_ENDPOINT}/practitioners`);
  const parsedResponse = await response.json();
  return parseIds(parsedResponse) as Practitioner[];
});

const practitionerAdapter = createEntityAdapter<Practitioner>({});

export const practitionersSelectors = practitionerAdapter.getSelectors();

const practitionerSlice = createSlice({
  name: 'practitioners',
  initialState: practitionerAdapter.getInitialState({
    loading: false,
    error: null,
    filterValuePractitioner:''
  }),
  reducers: {
    filterPractitioners(state,action){
      state.filterValuePractitioner=action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPractitioners.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPractitioners.fulfilled, (state, action) => {
        practitionerAdapter.setAll(state, action.payload);
      state.error = null;
      state.loading = false;
    });
    builder.addCase(getPractitioners.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
  },
});

let filterPractitionersAction=practitionerSlice.actions.filterPractitioners
export { filterPractitionersAction }
export default practitionerSlice;
