const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const logSchema = new Schema({
    report : {
        type : String,
        require : true 
    }
});

const Log = mongoose.model("log" , logSchema);

module.exports = {Log};