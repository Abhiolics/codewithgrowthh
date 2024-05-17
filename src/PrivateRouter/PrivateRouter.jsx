
import React, { useContext } from 'react'
import { AuthContext } from '../contexts/Authprovider'
import { Navigate, useLocation } from 'react-router-dom'
import Loading from '../components/Loading'


const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return (
            <Loading/>
        )
    }

    if(user) {
        return children;
    }

  return (
   <Navigate to="/signup" state={{from: location}} replace></Navigate>
  )   //yah signup tha
}

export default PrivateRouter