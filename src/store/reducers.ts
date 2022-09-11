import timeslots from './timeslots';
import patients from './patients'
import practitioners from './practitioners'
import appointments from './appointment'
export default {
  timeslots: timeslots.reducer,
  patients:patients.reducer,
  practitioners:practitioners.reducer,
  appointments:appointments.reducer

};
