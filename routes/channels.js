const express = require('express');
let router = express.Router();
const db = require('../queries');

router.route('/')
  .get(db.getChannels)
  .post(db.createChannel); 

router.route('/:channelID')
  .get(db.getChannelById)
  .put(db.updateChannel)
  .delete(db.deleteChannel);

module.exports = router;