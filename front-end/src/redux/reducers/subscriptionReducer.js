import {
    CREATE_SUBSCRIPTION_FAILED,
    CREATE_SUBSCRIPTION_ITEM, CREATE_SUBSCRIPTION_PENDING,
    DELETE_SUBSCRIPTION_ITEM,
    GET_SUBSCRIPTIONS_ITEMS,
    UPDATE_SUBSCRIPTION_ITEM
} from "../actions/types";

const initialState = {
    items: [],
    loading: false,
    error: "",
    successful: false,

}

export const subscriptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SUBSCRIPTIONS_ITEMS:
            return {...state, ...action.payload}
        case CREATE_SUBSCRIPTION_PENDING:
            return {
                ...state,
                error: "",
                loading: true,
                successful: false
            };
        case CREATE_SUBSCRIPTION_ITEM:
            return {
                items: [
                    ...state.items,
                    action.payload,
                ],
                error: "",
                loading: false,
                successful: true
            }
        case CREATE_SUBSCRIPTION_FAILED:
            return {
                ...state,
                error: action.payload,
                loading: false,
                successful: false

            }
        case UPDATE_SUBSCRIPTION_ITEM:

            const items = [...state.items].map(item => {
                if (item.id === action.payload.id) {
                    item.title = action.payload.title;
                    item.price = action.payload.price
                    item.currency = action.payload.currency
                    item.startDate = action.payload.startDate
                    item.sellerIcon = action.payload.sellerIcon
                    item.endDate = action.payload.endDate
                    item.period = action.payload.period
                    item.nextChargeDate = action.payload.nextChargeDate
                }
                return item;
            });
            return {...state, items}
        case DELETE_SUBSCRIPTION_ITEM:
            return {...state, items: state.items.filter((item) => item.id !== action.payload)}

        default:
            return state
    }
}

export default subscriptionReducer