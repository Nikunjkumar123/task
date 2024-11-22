const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');
const app = express();
require('dotenv').config();

app.use(bodyParser.json());

mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });


app.use('/api', taskRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to the Task Management API');
});


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
