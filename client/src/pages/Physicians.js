import React from 'react'
import useAxios from 'axios-hooks'
import AxiosContainer from '../components/AxiosContainer';
import StringifyJSON from '../components/StringifyJSON';

const Physicians = ()=>{
  const [{data:physicians, loading, error}, refetch] = useAxios('/api/physicians');
    return (
        <AxiosContainer title={"Physicians"} loading={loading} error={error}>
        <StringifyJSON json={physicians}/>
        </AxiosContainer>

    )
}

export default Physicians; 