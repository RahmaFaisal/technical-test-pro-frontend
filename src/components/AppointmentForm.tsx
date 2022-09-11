import { useEffect, useState } from 'react';
import EditorLink from './EditorLink';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik';
import { InitValues, initValues } from 'consts/initValues';
import {
  filterPractitionersAction,
  getPractitioners,
  practitionersSelectors,
} from 'store/practitioners';
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Alert from '@material-ui/lab/Alert';
import {
  filterPatientAction,
  getPatients,
  patientsSelectors,
} from 'store/patients';
import { AppointmentSchema } from 'consts/validationSchema';
import {
  addAppointment,
  getAppointmentRequest,
} from 'utils/formatAppointmentRequest';
import { getAppointments } from 'store/appointment';
import AvailabilitiesList from './AvailabilitiesList';
import { filteredPatients, filteredPractitioners } from 'utils/filterSelector';

export type Availability = {
  id: number;
  practitionerId: number;
  startDate: string;
  endDate: string;
};

const AppointmentForm = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const practitioners = filteredPractitioners(state);
  const patients = filteredPatients(state);

  const [availabilities, setAvailabilities] = useState<Availability[]>([]);

  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    dispatch(getPractitioners());
    dispatch(getPatients());
  }, []);

  useEffect(() => {
    let hideAlert;
    if (showSuccess) {
      hideAlert = setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
    }

    return () => {
      clearTimeout(hideAlert);
    };
  }, [showSuccess]);

  const PractitionersList = () => {
    return (
      <>
        {practitioners.map((practitioner) => {
          return (
            <label key={practitioner.id}>
              <Field
                type="radio"
                name="practitionerId"
                value={practitioner.id.toString()}
              />
              {`${practitioner.firstName} ${practitioner.lastName}  (${practitioner.speciality})`}
            </label>
          );
        })}
      </>
    );
  };

  const PatientsList = () => {
    return (
      <>
        {patients.map((patient) => {
          return (
            <label key={patient.id}>
              <Field
                type="radio"
                name="patientId"
                value={patient.id.toString()}
              />
              {`${patient.firstName} (${patient.lastName})`}
            </label>
          );
        })}
      </>
    );
  };

  const updateAppointmentList = () => {
    setShowSuccess(true);
    setAvailabilities([]);
    dispatch(getAppointments());
  };

  const onSubmit = (values: InitValues, { resetForm }) => {
    let { availabilityId, patientId, practitionerId } = values;
    let { endDate, startDate } = availabilities.find(
      (date) => date.id == Number(availabilityId),
    );
    resetForm();
    let body = getAppointmentRequest({
      patientId,
      practitionerId,
      startDate,
      endDate,
    });
    addAppointment(body, updateAppointmentList);
  };

  return (
    <div>
      <div style={{ height: 50, width: '90%', margin: 'auto' }}>
        {showSuccess && (
          <Alert onClose={() => setShowSuccess(false)} severity="success">
            Appointment added successfully
          </Alert>
        )}
      </div>
      <Formik
        initialValues={initValues}
        onSubmit={onSubmit}
        validationSchema={AppointmentSchema}
      >
        <Form>
          <div className="_form">
            <Grid
              container
              direction="column"
              className="list"
              id="patientlist"
            >
              <p className="title">
                Patient List
                <ErrorMessage
                  component="span"
                  name="patientId"
                  className="error"
                />
              </p>

              <FormControl
                size="small"
                variant="outlined"
                style={{ width: '70%', margin: '10px 0' }}
              >
                <InputLabel htmlFor="outlined-adornment-amount">
                  Patient Name
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  onChange={(e) => {
                    dispatch(filterPatientAction(e.target.value));
                  }}
                  startAdornment={<SearchIcon />}
                  labelWidth={100}
                />
              </FormControl>

              <PatientsList />
            </Grid>

            <Grid
              container
              direction="column"
              className="list"
              id="practitionerlist"
            >
              <p className="title">
                Practitioner List
                <ErrorMessage
                  component="span"
                  name="practitionerId"
                  className="error"
                />
              </p>

              <FormControl
                size="small"
                variant="outlined"
                style={{ width: '70%', margin: '10px 0' }}
              >
                <InputLabel htmlFor="outlined-adornment-amount">
                  Practitioner/speciality
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  onChange={(e) => {
                    dispatch(filterPractitionersAction(e.target.value));
                  }}
                  startAdornment={<SearchIcon />}
                  labelWidth={170}
                />
              </FormControl>

              <PractitionersList />
            </Grid>

            <Grid container direction="column" className="list">
              <p className="title">
                Appointments List
                <ErrorMessage
                  component="span"
                  name="availabilityId"
                  className="error"
                />
              </p>
              <AvailabilitiesList
                availabilities={availabilities}
                setAvailabilities={setAvailabilities}
              />
            </Grid>
          </div>
          <Grid container justify="center">
            <Button
              type="submit"
              variant="contained"
              className="btn"
              color="primary"
              size="medium"
            >
              Book
            </Button>
          </Grid>
        </Form>
      </Formik>
    </div>
  );
};

export default AppointmentForm;
