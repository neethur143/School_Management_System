import React from 'react';
import Navbar from '../Navbar'; 
import AdminSideBar from './SideBar';
import StudentDetails from './ViewStudent';
import { Outlet } from 'react-router-dom';
import AddTeacher from './AddTeacher';
import AddStudent from './AddStudent';
import ViewTeacher from './ViewTeacher';
import ViewClass from './ViewClass';
import ViewStandard from './ViewStandard';
import ViewSubject from './ViewSubject';
import AddExam from './AddExam';
import ViewExam from './ViewExam';
import Communication from './Announcement';
import ScheduleClass from './ScheduleClass';
import ViewScheduleClass from './ViewClassSchedule';

function Dashboard() {
    return (
        <div className="container-fluid">
            <div className="row">
              <AdminSideBar/>
                <main className="col-md-9 ms-sm-auto col-lg-10 px-0">
                    {/* <Navbar /> */}
                    {/* <AddTeacher/> */}
                    <AddStudent/>
                    {/* <ViewTeacher/> */}
                    {/* <StudentDetails/> */}
                    {/* <ViewClass/> */}
                    {/* <ViewStandard/> */}
                    {/* <ViewSubject/> */}
                    {/* <AddExam/> */}
                    {/* <ViewExam/> */}
                    {/* <Communication/> */}
                    {/* {<ScheduleClass/>} */}
                    {/* <ViewScheduleClass/> */}
                    <div className="container">
                      <Outlet/>                      
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;
