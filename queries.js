const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'simpleslackapi',
  password: 'password',
  port: 5432,
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
  const {userName} = req.body;

  pool.query('INSERT INTO users (userName) VALUES ($1)', [userName], (error, results) => {
    if (error) {
      throw error
    }
    res.status(201).send(`User added with ID: ${results}`)
  })
};

const updateUser = (req, res) => {
  const userID = parseInt(req.params.userID);
  const {name} = req.body;

  pool.query(
    'UPDATE users SET name = $1 WHERE userID = $2',
    [name, userID],
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

//Channels // 
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

  pool.query('INSERT INTO channels (channelName) VALUES ($1)', [channelName], (error, results) => {
    if (error) {
      throw error
    }
    res.status(201).send(`Channel added with ID ${results}`)
  })
};

const updateChannel = (req, res) => {
  const channelID = parseInt(req.params.channelID);
  const { channelName } = req.body;

  pool.query('UPDATE channels SET channelName = $1 WHERE channelID = $2', [channelName, channelID], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(`Channel modified with channelID: ${results}`)
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
  const {postedByID, postedBy, channelID, channelName, content} = req.body;

  pool.query('INSERT INTO messages (postedByID, postedBy, channelID, channelName, timestamp, content) VALUES ($1, $2, $3, $4, Now(), $5)',
  [postedByID, postedBy, channelID, channelName, content], (error, results) => {
    if (error) {
      throw error
    }
    res.status(201).send(`Message created with ID: ${results}`)
  })
};

const updateMessage = (req, res) => {
  const messageID = parseInt(req.params.messageID);
  const { content } = req.body;

  pool.query('UPDATE messages SET content = $1 WHERE messageID = $2', [content, messageID], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(`Message modified with messageID: ${results}`)
  })
}
// app.delete('/messages/:messageID', db.deleteMessageByID);

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getChannels,
  getChannelById,
  createChannel,
  updateChannel,
  deleteChannel,
  getMessages,
  getMessageById,
  getMessageByUserId,
  getMessageByChannelId,
  createMessage,
  updateMessage
}