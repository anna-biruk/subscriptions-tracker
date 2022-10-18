const subscriptionsService = require("../services/subscriptionsService.js");

class SubscriptionsController {
    async getAllItems(req, res) {
        try {
            const {userId} = req.user;
            const items = await subscriptionsService.getAllItems(userId, req.query.limit, req.query.offset)
            return res.status(200).json({
                items
            })
        } catch (e) {
            console.log(e)
        }

    }

    async createItem(req, res) {
        try {
            const {userId} = req.user;
            const {title, price, period, currency, startDate, sellerId, endDate, chargeDay} = req.body
            const newItem = await subscriptionsService.createItem({
                title,
                userId,
                price,
                period,
                currency,
                sellerId,
                startDate,
                endDate,
                chargeDay
            })
            return res.status(201).json({
                newItem
            })
        } catch (e) {
            console.log(e)
        }
    }

    async updateItem(req, res) {
        try {
            const {id} = req.params
            const {
                title,
                price,
                period,
                currency,
                sellerId,
                startDate,
                endDate,
                chargeDay
            } = req.body
            const updatedItem = await subscriptionsService.updateItem({
                id,
                title,
                price,
                period,
                currency,
                sellerId,
                startDate,
                endDate,
                chargeDay
            })
            return res.status(200).json({
                updatedItem
            })
        } catch (e) {
            res.status(500).json({e: e.message})
            console.log(e)
        }
    }

    async deleteItem(req, res) {
        try {
            const {id} = req.params
            await subscriptionsService.deleteItem({id})
            res.status(200).json({
                success: true
            })
        } catch (e) {
            res.status(500).json({e: e.message})
            console.log(e)
        }
    }
}

module.exports = new SubscriptionsController()