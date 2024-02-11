// AdminDashboard.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminSideBar from './SideBar';
import AddStudent from './AddStudent';
import AddTeacher from './AddTeacher';
import ViewTeacher from './ViewTeacher';
import ViewClass from './ViewClass';
import ViewStandard from './ViewStandard';
import ViewSubject from './ViewSubject';
import ScheduleClass from './ScheduleClass';
import ViewScheduleClass from './ViewClassSchedule';
import AddExam from './AddExam';
import ViewExam from './ViewExam';
import Communication from './Announcement';
import StudentDetails from './ViewStudent';
import AddAttendanceTeacher from './AddAttendanceTeacher';
import ViewAttendance from './ViewAttendanceTeacher';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <AdminSideBar/>
      <section className='d-flex flex-column justify-content-center align-items-center'>
      <div className='col-md-9'>
      <div className=" admin-main-content ">
        <Routes>
          <Route path="/addStudent" element={<AddStudent/>} />
          <Route path="/viewStudent" element={<StudentDetails/>} />
          <Route path="/addTeacher" element={<AddTeacher/>} />
          <Route path="/viewTeacher" element={<ViewTeacher/>} />
          <Route path="/viewClass" element={<ViewClass/>}/>
          <Route path="/viewStandard" element={<ViewStandard/>}/>
          <Route path="/viewSubject" element={<ViewSubject/>}/>
          <Route path="/AddAttendanceTeacher" element={<AddAttendanceTeacher/>}/>
          <Route path="/viewAttendanceTeacher" element={<ViewAttendance/>}/>
          <Route path="/Scheduleclass" element={<ScheduleClass/>}/>
          <Route path="/viewScheduleclass" element={<ViewScheduleClass/>}/>
          <Route path="/addExam" element={<AddExam/>}/>
          <Route path="/viewExam" element={<ViewExam/>}/>
          <Route path="/Communication" element={<Communication/>}/>       
        </Routes>
      </div>
      </div>
      </section>
     </div>
  );
}

export default AdminDashboard;
