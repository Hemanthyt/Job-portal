import React, { useEffect, useRef } from "react";
import { useState } from "react";

import Quill from "quill";
import { JobCategories, JobLocations } from "../assets/assets";

const AddJob = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("Bangalore");
  const [category, setCategory] = useState("Programming");
  // const [description, setDescription] = useState('');
  const [level, setLevel] = useState("Beginner Level");
  const [salary, setSalary] = useState(0);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    // Initialize qull only place
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
    return () => {};
  }, []);

  return (
    <form
      action=""
      className=" container p-4 flex flex-col w-full items-start gap-3"
    >
      <div className=" w-full">
        <p className=" mb-2">Job Title</p>
        <input
          type="text"
          placeholder="Type Here"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
          className=" w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded"
        />
      </div>
      <div className=" w-full max-w-lg">
        <p className="mb-2">Job Description</p>
        <div className="" ref={editorRef}></div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div className="">
          <p className="mb-2">Job Category</p>
          <select
            className=" w-full px-3 py-2 border-2 border-gray-300 rounded"
            onChange={(e) => setCategory(e.target.value)}
          >
            {JobCategories.map((category, index) => {
              return (
                <option key={index} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>
        <div className="">
          <p className="mb-2">Job Location</p>
          <select
            className=" w-full px-3 py-2 border-2 border-gray-300 rounded"
            onChange={(e) => setLocation(e.target.value)}
          >
            {JobLocations.map((location, index) => {
              return (
                <option key={index} value={location}>
                  {location}
                </option>
              );
            })}
          </select>
        </div>
        <div className="">
          <p className="mb-2">Job Level</p>
          <select
            className=" w-full px-3 py-2 border-2 border-gray-300 rounded"
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="Beginner level">Beginner Level</option>
            <option value="Intermediate level">Intermediate Level</option>
            <option value="Senior level">Senior Level</option>
          </select>
        </div>
      </div>
      <div className="">
        <p className="mb-2">Job Salary</p>
        <input
          min={0}
          type="Number"
          placeholder="2500"
          onChange={(e) => setSalary(e.target.value)}
          value={salary}
          required
          className=" w-full px-3 py-2 border-2 border-gray-300 rounded sm:w-[120px]"
        />
      </div>
      <button
        className="w-28 mt-4 py-3 bg-black text-white rounded"
        type="submit"
      >
        ADD
      </button>
    </form>
  );
};

export default AddJob;
