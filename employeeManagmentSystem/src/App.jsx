import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalstorage, setLocalstorage } from './utils/LocalStorage'

const App = () => {

  useEffect(() => {
    // setLocalstorage()
    getLocalstorage()
  }, [])
  

  return (
    <>
    <Login/>
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    </>
  )
}

export default App