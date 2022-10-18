const userService = require("../services/userService")

class UserController {
    async createUser(req, res) {
        try {
            const {name, username, password} = req.body;
            await userService.createUser({name, username, password})
            setTimeout(() => {
                res.status(201).json({
                    name, username
                })
            }, 2000)
        } catch (e) {
            res.status(500).json({e: e.message})
            console.log(e)
        }
    }

    async signIn(req, res) {
        try {
            const {username, password} = req.body;
            const item = await userService.findOneUser({username, password})
            setTimeout(() => {
                res.status(201).json({
                    item
                })
            }, 2000)
        } catch (e) {
            res.status(500).json({e: e.message})
        }
    }
}


module.exports = new UserController()