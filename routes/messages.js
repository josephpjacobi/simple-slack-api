const express = require('express');
let router = express.Router();
let db = require('../queries/messages');

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

router.route('/channelname/:channelName')
  .get(db.getMessagesByChannelName);

router.route('/username/:username')
  .get(db.getMessagesByUsername);


module.exports = router;