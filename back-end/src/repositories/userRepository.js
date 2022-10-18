const {User} = require("../../models")

class UserRepository {
    async createUser(user) {
        const newItem = await User.create(user)
        return newItem
    }

    async findUserByUsername(username) {
        const newItem = await User.findOne({where: {username}})
        return newItem
    }
}

module.exports = new UserRepository()