import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuthContext } from './contexts/Auth'
export default function PrivateRoute({children}) {
    const {currentUser} = useAuthContext()
    console.log(currentUser)
    return (
       <Route>
           {!!currentUser ? children : <Redirect to='/login'/>}
       </Route>
    )
}
