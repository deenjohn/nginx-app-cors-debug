const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node.js!');
});

const PORT = 4000; // Ensure this port matches the Nginx proxy_pass setting
app.listen(4000, '0.0.0.0', () => {
  console.log(`Server running on port 4000`);
});
