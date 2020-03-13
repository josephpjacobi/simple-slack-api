const express = require('express');
let router = express.Router();
const db = require('../queries');

router.route('/')
  .get(db.getMessages)
  .post(db.createMessage);

router.route('/:messageID')
  .put(db.updateMessage)
  .delete(db.deleteMessageByID);

router.route('/messages/:messageID')
  .get(db.getMessageById);

router.route('/users/:userID')
  .get(db.getMessageByUserId);

router.route('/channels/:channelID')
  .get(db.getMessageByChannelId);


module.exports = router;