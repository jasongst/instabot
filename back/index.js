require("dotenv").config()

const express = require("express")
const morgan = require("morgan")
const cors = require("cors");
const { IgApiClient } = require('instagram-private-api')

exports.client = new IgApiClient();

const corsOptions = {
    origin: "http://localhost:8080"
};

const app = express()

app.use(cors(corsOptions))

app.use(morgan("tiny")) // middleware for logging
app.use(express.urlencoded({extended: true})) //middleware for parsing urlencoded data
app.use(express.json()) // middleware for parsing incoming json
app.use("/static", express.static("static")) // to set a folder for static file serving

const PORT = process.env.PORT || 4000
// Server Listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

require('./routes/auth.routes')(app);