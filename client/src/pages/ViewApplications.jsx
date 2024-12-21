import React from "react";
import { assets, viewApplicationsPageData } from "../assets/assets";

const ViewApplications = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="">
        <table className=" w-full max-w-4xl bg-white border border-gray-200 max-sm:text-sm">
          <thead>
            <tr className=" border-b">
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">User Name</th>
              <th className="px-4 py-2 text-left max-sm:hidden">Job Title</th>
              <th className="px-4 py-2 text-left max-sm:hidden">Location</th>
              <th className="px-4 py-2 text-left">Resume</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {viewApplicationsPageData.map((data, index) => (
              <tr className=" text-gray-700" key={index}>
                <td className="px-4 py-2 text-center border-b">{index + 1}</td>
                <td className="px-4 py-2 text-center border-b flex items-center">
                  <img
                    className=" w-10 h-10 rounded-full mr-3 max-sm:hidden"
                    src={data.imgSrc}
                    alt=""
                  />
                  <span>{data.name}</span>
                </td>
                <td className="px-4 py-2 max-sm:hidden border-b">
                  {data.jobTitle}
                </td>
                <td className="px-4 py-2 max-sm:hidden border-b">
                  {data.location}
                </td>
                <td className="px-4 py-2 text-center border-b">
                  <a
                    href=""
                    target="_blank"
                    className=" bg-blue-100 text-blue-300 px-3 py-1 rounded inline-flex gap-2 items-center"
                  >
                    Resume <img src={assets.resume_download_icon} alt="" />
                  </a>
                </td>
                <td className="px-4 py-2 relative border-b">
                  <div className="relative inline-block text-left group">
                    <button className=" text-gray-500 action-button">
                      ...
                    </button>
                    <div className="z-10 hidden absolute right-0 md:left-0  border border-gray-300 top-0 mt-2 w-32 bg-white rounded shadow group-hover:block">
                      <button className="block w-full text-left px-4 py-2 text-blue-500 hover:bg-gray-100">
                        Accept
                      </button>
                      <button className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">
                        Reject
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
