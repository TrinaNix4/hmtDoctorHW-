import React from 'react'
import useAxios from 'axios-hooks'

                            //(props)
const AxiosContainer = ({title, loading, error, children} )=>{
  if(loading)return <p>Loading</p>
  if(error)return <p>ERROR</p>
    return (
        <div>
        <h1>{title}</h1>
          {children}
        </div>
    )
}

export default AxiosContainer; 