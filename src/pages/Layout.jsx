import React, { useEffect, useState } from 'react'
import { routeAuth, routePage } from '../utils/Routelist'
import Header from '../components/header/Header';
import { Navigate, Route, Routes } from 'react-router-dom';

const Layout = () => {
  const user = localStorage.getItem('accessToken')

  return (
    <div>
     <Header />
     <Routes>
      {
        user && (
          routePage.map(item => {
            if(item.auth){
              return (
                <Route path={item.path} element={<item.element />} key={item.id}/>
              )
            }
          })
        )
      }
      {
        !user && (
          routeAuth.map(item => {
            if(item.auth){
              return false
            }

            return(
              <Route path={item.path} element={<item.element />} key={item.id}/>
            )
          })
        )
      }
      <Route path='*' element={<Navigate to={user ? '/ ' : 'authorization'}/>}/>
     </Routes>
    </div>
  )
}

export default Layout