import {getSubscriptionItems} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {selectSubscriptionsItems} from "../../redux/selectors";
import SubscriptionItem from "../SubscriptionItem/SubscriptionItem";

const SubscriptionList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSubscriptionItems())
    }, [dispatch])



    const items = useSelector(selectSubscriptionsItems)
    return (
        <div className="flex flex-row flex-wrap gap-2 justify-center items-center mt-4">
            {items.map(item => {
                return <SubscriptionItem id={item.id} title={item.title} price={item.price} currency={item.currency}
                                         nextChargeDate={item.nextChargeDate} sellerIcon={item.seller.iconUrl}
                                         startDate={item.startDate} endDate={item.endDate} period={item.period}/>
            })
            }
        </div>
    )

}

export default SubscriptionList