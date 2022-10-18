import {
    GET_SELLER_ITEMS,
    GET_SELLER_ITEMS_ERROR,
    GET_SELLER_ITEMS_FINISH,
    GET_SELLER_ITEMS_START
} from "./types";
import axios from "axios";

const apiUrl = `${process.env.REACT_APP_API_ORIGIN}/api/sellers`

export const getSellerItems = () => {
    return async (dispatch) => {
        try {
            dispatch({type: GET_SELLER_ITEMS_START})
            const response = await axios.get(apiUrl, {
                headers: {
                    'x-auth-token': localStorage.getItem('x-auth-token')
                }
            })

            dispatch({
                type: GET_SELLER_ITEMS,
                payload: response.data
            })
            dispatch({type: GET_SELLER_ITEMS_FINISH})
        } catch (e) {
            dispatch({type: GET_SELLER_ITEMS_ERROR, payload: e.message})
        }
    }
}