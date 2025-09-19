const { Log } = require("../models/logModels");

const logSave = async (req , res )=>{
    const {logs} = req.body

    console.log(logs);

    const newLog = new Log({
        report : logs
    });

    await newLog.save();
};

module.exports = {logSave};