const sellersRepository = require("../repositories/sellersRepository")

class SellersService {
    async getAllSellers(limit = 10, offset = 0) {
        const items = await sellersRepository.getAllSellers(limit, offset)
        return items
    }
}

module.exports = new SellersService()