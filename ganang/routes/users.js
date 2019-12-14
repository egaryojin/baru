var express = require('express');
var router = express.Router();
var {get_user, create_user, delete_user} = require('../controller/users')

/* GET users listing. */
router.get('/eri', get_user);
router.post('/create', create_user)
router.post('/delete', delete_user)

module.exports = router;
