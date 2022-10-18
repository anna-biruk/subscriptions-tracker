import {
    GET_SUBSCRIPTIONS_ITEMS,
    GET_SUBSCRIPTIONS_ITEMS_START,
    GET_SUBSCRIPTIONS_ITEMS_FINISH,
    GET_SUBSCRIPTIONS_ITEMS_ERROR,
    UPDATE_SUBSCRIPTION_ITEM,
    UPDATE_SUBSCRIPTION_FAILED,
    DELETE_SUBSCRIPTION_ITEM,
    CREATE_SUBSCRIPTION_ITEM, CREATE_SUBSCRIPTION_FAILED, CREATE_SUBSCRIPTION_PENDING
} from './types'
import axios from "axios";


const apiUrl = `${process.env.REACT_APP_API_ORIGIN}/api/list-items`

export const getSubscriptionItems = () => {
    return async (dispatch) => {
        try {
            dispatch({type: GET_SUBSCRIPTIONS_ITEMS_START})
            const response = await axios.get(apiUrl, {
                headers: {
                    'x-auth-token': localStorage.getItem('x-auth-token')
                }
            })
            dispatch({
                type: GET_SUBSCRIPTIONS_ITEMS,
                payload: response.data
            })
            dispatch({type: GET_SUBSCRIPTIONS_ITEMS_FINISH})
        } catch (e) {
            dispatch({type: GET_SUBSCRIPTIONS_ITEMS_ERROR, payload: e.message})
        }
    }
}
export const createSubscriptionItem = ({
                                           title,
                                           userId,
                                           price,
                                           period,
                                           currency,
                                           sellerId,
                                           startDate,
                                           endDate
                                       }) => {
    return async (dispatch) => {
        try {
            dispatch({type: CREATE_SUBSCRIPTION_PENDING})
            const response = await axios.post(`${apiUrl}`, {
                title,
                userId,
                price,
                period,
                currency,
                sellerId,
                startDate,
                endDate
            }, {
                headers: {
                    'x-auth-token': localStorage.getItem('x-auth-token')
                }
            })

            dispatch({type: CREATE_SUBSCRIPTION_ITEM, payload: response.data.newItem})
            return {successful: true}
        } catch (e) {
            dispatch({type: CREATE_SUBSCRIPTION_FAILED, payload: e.message})
            return {successful: false}
        }
    }

}

export const updateSubscriptionItem = ({
                                           id,
                                           title,
                                           price,
                                           currency,
                                           startDate,
                                           sellerIcon,
                                           endDate,
                                           period,
                                       }) => {
    return async (dispatch) => {
        try {
            const response = await axios.put(`${apiUrl}/${id}`, {
                title,
                price,
                currency,
                startDate,
                sellerIcon,
                endDate,
                period,
            }, {
                headers: {
                    'x-auth-token': localStorage.getItem('x-auth-token')
                }
            })

            dispatch({type: UPDATE_SUBSCRIPTION_ITEM, payload: response.data.updatedItem})
        } catch (e) {
            dispatch({type: UPDATE_SUBSCRIPTION_FAILED, payload: e.message})
        }
    }

}

export const deleteSubscriptionItem = (id) => {
    return async (dispatch) => {
        const response = await axios.delete(`${apiUrl}/${id}`, {
            headers: {
                'x-auth-token': localStorage.getItem('x-auth-token')
            }
        })
        if (response.data.success) {
            dispatch({
                type: DELETE_SUBSCRIPTION_ITEM,
                payload: id
            })
        }
    }
}