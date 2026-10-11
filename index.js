const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ status: 'success', message: 'Node.js app running on EC2 via GitHub Actions!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});