const bcrypt = require('bcryptjs');
const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 4000;
const credentials = require("./credentials.json")[0];

//New imports
const http = require('http').Server(app);
const cors = require('cors');

app.use(cors());

const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});
console.log(credentials.password);
let con = mysql.createConnection({
	host:credentials.host,
	user:credentials.user,
	password:credentials.password,
	database:credentials.database
});
con.connect(function(err) {
	if (err) throw err;
		console.log("Connected!");
});

//Add this before the app.get() block
socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
	socket.on('message', (data) => {
		socket.broadcast.emit('message2', 'Pressed');
		socket.emit('message2', 'Pressed');
	  });
	socket.on("register", (data) => {
		console.log(data);
		con.query("INSERT INTO users (username, passwordHash, isAnonymous) VALUES (?, ?, ?)", 
		[data.name, 
		data.password, 
		data.isAnonymous
		], 
		function (err, result) {
			if (err) throw err;
			console.log("1 record inserted");
		});

	});
    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
    });
});

app.get('/api', (req, res) => {
  res.json({
    message: 'Hello world',
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});