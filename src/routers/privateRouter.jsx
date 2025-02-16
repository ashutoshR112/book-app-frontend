import React from 'react'
import { UseAuth } from '../context/AuthContext'
import {Navigate} from 'react-router-dom';

function PrivateRouter({children}) {
    const {currentUser}=UseAuth();
    if(currentUser){
        return children;
    }else{
        return <Navigate to="/login" replace/>
    }

}

export default PrivateRouter;