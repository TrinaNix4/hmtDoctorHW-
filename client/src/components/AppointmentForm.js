import useAxiosOnMount from "../hooks/useAxiosOnMount";
import StringifyJSON from "./StringifyJSON"; 
import { useState } from "react";


const AppointmentForm = () => {
  const [physicianId, setPhysicianId] = useState('')
  const [patientId, setPatientId] = useState('')
  const [appointmentDate, setAppointmentDate] = useState('')
const{
  data: patients, 
  loading: patientLoading, 
  error: patientError,
} = useAxiosOnMount('/api/patients');
const {
  data: physicians,
  loading: physicianLoading,
  error: physicianError,
} = useAxiosOnMount('/api/physicians')
  

const handleSubmit = (e) => {
  console.log({physician_id: physicianId, patient_id: patientId, appointment_date: appointmentDate})
}
  return (
    <div>
      <h1>AppointmentForm</h1>
      <StringifyJSON data={patients} />
      <StringifyJSON data={physicians} />
      <form onSubmit={handleSubmit}>
        <p>physician id: </p>
        <input value={physicianId} onChange={(e) => setPhysicianId(e.target.value)} />
        <p> patient id:</p>
        <input value={patientId} onChange={(e) => setPatientId(e.target.value)} />
        <p> appointment date: </p>
        <input value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} />
      <button>add</button>
      </form>

    </div>
  )
}

export default AppointmentForm; 