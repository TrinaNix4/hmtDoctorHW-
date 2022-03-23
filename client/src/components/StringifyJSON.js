import React from 'react'
import useAxios from 'axios-hooks'
import AxiosContainer from '../components/AxiosContainer';

const StringifyJSON = ({json})=>{
 
    return <div> {JSON.stringify(json)}</div>;
};


export default StringifyJSON; 