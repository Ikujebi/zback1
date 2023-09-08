const express = require('express');
const app = express();
const port = 3500; // You can change the port number if needed

// Define an array of valid track values
const validTracks = ['backend', 'frontend', 'data'];

app.get('/getInfo', (req, res) => {
  // Retrieve the query parameters from the request
  const slackName = req.query.slack_name || 'ikujebi kehinde';
  const track = req.query.track;

  // Declare currentTrack variable outside of if-else block
  let currentTrack;

  // Check if the 'track' parameter is provided and valid
  if (track && validTracks.includes(track)) {
    // If provided and valid, use the provided 'track' value
    currentTrack = track;
  } else {
    // If not provided or not valid, use a default value
    currentTrack = 'backend';
  }

  const date = new Date();
  const day = date.getDay();

  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Create an object with the specific information, including GitHub links
  const info = {
    slack_name: slackName,
    current_day: daysOfTheWeek[day],
    utc_time: new Date().toISOString(), // Get the current UTC time in ISO 8601 format
    track: currentTrack,
    github_repo_url: 'https://github.com/ikujebi/zback1', // Replace with your actual GitHub repository URL
    github_main_url: 'https://github.com/ikujebi/zback1', // Replace with your actual GitHub repository URL
  };

  // Set the HTTP status code to 200
  res.status(200);

  // Send the information as a JSON response
  res.json(info);
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
