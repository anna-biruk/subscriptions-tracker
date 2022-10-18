const {Seller} = require("../../models")

class SellersRepository {
    async getAllSellers(limit = 10, offset = 0) {
        const items = await Seller.findAll({
            limit,
            offset
        })
        return items

    }
}

module.exports = new SellersRepository()