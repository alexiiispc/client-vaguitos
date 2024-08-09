import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {

  const navigate = useNavigate()

  useEffect(() => {
    
    if (localStorage.getItem("uid")==null) {
      navigate("/auth/login")
    }
    
  }, [])
  
  
  return (
    <div>home</div>
  )
}

export default Home