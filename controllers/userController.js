const User = require('../models/user');
const {getUserList}= require('../service/userService');

/**all user list */
module.exports.userGetAll = async (req, res, next) => {
    let data = await getUserList();
    res.json(data);
}

/**create user */
module.exports.createUser = async (req, res, next) => {
    let { firstName, lastName, email, phone } = req.body;
    await User.create(
        {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone
        }
    )
}

/**update user */
module.exports.updateUser = async (req, res, next) => {
    User.findByPk(req.params.id)
        .then(result => {
            data: result
        });
}

module.exports.updateUserPost = async (req, res, next) => {
    const { firstName, lastName, email, phone } = req.body;
    await User.update(
        {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone
        },
        {
            where: { id: req.params.id }
        }
    )
}

/**delete user */
module.exports.deleteUser = async (req, res, next) => {
    let id = req.params.id;
    let user = await User.findByPk(id);

    if (user != null) {
        await User.destroy({
            where: {
                id: id
            }
        });
    }
}