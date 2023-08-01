import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from './HomePage'
import Login from './Login/Login'
import Register from './Registration/Register'
import Contact from './Contact/Contact'
import HealthInfo from './HealthInfo/HealthInfo'
import UserProfile from './UserProfile/UserProfile'
import Profile from './Profile/Profile'
import Plane from './PersonalizedFitnessPlans/Plane'
import MealPlanner from './MealPlanner/MealPlanner'
const Pages = () => {
  return (
   
    <Routes>

<Route path='/' element={<HomePage/>} />
<Route path='/login' element={<Login/>} />
<Route path='/register' element={<Register/>} />
<Route path='/contact' element={<Contact/>} />
<Route path='/health' element={<HealthInfo/>} />
<Route path='/userprofile' element={<UserProfile/>} />
<Route path='/profile' element={<Profile/>} />
<Route path='/plane' element={<Plane/>} />
<Route path='/meals' element={<MealPlanner/>} />
    </Routes>



  )
}

export default Pages