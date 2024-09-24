import React from 'react';
import { Route, Routes } from 'react-router-dom';  
import Login from '../pages/Login';
import PublicRoute from './PublicRoute';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import Users from '../pages/Users';
import Courselist from '../pages/Courseslist/Courselist';
import Attadance from '../pages/Attandance/Attadance';
import Studentlist from '../pages/Studentlist/Studentlist';
import ClassTimings from '../pages/ClassTimings/ClassTimings';
import Register from '../pages/Registeration/Register';
import Demo from '../pages/Demos/Demo';
import Payment from '../pages/Payments/Payment';
import Settings from '../pages/Settings/Settings';
import Followup from '../pages/Followups/Followup';

 
const AppRoutes = () => {
  return (
    <Routes> 
      <Route path='/' element={<PublicRoute />}>
        <Route index element={<Login />} />
      </Route>
      <Route path='/' element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/courses-list" element={<Courselist />}></Route>
        <Route path="/attendance" element={<Attadance />}></Route>
        <Route path="/students-list" element={<Studentlist />}></Route>
        <Route path="/class-timings" element={<ClassTimings />}></Route>
        <Route path='/registration-form' element={<Register />} ></Route>
        <Route path='/demos' element={<Demo />} ></Route>
        <Route path='/payments' element={<Payment />}></Route>
        <Route path='/settings' element={<Settings />}></Route>
        <Route path='/followups' element={<Followup />}></Route>
        <Route path="*" element={<NotFound />} /> 
      </Route>
    </Routes>
  );
};

export default AppRoutes;
