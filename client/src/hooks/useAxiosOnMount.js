import { useState, useEffect } from "react"
import axios from "axios"

//if you want to use this, you need to give a valid url 
const useAxiosOnMount = (url) => {
const [response, setResponse] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)

useEffect(()=>{
  getResponse(); 
}, [])

const getResponse = async () => {
  setError(null);
  try{
    let res = await axios.get(url)
    setResponse(res)
    setLoading(false)
  } catch(error){
    setError(error)
    setLoading(false)
  }
}
//use our hooks (in another component )
//const {response, loading, error} = useAxiosOnMount('api/things')
return {response, loading, error} 
}; 

export default useAxiosOnMount; 
//then can use loading error and response to do stuff. 
//use our state to render what is going on 
// if(loading) return <p>loading</p>
// if(error) return <p>error</p>
// return ( 
//   <div>
//     <h1>Physicians</h1>
//     <p>{JSON.stringify(physicians)}</p>
//   </div>
// )

//GENERIC 
// load data on mount will work for any thing that gets
//data on mount

//1. import tools 
// import {useState, useEffect} from 'react'
// import axios from 'axios'

//2. set up state tool
//const [response, setResponse] = =useState(null) 
//const [loading, setLoading] = useState(null)
//const [error, setError] = useState(null)
//put null because not sure what the data will be 

//3. doing axios calling and updating state 
// const getData = async () => {
//   setLoading(true)
//   try{
//     let res = await axios.get('url')
//     setData(res.data)
//     setLoading(false)
//   } catch(error){
//     setError(error)
//     setLoading(false)
//   }
// }