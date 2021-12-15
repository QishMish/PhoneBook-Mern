const router = require('express').Router();
const {register, login,logOut} = require('../controllers/authController')
const {verifyAuth} = require('../middlewares/verifyAuth')


router
    .post('/login', login)
    .post('/register', register)
    .post('/logout', logOut)


module.exports = router;