const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const users = [{
  firstname: "Test",
  lastname: "McTest",
  email: "test@test.com"
}]

app.use(bodyParser.json())
app.use(express.static(path.resolve(__dirname, "..", "..", "dist")));

app.get('/api/users', (req, res) => {
  console.log(users);
  res.json(users)
})

app.use((req, res, next) => {
  if (req.method !== "GET") {
    return next();
  }
  res.sendFile(path.resolve(__dirname, "..", "..", "dist", "index.html"));
});


app.listen(3000, () => {
  console.log("Started on http://localhost:3000");
})