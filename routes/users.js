const express = require('express');
let router = express.Router();
const db = require('../queries/users');

router.route("/")
  .get(db.getUsers) 
  .post(db.createUser); 

router.route('/:userID')
  .get(db.getUserById)
  .put(db.updateUser)
  .delete(db.deleteUser);

  module.exports = router;