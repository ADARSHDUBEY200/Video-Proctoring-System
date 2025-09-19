const express = require("express");
const aiRouter = require("./routes/aiRoutes.js");
const logRouter = require("./routes/logRoutes.js");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors({
    origin: [`${process.env.FRONTEND_URL}`],
    methods: ["GET", "POST", "PUT", "DELETE"],
}))


app.use(express.json());

app.use("/ai", aiRouter);
app.use("/api", logRouter);

app.listen(3000, (req, res) => {
    console.log("THE SERVER IS LISTENING NOW AT THE PORT CALLED 3000");
    mongoose.connect(process.env.MONGO_URL);
})