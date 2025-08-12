const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Cloud Native CI/CD Pipeline with Jenkins and Kubernetes!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
