const express = require('express');
const controller = require('../controllers/userController');
const router = express.Router();

router.get('/getall', controller.userGetAll);
router.post('/adduser', controller.createUser);
router.get('/update/user/:id', controller.updateUser);
router.post('/update/user/:id', controller.updateUserPost);
router.post('/delete/user/:id', controller.deleteUser);

module.exports = router;