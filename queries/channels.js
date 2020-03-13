const { Pool } = require('pg');
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

const getChannels = (req, res) => {
  pool.query('SELECT * FROM channels ORDER BY channelID ASC', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
};

const getChannelById = (req, res) => {
  const channelID = parseInt(req.params.channelID);

  pool.query('SELECT * FROM channels WHERE channelID = $1', [channelID], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

const createChannel = (req, res) => {
  const { channelName } = req.body;

  pool.query('INSERT INTO channels (channelName) VALUES ($1) RETURNING channelid', [channelName], (error, results) => {
    if (error) {
      throw error
    }
    res.status(201).send(`Channel added with ID ${results.rows[0].channelid}`)
  })
};

const updateChannel = (req, res) => {
  const channelID = parseInt(req.params.channelID);
  const { channelName } = req.body;

  pool.query('UPDATE channels SET channelName = $1 WHERE channelID = $2', [channelName, channelID], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(`Channel modified with channelID: ${channelID}`)
  })
};

const deleteChannel = (req, res) => {
  const channelID = parseInt(req.params.channelID);

  pool.query('DELETE FROM channels WHERE channelID = $1', [channelID], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(`Channel deleted with channelID: ${channelID}`)
  })
};

module.exports = {
  getChannels,
  getChannelById,
  createChannel,
  updateChannel,
  deleteChannel
}