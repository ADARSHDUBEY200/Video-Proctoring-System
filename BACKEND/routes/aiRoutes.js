const express = require("express");
const router = express.Router();
const {InterviewResult} = require("../controllers/AiControllers.js")


router.post("/result", InterviewResult);

module.exports = router;