import { useEffect } from "react"

//TODO convert to hook 
const [data, setData] = useState(true)
const [loading, setLoading] = useState(null)
useEffect(()=>{
  getData()
})

const getData = async () => {
  setLoading(true)
  try{
    let res = await axios.get('url')
    setData(res.data)
    setLoading(false)
  } catch(error){
    setError(error)
    setLoading(false)
  }
}