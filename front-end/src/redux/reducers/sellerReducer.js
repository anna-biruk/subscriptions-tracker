import {GET_SELLER_ITEMS} from "../actions/types";

const initialState = {
    items: [],
}

export const sellerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SELLER_ITEMS:
            return {...state, ...action.payload}

        default:
            return state
    }
}