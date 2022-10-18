import {combineReducers} from "redux";
import subscriptionReducer from "./subscriptionReducer";
import userReducer from "./userReducer";
import {sellerReducer} from "./sellerReducer";

const rootReducer = combineReducers({
    subscriptions: subscriptionReducer,
    user: userReducer,
    sellers: sellerReducer
})

export default rootReducer;