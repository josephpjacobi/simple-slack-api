const { Pool } = require('pg');
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

const getMessages = (req, res) => {
  pool.query('SELECT * FROM messages', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(results.rows)
  })
};

const getMessageById = (req, res) => {
  const messageID = parseInt(req.params.messageID);

  pool.query('SELECT * FROM messages WHERE messageID = $1', [messageID], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(results.rows)
  })
};

const getMessageByUserId = (req, res) => {
  const userID = parseInt(req.params.userID);

  pool.query('SELECT * FROM messages WHERE postedByID = $1', [userID], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(results.rows)
  })
};

const getMessageByChannelId = (req, res) => {
  const channelID = parseInt(req.params.channelID);

  pool.query('SELECT * FROM messages WHERE channelID = $1', [channelID], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(results.rows)
  })
};

const createMessage = (req, res) => {
  const { postedByID, postedBy, channelID, channelName, content } = req.body;

  pool.query('INSERT INTO messages (postedbyid, postedby, channelid, channelname, timestamp, content) VALUES ($1, $2, $3, $4, Now(), $5) RETURNING messageid',
    [postedByID, postedBy, channelID, channelName, content], (error, results) => {
      if (error) {
        throw error
      }
      res.status(201).send(`Message created with ID: ${results.rows[0].messageid}`)
    })
};

const updateMessage = (req, res) => {
  const messageID = parseInt(req.params.messageID);
  const { content } = req.body;

  pool.query('UPDATE messages SET content = $1 WHERE messageID = $2 RETURNING messageID', [content, messageID], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(`Message modified with messageID: ${results.rows[0].messageid}`)
  })
};

const deleteMessageByID = (req, res) => {
  const messageID = parseInt(req.params.messageID);

  pool.query('DELETE FROM messages WHERE messageID = $1', [messageID], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(`Deleted message with ID ${messageID}`)
  })
};

module.exports = {
  getMessages, 
  getMessageById, 
  getMessageByUserId, 
  getMessageByChannelId, 
  createMessage, 
  updateMessage, 
  deleteMessageByID
};