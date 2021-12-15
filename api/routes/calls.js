const router = require('express').Router();
const {registerCall} = require('../controllers/callsController')


router
    .post('/', registerCall)


module.exports = router;