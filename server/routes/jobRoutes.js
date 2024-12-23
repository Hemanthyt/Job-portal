import express from "express";
import { getAllJobs, getJobById } from "../controllers/jobController.js";

const jobRouter = express.Router();

jobRouter.get("/", getAllJobs);
jobRouter.get("/:id", getJobById);

export default jobRouter;
