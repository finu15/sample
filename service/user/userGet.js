const User = require ('../models/user');

function getUserList() {
    return User.findAll();
}

module.exports = {
    getUserList
}