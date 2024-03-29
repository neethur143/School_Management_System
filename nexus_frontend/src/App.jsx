// App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard/AdminDashboard/Dashboard';
import StudentDashboard from './pages/Dashboard/StudentDashboard/Student_dashboard';
import TeacherDashboard from './pages/Dashboard/TeacherDashboard/Teacher_Dashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Header from './component/Header';
import { StudentContext } from './pages/Dashboard/StudentDashboard/StudentContext';

import React, { useState } from 'react';
import { TeacherContext } from './pages/Dashboard/TeacherDashboard/TeacherContext';
import ForgotPassword from './pages/Forgot';


function App() {
  const [loggedInStudentId, setLoggedInStudentId] = useState(null);
  const [loggedInTeacherId, setLoggedInTeacherId] = useState(null);
  

  return (
     <StudentContext.Provider value={{ loggedInStudentId, setLoggedInStudentId }}>
    <TeacherContext.Provider value={{ loggedInTeacherId, setLoggedInTeacherId }}>
    <Router>
      <Routes>
      <Route path='/' element={<Header/>}>
          <Route index element={<Home />} />
          <Route path='signin' element={<SignIn/>} />
          <Route path='forgotpassword' element={<ForgotPassword/>} />
          <Route path='signup' element={<SignUp/>} />
          <Route path='aboutus' element={<AboutUs/>}/>
          <Route path='contactus' element={<ContactUs/>}/>
        </Route>
        {/* <Route path="/*" element={<Home />} /> */}
        <Route path="/admin/*" element={<Dashboard/>} />
        <Route path="/student/*" element={<StudentDashboard/>} />
        <Route path="/teacher/*" element={<TeacherDashboard/>} />
      </Routes>
    </Router>
    </TeacherContext.Provider>
    </StudentContext.Provider>
  );
}

export default App;
