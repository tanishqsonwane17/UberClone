import React,{useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {UserDataContext} from '../Context/UserContext'

export const UserProtectedWrapper = ({
    children
}) => {


    const token = localStorage.getItem('token')
    const navigate = useNavigate();

   
   
   
    useEffect(() => {
        if(!token){
         navigate('/login')
        }
    })
  return (
    <div>{children}</div>
  )
}
