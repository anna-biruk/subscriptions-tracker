const {Subscription, Seller} = require("../../models")

class SubscriptionRepository {
    async getAllItems(userId, limit = 10, offset = 0) {
        const items = await Subscription.findAll({
            where: {userId},
            limit,
            offset,
            include: [{model: Seller, as: 'seller'}]
        })
        return items.map(item => item.get({plain: true}))
    }

    async createItem(subscriptionItem) {
        const newItem = await Subscription.create(subscriptionItem)
        const seller = await newItem.getSeller()
        return {...newItem.get({plain: true}), seller: seller.get({plain:true})}
    }

    async updateItem(subscriptionItem) {
        const updatedItem = await Subscription.update(subscriptionItem, {
            where: {id: subscriptionItem.id},
            returning: true
        })
        return updatedItem[1][0].dataValues
    }

    async deleteItem(subscriptionItem) {
        const deletedItem = await Subscription.destroy({where: {id: subscriptionItem.id}})
        return deletedItem
    }
}

module.exports = new SubscriptionRepository()