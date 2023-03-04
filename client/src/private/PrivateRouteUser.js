import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import User from '../views/User';
import Home from '../views/Home';

export const PrivateRouteUser = () => {

  const isLoggedIn = useSelector(state => state.isLoggedIn)


  return isLoggedIn ? <User/> : <Home />
};