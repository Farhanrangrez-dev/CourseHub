import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import Home from "./authtication/Home";
import { useState } from "react";

import Login from "./authtication/Login";
import Dashboard from "./components/dashbord/Dashbord";
import ChatBox from "./components/CommunicationFollowupManagement/ChatBox";
import Contract from "./components/Lead & Inquiry Management/Contract";
import Profile from "./components/Profile/Profile";
import StudentDetailsPage from "./components/Profile/StudentDetailsPage";
import Lead from "./components/Lead & Inquiry Management/Lead";
import Deal from "./components/Lead & Inquiry Management/Deal";
import AdmissionNew from "./components/AdmissionTracking/AdmissionNew";
import ProfileDetails from "./components/Profile/ProfileDetails";
import LeadInquiryManagement from "./components/Lead & Inquiry Management/LeadInquiryManagement";
import StudentDetails from "./components/Profile/StudentDetails";
import AdmissionTracking from "./components/AdmissionTracking/AdmissionTracking";
import TaskCalendarManagement from "./components/Task Calendar Management/TaskCalendarManagement";

import PaymentInvoiceManagement from "./components/PaymentInvoiceManagement/PaymentInvoiceManagement";
import ReportingAnalytics from "./components/ReportingAnalytics/ReportingAnalytics";
import UserRolesAccessControl from "./components/UserRolesAccessControl/UserRolesAccessControl";
import CommunicationFollowupManagement from "./components/CommunicationFollowupManagement/CommunicationFollowupManagement";
import Inquriy from "./components/Lead & Inquiry Management/Inquriy";
import ApplicationTracker from "./components/AdmissionTracking/ApplicationTracker";
import DocumentUpload from "./components/AdmissionTracking/DocumentUpload";
import UniversitySubmissions from "./components/AdmissionTracking/UniversitySubmissions";
import AdmissionDecisions from "./components/AdmissionTracking/AdmissionDecisions";
import FollowUpScheduling from "./components/CommunicationFollowupManagement/FollowUpScheduling";
import AutomatedReminders from "./components/CommunicationFollowupManagement/AutomatedReminders";
import ManaDetails from "./components/Profile/ManaDetails";
import AddCounselor from "./components/Task Calendar Management/AddCounselor";
import TaskAssignment from "./components/Task Calendar Management/TaskAssignment";
import TaskReminder from "./components/Task Calendar Management/TaskReminder";
import RolesManagement from "./components/CourseUniversityDatabase/RolesManagement";
import PermissionsTable from "./components/CourseUniversityDatabase/permissionsData";
import CourseUniversityDatabase from "./components/CourseUniversityDatabase/CourseUniversityDatabase";
import StudentProfile from "./components/Profile/Dashboard";
import StudentUniversity from "./components/PaymentInvoiceManagement/StudentUniversity";
import Councelor from "./components/dashbord/Councelor";
// import LandingPage from "./components/landingpage/landingPage";
import CounselorTask from "./components/Lead & Inquiry Management/CouncelorTask";
import StatusTracking from "./components/Lead & Inquiry Management/StatusTracking";
import AdminStatus from "./components/Lead & Inquiry Management/AdminStatus";
import { LeadProvider } from "./context/LeadContext";
import LeadCouncelor from "./components/Lead & Inquiry Management/LeadCouncelor";
import UniversityCards from "./components/PaymentInvoiceManagement/UniversityCards";
import HungryUniversity from "./components/universityPagesform/HungryUniversity";
import WekerleUniversity from "./components/universityPagesform/WekerleUniversity";
import BmuUniversity from "./components/universityPagesform/BmuUniversity";
import DebrecenUniversity from "./components/universityPagesform/DebrecenUniversity";
import GyorUniversity from "./components/universityPagesform/GyorUniversity";


function App() {
  //show details to admin
  const [login, setLogin] = useState(null);

  const handleAdmin = () => {
    setLogin("admin");
  };

  const handleStudent = () => {
    setLogin("student");
  };

  const handleCounselor = () => {
    setLogin("counselor");
  };
  // counseler
  const [counselors, setCounselors] = useState([]);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
    },
  ]);

  const handleAddCounselor = (name) => {
    setCounselors([...counselors, name]);
  };
  // console.log(counselors);

  const handleTaskAssign = (task) => {
    setTasks([...tasks, task]);
  };
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const menusidebarcollaps = () => {
    setIsSidebarCollapsed(true);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };
  const location = useLocation();

  const hideLayout =
    location.pathname === "/" || location.pathname === "/login";
  return (
    <>
     

    

      {/* navbar */}
      {!hideLayout && <Navbar toggleSidebar={toggleSidebar} />}
      {/* navbar end */}
      {/* sidebar start */}
      <div className={`main-content ${hideLayout ? "full-width" : ""}`}>
        {!hideLayout && (
          <Sidebar
            collapsed={isSidebarCollapsed}
            menuItemClick={menusidebarcollaps}
            login={login}
            toggleSidebar={toggleSidebar}
          />
        )}
        {/* sidebar end */}
        {/* right side  */}
        <div
          className={`right-side-content ${
            hideLayout ? "full-width" : isSidebarCollapsed ? "collapsed" : ""
          }`}
          style={hideLayout ? { marginTop: "0", paddingLeft: "0" } : {}}
        >
          <LeadProvider>




            <Routes>
      
    {/* this is VB routes for all the university  */}
    
      <Route path="/HungryUniversity" element={<HungryUniversity/>}></Route>
      <Route path="/BmuUniversity" element={<BmuUniversity/>}></Route>
      <Route path="/DebrecenUniversity" element={<DebrecenUniversity />}></Route>
      <Route path="/WekerleUniversity" element={< WekerleUniversity/>}></Route>
      <Route path="/GyorUniversity" element={<GyorUniversity />}></Route>



       
              {/* login signup */}
              <Route
                path="/login"
                element={
                  <Login
                    login={login}
                    setLogin={setLogin}
                    handleAdmin={handleAdmin}
                    handleStudent={handleStudent}
                    handleCounselor={handleCounselor}
                  />
                }
              />
              {/* login signup */}
              <Route path="/" element={<Home></Home>}></Route>

              {/* dashbord */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route
                path="/councelor"
                element={<Councelor></Councelor>}
              ></Route>
              {/* student dashboard */}
              <Route
                path="/studentProfile"
                element={<StudentProfile></StudentProfile>}
              ></Route>
              {/* dashbord */}

              {/* LeadInquiryManagement */}
              {/* Inquriy */}
              <Route path="/inquiry" element={<Inquriy></Inquriy>}></Route>
              {/* lead   */}
              <Route path="/lead" element={<Lead></Lead>}></Route>

              {/* deal */}
              {/* <Route path="/deal" element={<Deal></Deal>}></Route> */}
              <Route path="/lead/:id" element={<Deal />} />

              <Route
                path="/leadCouncelor"
                element={<LeadCouncelor></LeadCouncelor>}
              ></Route>
              <Route
                path="/councelorTask"
                element={<CounselorTask></CounselorTask>}
              ></Route>
              <Route path="/contract" element={<Contract></Contract>}></Route>

              <Route
                path="/status"
                element={<StatusTracking></StatusTracking>}
              ></Route>

              <Route
                path="/adminstatus"
                element={<AdminStatus></AdminStatus>}
              ></Route>

              {/* student management */}
              <Route
                path="/studentDetails"
                element={<StudentDetails></StudentDetails>}
              ></Route>
              {/* student details page */}
              <Route
                path="/manaDetails"
                element={<ManaDetails></ManaDetails>}
              ></Route>

              {/* student addmission */}
              <Route
                path="/admission"
                element={<AdmissionNew></AdmissionNew>}
              ></Route>

              <Route
                path="/new"
                element={<AdmissionTracking></AdmissionTracking>}
              ></Route>
              {/* student detail single page */}
              <Route
                path="/studentProfile/:admissionNo"
                element={<StudentDetailsPage></StudentDetailsPage>}
              ></Route>

              {/* comunication */}
              <Route
                path="/communication"
                element={
                  <CommunicationFollowupManagement></CommunicationFollowupManagement>
                }
              ></Route>

              {/* ApplicationTracking */}
              <Route
                path="/tracker"
                element={<ApplicationTracker></ApplicationTracker>}
              ></Route>

              {/* university details */}
              <Route
                path="/university"
                element={<UniversitySubmissions></UniversitySubmissions>}
              ></Route>

              {/* Admission decisions */}
              <Route
                path="/applications"
                element={<AdmissionDecisions></AdmissionDecisions>}
              ></Route>
              <Route
                path="/AdmissionTracking"
                element={<AdmissionTracking />}
              />

              {/* follow up */}
              <Route
                path="/followup"
                element={<FollowUpScheduling></FollowUpScheduling>}
              ></Route>

              {/* automated reminder */}
              <Route
                path="/reminder"
                element={<AutomatedReminders></AutomatedReminders>}
              ></Route>

              {/* add councelor */}
              <Route
                path="/addcounselor"
                element={
                  <AddCounselor onAdd={handleAddCounselor}></AddCounselor>
                }
              ></Route>

              {/* tasks */}
              <Route
                path="/tasks"
                element={
                  <TaskAssignment
                    counselors={counselors}
                    tasks={tasks}
                    onTaskAssign={handleTaskAssign}
                  ></TaskAssignment>
                }
              ></Route>

              {/* reminder */}
              <Route
                path="/tasksreminder"
                element={<TaskReminder tasks={tasks}></TaskReminder>}
              ></Route>

              {/* roles permissions */}
              <Route path="/RolesManagement" element={<RolesManagement />} />

              <Route path="/permissions/:role" element={<PermissionsTable />} />

              {/* reports & analytics */}
              <Route
                path="/CourseUniversityDatabase"
                element={<CourseUniversityDatabase></CourseUniversityDatabase>}
              ></Route>

              {/* payment & invoices*/}
              <Route
                path="/ReportingAnalytics"
                element={<ReportingAnalytics />}
              />

              {/* PaymentInvoiceManagement */}
              <Route
                path="/UniversityCards"
                element={<UniversityCards></UniversityCards>}
              ></Route>
              <Route
                path="/PaymentInvoiceManagement"
                element={<PaymentInvoiceManagement />}
              />

              {/* chatbox route */}
              <Route path="/chatbox" element={<ChatBox />} />
            </Routes>
          </LeadProvider>
        </div>
        {/* right end  */}
      </div>
    </>
  );
}

export default App;
