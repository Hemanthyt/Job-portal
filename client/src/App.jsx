import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Applications from "./pages/Applications";
import ApplyJob from "./pages/ApplyJob";
import RecuriterLogin from "./components/RecuriterLogin";
import { AppContext } from "./context/AppContext";
import Dashboard from "./pages/Dashboard";
import AddJob from "./pages/AddJob";
import ManageJobs from "./pages/ManageJobs";
import ViewApplications from "./pages/ViewApplications";
import "quill/dist/quill.snow.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const { showRecruiterLogin, companyToken } = useContext(AppContext);
  return (
    <div>
      {showRecruiterLogin && <RecuriterLogin />}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
        <Route path="/dashboard" element={<Dashboard />}>
          {companyToken ? (
            <>
              <Route path="add-job" element={<AddJob />} />
              <Route path="manage-jobs" element={<ManageJobs />} />
              <Route path="view-applications" element={<ViewApplications />} />
            </>
          ) : null}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
