import React from 'react'
import useAxios from 'axios-hooks'
import Card from './Card'
import Spinner from './common/Spinner'


                               //(props)
const AxiosContainer = ({title, loading, error, children} )=>{
  
  const renderBody = ()=> {
  
  if(loading)return <p>{Spinner()}Loading...</p>
  if(error)return <p>ERROR</p>
  return children
  }
    return (
        <Card>
        {/* uncomment to view spinner for development */}
     {/* <p>{Spinner()}</p>  */}
        <h1>{title}</h1>
         {renderBody()}
        </Card>
    )
}

export default AxiosContainer; 

