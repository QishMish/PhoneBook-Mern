const router = require('express').Router();

const {
    Get_People,
    Add_Person,
    Edit_Person,
    Remove_Person,
    Populate_People
} = require('../controllers/peopleController')

router
    .get('/all', Get_People)
    .post('/add', Add_Person)
    .put('/edit/:id', Edit_Person)
    .post('/delete/:id', Remove_Person)
    .post('/populate', Populate_People)


module.exports = router;