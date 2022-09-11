import {Appointment } from '@prisma/client';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import config from 'config';
import { parseIds } from 'store/utils';

const SERVER_API_ENDPOINT = config.get('SERVER_API_ENDPOING', '/api');

export const getAppointments = createAsyncThunk('getappointments', async () => {
  const response = await fetch(`${SERVER_API_ENDPOINT}/appointments`);
  const parsedResponse = await response.json();
  return parseIds(parsedResponse) as Appointment[];
});

// export const addAppointment = createAsyncThunk('addAppointment', async () => {
//     const response = await fetch(`${SERVER_API_ENDPOINT}/appointments`);
//     const parsedResponse = await response.json();
//     return parseIds(parsedResponse) as Patient[];
//   });
  


const appointmentsAdapter = createEntityAdapter<Appointment>({});

export const appointmentsSelectors = appointmentsAdapter.getSelectors();

const  appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: appointmentsAdapter.getInitialState({
    loading: false,
    error: null,
    filterValueAppointment:''
  }),
  reducers: {
      filterAppointment(state,action){
        state.filterValueAppointment=action.payload
      }
  },
  extraReducers: (builder) => {
    builder.addCase(getAppointments.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAppointments.fulfilled, (state, action) => {
        appointmentsAdapter.setAll(state, action.payload);
      state.error = null;
      state.loading = false;
    });
    builder.addCase(getAppointments.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
  },
});

let filterAppointmentAction=appointmentsSlice.actions.filterAppointment

export { filterAppointmentAction}
export default appointmentsSlice;
