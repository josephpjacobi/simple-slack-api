const express = require('express');
require('dotenv').config()
const bodyParser = require('body-parser');
const app = express();
// const router = express.Router();

const channels = require('./routes/channels');
const messages = require('./routes/messages');
const users = require('./routes/users');

// const db = require('./queries');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Access-Control-Allow-Methods', '*')
  next();
});

app.use('/channels', channels);
app.use('/messages', messages);
app.use('/users', users);


app.get('/', (req, res) => {
  res.json({info: 'Node.js, Express, and Postgres API'})
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`listening on port ${port}`));