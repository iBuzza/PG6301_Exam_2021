const express = require('express');
const path = require('path');
const ws = require('ws');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

const users = [{
  id: 1,
  firstname: "Admin",
  lastname: "McAdmin",
  email: "admin@test.com"
}]

app.use(cookieParser())
app.use(bodyParser.json())
app.use(express.static(path.resolve(__dirname, "..", "..", "dist")));
app.use(session({
  secret: 'pG6301eXam',
  resave: false,
  saveUninitialized: false
}

));

const wsServer = new ws.Server({ noServer: true });
const sockets = [];
wsServer.on("connection", (socket) => {
  console.log('client connected')
  sockets.push(socket);
  socket.on("message", (message) => {
    for (const socket of sockets) {
      socket.send(">" + message);
    }
  });
});

app.get('/api/login', (req, res) => {
  const { username } = req.session;
  if (!username) {
    return res.status(401).send();
  }
  res.json({ username })
});

app.post('/api/users', (req, res) => {
  const { firstname, lastname, email } = req.body;
  console.log(req.body);
  users.push({ firstname, lastname, email, id: users.legnth + 1 })
  res.status(201);
  res.end();
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  req.session.username = username;
  res.end();
})

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