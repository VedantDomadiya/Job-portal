const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require('cors');

// Database connection
mongoose.connect(process.env.DATABASE, {
    useUnifiedTopology: true // Required for Mongoose 6.0 and above
  })
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));


//port
const port = process.env.PORT || 9000

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});