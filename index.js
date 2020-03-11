// const Joi = require('joi');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const { channels, people } = require('./data');

const db = require('./queries');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});

app.get('/', (req, res) => {
  res.json({info: 'Node.js, Express, and Postgres API'})
});

app.get('/users', db.getUsers);
app.get('/users/:userID', db.getUserById);
app.post('/users', db.createUser);
app.put('/users/:userID', db.updateUser);
app.delete('/users/:userID', db.deleteUser);

app.get('/channels', db.getChannels);
app.get('/channels/:channelID', db.getChannelById);
app.post('/channels', db.createChannel);
app.put('/channels/:channelID', db.updateChannel);
app.delete('/channels/:channelID', db.deleteChannel);


app.get('/messages', db.getMessages);
app.get('/messages/messages/:messageID', db.getMessageById);
app.get('/messages/users/:userID', db.getMessageByUserId);
app.get('/messages/channels/:channelID', db.getMessageByChannelId);
app.post('/messages', db.createMessage);
app.put('/messages/:messageID', db.updateMessage);
// app.delete('/messages/:messageID', db.deleteMessageByID);

const port = process.env.PORT || 3001;
//export port= add number here
app.listen(port, () => console.log(`listening on port ${port}`));