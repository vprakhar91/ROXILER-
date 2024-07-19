const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port

// Replace with your MongoDB connection string
const mongoURI = "mongodb+srv://vprakhar91:prakhar@cluster0.mctch9c.mongodb.net/";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

app.listen(port, () => console.log(`Server listening on port ${port}`));
