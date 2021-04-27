const express = require('express');
const path = require('path');
const ws = require('ws');
const bodyParser = require('body-parser');

const app = express();

const users = [{
  id: 1,
  firstname: "Test",
  lastname: "McTest",
  email: "test@test.com"
}]

app.use(bodyParser.json())
app.use(express.static(path.resolve(__dirname, "..", "..", "dist")));

const wsServer = new ws.Server({ noServer: true });
const sockets = [];
wsServer.on("connection", (socket) => {
  console.log('client connected')
  sockets.push(socket);
  socket.on("message", (message) => {
    console.log('message from client' + message)
    for (const socket of sockets) {
      socket.send("From server: " + message);
    }
  });
});

app.get('/api/users', (req, res) => {
  console.log(users);
  res.json(users)
});

app.post('/api/users', (req, res) => {
  const { firstname, lastname, email } = req.body;
  console.log(req.body);
  users.push({ firstname, lastname, email, id: users.legnth + 1 })
  res.status(201);
  res.end();
});

app.use((req, res, next) => {
  if (req.method !== "GET") {
    return next();
  }
  res.sendFile(path.resolve(__dirname, "..", "..", "dist", "index.html"));
});


const server = app.listen(3000, () => {
  console.log(`Started on port http://localhost:${server.address().port}`);
  server.on("upgrade", (req, res, head) => {
    wsServer.handleUpgrade(req, res, head, (socket) => {
      wsServer.emit("connection", socket, req);
    });
  });
});