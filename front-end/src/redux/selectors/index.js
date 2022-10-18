export const selectIsLoading = (state) => {
    return state.user.loading
}

export const selectIsSuccess = (state) => {
    return state.user.successful
}

export const selectSubscriptionsItems = (state) => {
    return state.subscriptions.items
}

export const selectSellersItems = (state) => {
    return state.sellers.items
}

export const selectSeller = (sellerId) => (state) => {
    return state.sellers.items.find(item => item.id === sellerId)
}

export const selectCreateSuccess = (state) => {
    return state.subscriptions.successful
}
export const selectCreateIsLoading = (state) => {
    return state.subscriptions.loading
}