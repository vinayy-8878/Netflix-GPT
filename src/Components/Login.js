import React, { useRef, useState } from 'react'
import Header from './Header'
// import { auth } from '../utils/firebase';
import { checkValidData } from '../utils/validate';
import {updateProfile, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom'
import { auth } from '../utils/firebase'
import {useDispatch} from 'react-redux'
import {addUser} from '../utils/userSlice'
import { userAvatar } from '../utils/Constants';
const Login = () => {
  const dispatch=useDispatch();
    const [isSignInForm,setIsSignInForm]=useState(true);
   const email=useRef(null);
   const name=useRef(null);
   const navigate=useNavigate();
   const [errorMessage,setErrorMessage]=useState(null)
   const password=useRef(null);
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
        setErrorMessage(null);
    };
    const handleButtonClick=()=>{
      // console.log(email.current.value);
      // console.log(password.current.value)
      // const message= {!isSignInForm?checkValidData(email.current.value,password.current.value, name.current?.value):checkValidData(email.current.value,password.current.value)}
      const message = !isSignInForm ? checkValidData(email.current.value, password.current.value, name.current?.value) : checkValidData(email.current.value, password.current.value,null);

      setErrorMessage(message)
      if(message) return;
  if(!isSignInForm){
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      
      const user = userCredential.user;
  //  console.log(user)
  updateProfile(user, {
    displayName: name.current.value, photoURL:userAvatar
  }).then(() => {
    const {uid,email,displayName,photoURL} = auth.currentUser;
    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
    //  navigate('/browse');
  }).catch((error) => {
     setErrorMessage(error.message)
  });
 
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // setErrorMessage(errorCode + " "+ errorMessage)
    if(errorCode==='auth/email-already-in-use'){
      setErrorMessage('User already exists')
    }
    });
  }
  else{
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate('/browse');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // setErrorMessage(errorCode + "--- "+ errorMessage)
    if(errorCode==='auth/invalid-credential'){
      setErrorMessage('User does not exist')
    }
  });

  }
    }
  return (
    <div>
        <Header/>
    <div className='absolute'>
    <img src='	https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='bgImage'/>
    </div>
    <form onSubmit={(e)=>e.preventDefault()} className='rounded-lg bg-opacity-80 text-white w-4/12 my-36 mx-auto right-0 left-0 absolute p-12 bg-black'>
       <h1 className='font-bold text-3xl py-4'>{isSignInForm?'Sign In':'Sign Up'}</h1>
        {!isSignInForm && <input ref={name}  type='text' placeholder='Full Name' className='w-full my-4 p-4 bg-gray-700' />}
        <input ref={email} type='text' placeholder='Email Address' className='w-full my-4 p-4 bg-gray-700' />
        <input ref={password} type='text' placeholder='Password' className='w-full my-4 p-4 bg-gray-700 '/>
        <p className='font-bold text-red-500'>{errorMessage}</p>
      <button onClick={handleButtonClick} className='w-full p-4 my-6 bg-red-700'>{isSignInForm?'Sign In':'Sign Up'}</button>
    <p   className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?'New to Netflix? Sign Up Now':'Already registered? Sign In Now'}</p> 
    </form>
    </div>
  )
}

export default Login