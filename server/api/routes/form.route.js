import express from "express";
import { formInput, testing } from "../controllers/form.controller.js";

const router = express.Router();

// router.post("/form", formInput);
router.post("/form", formInput);
router.post("/test", testing);

export default router;
