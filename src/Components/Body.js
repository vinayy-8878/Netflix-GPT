import React, { useEffect } from 'react';
import Login from './Login';
import Browse from './Browse';
import {RouterProvider} from 'react-router-dom';
import {createBrowserRouter} from 'react-router-dom';
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import {useDispatch} from 'react-redux'
import {addUser, removeUser} from '../utils/userSlice'
// import {useNavigate} from 'react-router-dom'
const Body = () => {
  // const navigate=useNavigate();
    // const dispatch=useDispatch();
  //  const navigate=useNavigate();
    const appRouter=createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>
        }
    ])
   
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body