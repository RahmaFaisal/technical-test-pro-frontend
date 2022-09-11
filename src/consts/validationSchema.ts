import * as Yup from 'yup';
 
const AppointmentSchema = Yup.object().shape({
    practitionerId: Yup.string()
    .required('Please assgin practitioner'),
    patientId: Yup.string()
    .required('Please choose patient '),
    availabilityId: Yup.string().when("practitionerId",{
        is:(practitionerId)=>practitionerId,
        then:Yup.string().required('Please choose appointment date')
    }),
});

export { AppointmentSchema } 

