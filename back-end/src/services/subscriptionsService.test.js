const subscriptionService = require('./subscriptionsService');

//TDD - test driven development
describe('SubscriptionsService', () => {
    it('should return next date for month period',  () => {
        const nextDate = subscriptionService.getNextChargeDate('month', 988201200000)
        expect(nextDate).toBe('2022-07-25')
    });
    it('should return next year(from now) date when startDate is several years ago',  () => {
        const nextDate = subscriptionService.getNextChargeDate('year', 988201200000)
        expect(nextDate).toBe('2023-04-25')
    });
    it('should return next week',  () => {
        const nextDate = subscriptionService.getNextChargeDate('week', '2022-06-30T17:05:36.902Z')
        expect(nextDate).toBe('2022-07-07')
    });
})