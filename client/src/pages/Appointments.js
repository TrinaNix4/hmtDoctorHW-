import React from 'react'
import useAxios from 'axios-hooks'
import AxiosContainer from '../components/AxiosContainer';
import StringifyJSON from '../components/StringifyJSON';
import AppointmentForm from '../components/AppointmentForm';

const Appointments = ()=>{
  const [{data, loading, error}, refetch] = useAxios('/api/appointments');
    return (
        <div>
        <AppointmentForm />
        <AxiosContainer title={"Appointments"} loading={loading} error={error}>
        <StringifyJSON json={data}/>
        </AxiosContainer>
</div>
    )
}

export default Appointments; 

//get a list of patients
//get a list of physicians
//select 1 of each and give it an appointment date