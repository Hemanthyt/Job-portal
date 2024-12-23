import React, { useContext, useEffect, useState } from "react";
import { manageJobsData } from "../assets/assets";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import Loading from "../components/Loading";

const ManageJobs = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState(false);
  const { backendUrl, companyToken } = useContext(AppContext);

  // Function to fetch company job data
  const fetchCompanyJobs = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/company/list-jobs", {
        headers: {
          token: companyToken,
        },
      });
      if (data.success) {
        setJobs(data.jobsData.reverse());
        console.log(data.jobsData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Function to change job functionality
  const changeJobStatus = async (id) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/company/change-visibility",
        { id },
        {
          headers: { token: companyToken },
        }
      );
      if (data.success) {
        toast.success("Job Visibility Changed Successfully");
        fetchCompanyJobs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (companyToken) {
      fetchCompanyJobs();
    }
  }, [companyToken]);

  return jobs ? (
    jobs.length === 0 ? (
      <div className="flex items-center justify-center h-[70vh]">
        <p className=" text-xl sm:text-2xl">No Job is Posted or Available</p>
      </div>
    ) : (
      <div className=" container p-4 max-w-5xl">
        <div className=" overflow-x-auto">
          <table className=" min-w-full bg-white border border-gray-200 max-sm:text-sm">
            <thead>
              <tr className="">
                <th className="px-4 py-2 text-left border-b max-sm:hidden">
                  #
                </th>
                <th className="px-4 py-2 text-left border-b ">Job Title</th>
                <th className="px-4 py-2 text-left border-b max-sm:hidden">
                  Date
                </th>
                <th className="px-4 py-2 text-left border-b max-sm:hidden">
                  Location
                </th>
                <th className="px-4 py-2 text-left border-b">Applicants</th>
                <th className="px-4 py-2 text-left border-b">Visible</th>
              </tr>
            </thead>
            <tbody>
              {jobs &&
                jobs.map((job, index) => (
                  <tr key={index} className=" text-gray-700">
                    <td className="px-4 py-2 text-left border-b">
                      {index + 1}
                    </td>
                    <td className="px-4 py-2 text-left border-b">
                      {job.title}
                    </td>
                    <td className="px-4 py-2 text-left border-b">
                      {moment(job.date).format("ll")}
                    </td>
                    <td className="px-4 py-2 text-left border-b">
                      {job.location}
                    </td>
                    <td className="px-4 py-2 text-left border-b">
                      {job.applicants}
                    </td>
                    <td className="px-4 py-2 text-left border-b">
                      <input
                        className=" scale-125 ml-4 h-5 w-5 border rounded-md "
                        type="checkbox"
                        checked={job.visible}
                        onChange={() => {
                          changeJobStatus(job._id);
                        }}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="ml-4 mt-4 flex justify-end">
          <button
            onClick={() => navigate("/dashboard/add-job")}
            className=" bg-black text-white px-4 py-2 rounded"
          >
            Add new job
          </button>
        </div>
      </div>
    )
  ) : (
    <Loading />
  );
};

export default ManageJobs;
