import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  Typography,
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import {
  appointmentsSelectors,
  filterAppointmentAction,
} from 'store/appointment';
import { patientsSelectors } from 'store/patients';
import { practitionersSelectors } from 'store/practitioners';
import { formatDateRange } from 'utils/date';
import { deleteAppointment } from 'utils/formatAppointmentRequest';
import { getAppointments } from '../store/appointment';
import EditorLink from './EditorLink';
import Alert from '@material-ui/lab/Alert';
import { filteredApointment } from 'utils/filterSelector';

const AppointmentList = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const appointments = filteredApointment(state);

  const LoadingAppointment = useSelector((state) => state.appointments.loading);
  const LoadingPatients = useSelector((state) => state.patients.loading);
  const LoadingPractitioners = useSelector(
    (state) => state.practitioners.loading,
  );

  const practitioners = useSelector((state) => state.practitioners);

  const getPractitById = (id) =>
    practitionersSelectors.selectById(practitioners, id);

  const patients = useSelector((state) => state.patients);
  const getPatientById = (id) => patientsSelectors.selectById(patients, id);

  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    dispatch(getAppointments());
  }, []);

  const refreshList = () => {
    setShowSuccess(true);
    dispatch(getAppointments());
  };

  const onDelete = (id: number) => {
    deleteAppointment(id, refreshList);
  };

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

  const Appointments = () => {
    return (
      <>
        {appointments.map((appointment) => {
          const practitioner = getPractitById(appointment.practitionerId);
          const patient = getPatientById(appointment.patientId);
          return (
            <Card key={appointment.id} className="appoint" datacy="appoint">
              <CardContent>
                <Typography variant="h6" className="title">
                  {formatDateRange({
                    from: new Date(appointment.startDate),
                    to: new Date(appointment.endDate),
                  })}
                </Typography>
                <Typography>
                  Practitioner Name : {practitioner.firstName}{' '}
                  {practitioner.lastName}
                </Typography>
                <Typography>
                  Practitioner speciality : {practitioner.speciality}{' '}
                </Typography>
                <Typography>
                  Patient Name : {patient.firstName} {patient.lastName}
                </Typography>
                <CardActions className="actionContainer">
                  <Button
                    onClick={() => {
                      onDelete(appointment.id);
                    }}
                    variant="contained"
                    className="btn"
                    color="secondary"
                    style={{ color: 'red' }}
                    size="small"
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          );
        })}
      </>
    );
  };

  const showLoading =
    LoadingAppointment || LoadingPatients || LoadingPractitioners;

  return (
    <div>
      {/* Edit
      <EditorLink path="src/components/AppointmentList.tsx">
        "src/components/AppointmentForm.tsx"
      </EditorLink>{' '}
      to display the list of appointments. */}
      {showLoading ? (
        <CircularProgress />
      ) : (
        <div>
          <div style={{ height: 50, width: '90%', margin: 'auto' }}>
            {showSuccess && (
              <Alert onClose={() => setShowSuccess(false)} severity="success">
                Appointment has been deleted successfully
              </Alert>
            )}
          </div>

          <FormControl
            size="small"
            variant="outlined"
            fullWidth
            style={{ margin: '10px 0' }}
          >
            <InputLabel htmlFor="outlined-adornment-amount">
              Practitioner/Patient/speciality/Date
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              onChange={(e) => {
                dispatch(filterAppointmentAction(e.target.value));
              }}
              startAdornment={<SearchIcon />}
              labelWidth={260}
            />
          </FormControl>

          <Appointments />
        </div>
      )}
    </div>
  );
};

export default AppointmentList;
