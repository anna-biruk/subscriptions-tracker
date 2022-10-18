const userRepository = require("../repositories/userRepository")
const jwt = require('jsonwebtoken');
const {createHmac} = require('node:crypto');

class UserService {
    async createUser(user) {
        const hashedPassword = await this.hashPassword(user)

        const newUser = await userRepository.createUser({...user, password: hashedPassword})
        return newUser
    }

    async hashPassword(user) {
        const password = user.password
        const hash = createHmac('sha256', process.env.PASSWORD_SECRET)
            .update(password)
            .digest('hex')

        return hash
    }

    async findOneUser({username, password}) {
        const userItem = await userRepository.findUserByUsername(username)
        if (userItem) {
            const hash = createHmac('sha256', process.env.PASSWORD_SECRET)
                .update(password)
                .digest('hex')
            const validPassword = hash === userItem.password
            if (validPassword) {
                console.log("Validation is successful")
                const privateKey = process.env.JWT_SECRET_KEY
                const token = jwt.sign({username, userId: userItem.id}, privateKey)
                return token

            } else {
                throw Error("Wrong username or password")
            }
        }


    }


}

module.exports = new UserService()