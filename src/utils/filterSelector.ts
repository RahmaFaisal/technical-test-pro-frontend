import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { patientsSelectors } from 'store/patients';
import { practitionersSelectors } from 'store/practitioners';
import { appointmentsSelectors } from 'store/appointment';
import { formatDateRange } from './date';
import appointments from 'api/appointments';

const patients = (state) => patientsSelectors.selectAll(state.patients);
const filterValuePatient = (state) => state.patients.filterPatient;

const filteredPatients = createDraftSafeSelector(
  [patients, filterValuePatient],
  (patients, filterValuePatient) => {
    if (filterValuePatient) {
      let list = patients.filter((patient) => {
        let name = patient.firstName + patient.lastName;
        return name.toLowerCase().includes(filterValuePatient.toLowerCase());
      });
      return list;
    } else {
      return patients;
    }
  },
);

const practitioners = (state) =>
  practitionersSelectors.selectAll(state.practitioners);
const filterValuePractitioner = (state) =>
  state.practitioners.filterValuePractitioner;

const filteredPractitioners = createDraftSafeSelector(
  [practitioners, filterValuePractitioner],
  (practitioners, filterValuePractitioner) => {
    console.log(filterValuePractitioner);
    if (filterValuePractitioner) {
      let list = practitioners.filter(({ firstName, lastName, speciality }) => {
        let practValues: string[] = Object.values({
          firstName,
          lastName,
          speciality,
        });

        for (let i = 0; i < practValues.length; i++) {
          if (
            practValues[i]
              .toLowerCase()
              .includes(filterValuePractitioner.toLowerCase())
          ) {
            return true;
          }
        }
        return false;
      });
      return list;
    } else {
      return practitioners;
    }
  },
);

const filterValueAppointment = (state) =>
  state.appointments.filterValueAppointment;
const appointment = (state) =>
  appointmentsSelectors.selectAll(state.appointments);

const practitionersState = (state) => state.practitioners;
const patientsState = (state) => state.patients;

const getPractitById = (state, id) =>
  practitionersSelectors.selectById(state, id);
const getPatientById = (state, id) => patientsSelectors.selectById(state, id);

const filteredApointment = createDraftSafeSelector(
  [appointment, filterValueAppointment, practitionersState, patientsState],
  (appointment, filterValueAppointment, practitionersState, patientsState) => {
    if (filterValueAppointment) {
      let list = appointment.filter((appoint) => {
        let {
          firstName: patientFirstName,
          lastName: patientlastName,
        } = getPatientById(patientsState, appoint.patientId);

        let { firstName, lastName, speciality } = getPractitById(
          practitionersState,
          appoint.practitionerId,
        );
        let date = formatDateRange({
          from: new Date(appoint.startDate),
          to: new Date(appoint.endDate),
        });
        let SearchObject = {
          patientFirstName,
          patientlastName,
          firstName,
          lastName,
          speciality,
          date,
        };
        let searchValues = Object.values(SearchObject);
        for (let i = 0; i < searchValues.length; i++) {
          if (
            searchValues[i]
              .toLowerCase()
              .includes(filterValueAppointment.toLowerCase())
          ) {
            return true;
          }
        }
        return false;
      });

      return list;
    } else {
      return appointment;
    }
  },
);

export { filteredPatients, filteredPractitioners, filteredApointment };
