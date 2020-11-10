const express = require('express')
const app = express()
const server = require('http').createServer(app);
const Port = process.env.PORT || 5000;
const cors = require('cors')
const Users = require('./routers/user-router')
const Exercises = require('./routers/exercises-router')
const Regimen = require('./routers/regimens-router')



server.listen(Port, () => {
  console.log(`Listening at ${Port}`);
});

// var corsOptions = {
// 	origin: process.env.BASE_URL || "http://localhost:3000",
// 	methods: "GET,PUT,POST,DELETE",
//    	credentials: false
// }
// app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/users', Users);
app.use('/api/exercises', Exercises);
app.use('/api/regimen', Regimen)

app.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});