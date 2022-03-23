
import React from 'react'
import useAxios from 'axios-hooks'
import AxiosContainer from '../components/AxiosContainer';
import StringifyJSON from '../components/StringifyJSON';


const Patients = ()=>{
  const [{data, loading, error}, refetch] = useAxios('/api/patients');
    return (
        <AxiosContainer title={"Patients"} loading={loading} error={error}>
        <StringifyJSON json={data}/>
        </AxiosContainer>

    )
}

export default Patients; 