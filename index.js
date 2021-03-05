const express = require("express");
const cors = require('cors');
const collections = require('./routes/collections');
const connectDB = require("./startup/db");
const { Card } = require("./models/Card");

const app = express();
connectDB();
app.use(express.json());
app.use('/api/collections', collections);



const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
