const { Pool } = require('pg');
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

const getUsers = (req, res) => {
  pool.query('SELECT * FROM users ORDER BY userID ASC', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
};

const getUserById = (req, res) => {
  const userID = parseInt(req.params.userID);

  pool.query('SELECT * FROm users WHERE userID = $1', [userID], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
};

//Where do I get the userID from??
const createUser = (req, res) => {
  const { userName } = req.body;

  pool.query('INSERT INTO users (userName) VALUES ($1) RETURNING userid', [userName], (error, results) => {
    if (error) {
      throw error
    }
    res.status(201).send(`User added with ID: ${results.rows[0].userid}`)
  })
};

const updateUser = (req, res) => {
  const userID = parseInt(req.params.userID);
  const { userName } = req.body;

  pool.query(
    'UPDATE users SET userName = $1 WHERE userID = $2',
    [userName, userID],
    (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send(`User modified with userID: ${userID}`)
    }
  )
};

const deleteUser = (req, res) => {
  const userID = parseInt(req.params.userID);

  pool.query('DELETE FROM users WHERE userID = $1',
    [userID],
    (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send(`User deleted with userID: ${userID}`)
    })
};

module.exports = { 
  getUsers, 
  getUserById, 
  createUser, 
  updateUser, 
  deleteUser 
};