const User = require ('../models/user');

function deleteUser() {
    return User.findAll();
    let id = req.params.id;
    let user =  User.findByPk(id);

    if (user != null) {
         User.destroy({
            where: {
                id: id
            }
        });
    }
}

module.exports = {
    deleteUser
}