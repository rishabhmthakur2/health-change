const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const port = process.env.PORT || 8000

// CORS and Body Parser config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Importing necessary routes
const userRoutes = require('./routes/userRoutes');

// User /user Routes
app.use(userRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
