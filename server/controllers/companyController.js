import Company from "../models/Company.js";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import generateToken from "../utils/generateToken.js";
import Job from "../models/Job.js";
import { messageInRaw } from "svix";
import JobApplication from "../models/jobApplication.js";

// Register a new COmpany
export const registerCompany = async (req, res) => {
  const { name, email, password } = req.body;
  const imageFile = req.file;

  if (!name || !password || !email || !imageFile) {
    return res.json({ success: false, message: "Missing Details" });
  }
  //   if (!validator.isEmail(email)) {
  //     return res.json({
  //       success: false,
  //       message: "Please Enter a valid email",
  //     });
  //   }
  //   if (password.length < 8) {
  //     return res.json({
  //       success: false,
  //       message: "Password must be at least 8 characters",
  //     });
  //   }
  try {
    const companyExists = await Company.findOne({ email });
    if (companyExists) {
      return res.json({
        success: false,
        message: "Company already registered",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const imageUpload = await cloudinary.uploader.upload(imageFile.path);
    const company = await Company.create({
      name,
      email,
      password: hashedPassword,
      image: imageUpload.secure_url,
    });
    res.json({
      success: true,
      company: {
        _id: company._id,
        name: company.name,
        email: company.email,
        image: company.image,
      },
      token: generateToken(company._id),
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Login a company
export const loginCompany = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  if (!email || !password) {
    return res.json({
      success: false,
      message: "Please enter both email and password",
    });
  }

  try {
    const company = await Company.findOne({ email });
    if (!company) {
      return res.json({
        success: false,
        message: "Company not found",
      });
    }
    const isMatch = await bcrypt.compare(password, company.password);
    if (isMatch) {
      return res.json({
        success: true,
        company: {
          _id: company._id,
          name: company.name,
          email: company.email,
          image: company.image,
        },
        token: generateToken(company._id),
      });
    } else {
      return res.json({
        success: false,
        message: "Invalid password",
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Get company data

export const getCompanyData = async (req, res) => {
  try {
    const company = req.company;
    res.json({ success: true, company });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Post a new job
export const postJob = async (req, res) => {
  const { title, description, location, salary, category, level } = req.body;
  const companyId = req.company._id;
  try {
    const newJob = new Job({
      title,
      description,
      location,
      salary,
      companyId,
      date: Date.now(),
      category,
      level,
    });
    (await newJob).save();
    return res.json({
      success: true,
      newJob,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Getcompany job applicants

export const getCompanyJobApplicants = async (req, res) => {
  try {
    const companyId = req.company._id;
    // Find job applications for user and populate related data
    const applications = await JobApplication.find({ companyId })
      .populate("userId", "name image resume")
      .populate("jobId", "title location category salary level")
      .exec();
    return res.json({
      success: true,
      applications,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Get company posted jobs
export const getCompanyPostedJobs = async (req, res) => {
  try {
    const companyId = req.company._id;
    const jobs = await Job.find({ companyId });
    // Adding No.of applicants info to data
    const jobsData = await Promise.all(
      jobs.map(async (job) => {
        const applicants = await JobApplication.find({ jobId: job._id });
        return { ...job.toObject(), applicants: applicants.length };
      })
    );
    res.json({
      success: true,
      jobsData,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Change Jobs Application Status
export const ChangeJobApplicationsStatus = async (req, res) => {
  try {
    const { id, status } = req.body;
    // Find Job id and update status
    const jobApplication = await JobApplication.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        status,
      }
    );
    res.json({
      success: true,
      message: "Job Application Status Updated Successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Change job visibility
export const ChangeVisibility = async (req, res) => {
  try {
    const { id } = req.body;
    const companyId = req.company._id;
    const job = await Job.findById(id);
    if (companyId.toString() === job.companyId.toString()) {
      job.visible = !job.visible;
    }
    await job.save();
    res.json({
      success: true,
      job,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
