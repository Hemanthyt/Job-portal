import React from "react";
import { manageJobsData } from "../assets/assets";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const ManageJobs = () => {
  const navigate = useNavigate();

  return (
    <div className=" container p-4 max-w-5xl">
      <div className=" overflow-x-auto">
        <table className=" min-w-full bg-white border border-gray-200 max-sm:text-sm">
          <thead>
            <tr className="">
              <th className="px-4 py-2 text-left border-b max-sm:hidden">#</th>
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
            {manageJobsData.map((job, index) => (
              <tr key={index} className=" text-gray-700">
                <td className="px-4 py-2 text-left border-b">{index + 1}</td>
                <td className="px-4 py-2 text-left border-b">{job.title}</td>
                <td className="px-4 py-2 text-left border-b">
                  {moment(job.date).format("ll")}
                </td>
                <td className="px-4 py-2 text-left border-b">{job.location}</td>
                <td className="px-4 py-2 text-left border-b">
                  {job.applicants}
                </td>
                <td className="px-4 py-2 text-left border-b">
                  <input
                    className=" scale-125 ml-4 h-5 w-5 border rounded-md "
                    type="Checkbox"
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
  );
};

export default ManageJobs;
