const sellersService = require("../services/sellersService");


class SellersController {
    async getAllSellers(req, res) {
        try {
            const items = await sellersService.getAllSellers(req.query.limit, req.query.offset)
            return res.status(200).json({
                items
            })
        } catch (e) {
            console.log(e)
        }

    }
}

module.exports = new SellersController()