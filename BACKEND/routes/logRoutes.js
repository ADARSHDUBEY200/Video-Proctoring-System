const express = require("express");
const { logSave } = require("../controllers/logControllers");
const router = express.Router();


router.post("/log", logSave);

module.exports = router;