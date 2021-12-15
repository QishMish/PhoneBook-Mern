const router = require('express').Router();
const {registerCall} = require('../controllers/callsController')
const {verifyCall} = require('../middlewares/callAuthethication')

router
    .post('/', verifyCall, registerCall)


module.exports = router;