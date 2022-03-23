import React from 'react'
import useAxios from 'axios-hooks'
import AxiosContainer from '../components/AxiosContainer';
import StringifyJSON from '../components/StringifyJSON';

const Appointments = ()=>{
  const [{data, loading, error}, refetch] = useAxios('/api/appointments');
    return (
        <AxiosContainer title={"Appointments"} loading={loading} error={error}>
        <StringifyJSON json={data}/>
        </AxiosContainer>

    )
}

export default Appointments; 