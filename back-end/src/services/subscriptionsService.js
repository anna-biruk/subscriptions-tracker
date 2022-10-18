const subscriptionsRepository = require("../repositories/supscriptionRepository.js");
const dayjs = require('dayjs')

class SubscriptionsService {
    getNextChargeDate(period, startDate) {
        let chargeDay = dayjs(startDate).date();
        let chargeDate = dayjs().date(chargeDay);
        if(period === 'year') {
            let startDateObject = dayjs(startDate);
            chargeDate = dayjs().date(startDateObject.date()).month(startDateObject.month())
        } else if(period === 'week') {
            let chargeWeekDay = dayjs(startDate).day();
            chargeDate = dayjs().day(chargeWeekDay);
        }
        console.log(chargeDate.toISOString());
        if (dayjs().isAfter(chargeDate)) {
            const result = chargeDate.add(1, period).format('YYYY-MM-DD');
            return result;
        } else {
            return chargeDate.format('YYYY-MM-DD');
        }
    }

    async getAllItems(userId, limit = 10, offset = 0) {
        const items = await subscriptionsRepository.getAllItems(userId, limit, offset)
        const result = items.map(item => {
            const nextChargeDate = this.getNextChargeDate(item.period, item.startDate)
            return {...item, nextChargeDate: nextChargeDate}
        })
        return result
    }

    async createItem(subscriptionItem) {
        const newItem = await subscriptionsRepository.createItem(subscriptionItem)
        return newItem
    }

    async updateItem(subscriptionItem) {
        const updatedItem = await subscriptionsRepository.updateItem(subscriptionItem)
        return updatedItem;
    }

    async deleteItem(subscriptionItem) {
        const deletedItem = await subscriptionsRepository.deleteItem(subscriptionItem)
        return deletedItem
    }

}

module.exports = new SubscriptionsService()