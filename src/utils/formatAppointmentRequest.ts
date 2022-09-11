import config from 'config';
import { InitValues } from 'consts/initValues';



const SERVER_API_ENDPOINT = config.get('SERVER_API_ENDPOING', '/api');

type AppointmentReq = {
  patientId: number;
  practitionerId: number;
  startDate: string;
  endDate: string;
};

function getAppointmentRequest(Req): AppointmentReq {
  let body: AppointmentReq = {
    patientId:Number(Req.patientId),
    practitionerId:Number(Req.practitionerId),
    startDate:Req.startDate,
    endDate:Req.endDate
   
  };

  return body;
}



function addAppointment(appointment:AppointmentReq,callBack:Function){

  fetch(`${SERVER_API_ENDPOINT}/appointments`,{
    method:'post',
    body: JSON.stringify(appointment)
  }).then((data)=>{
    console.log(data)
    callBack()
  })

}

function deleteAppointment(id:number,callBack:Function){

  fetch(`${SERVER_API_ENDPOINT}/appointments`,{
    method:'DELETE',
    body: JSON.stringify({id})
  }).then((data)=>{
    console.log(data)
    callBack()
  })

}


export { getAppointmentRequest ,addAppointment , deleteAppointment};
