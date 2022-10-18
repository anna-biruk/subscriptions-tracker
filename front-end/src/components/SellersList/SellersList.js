import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getSellerItems} from "../../redux/actions/seller";
import {selectSellersItems} from "../../redux/selectors";
import SellerListItem from "../SellerListItem/SellerListItem";

const SellersList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSellerItems())
    }, [dispatch])

    const items = useSelector(selectSellersItems)


    return (
        <div className="flex flex-row justify-center gap-2 mt-3">
            {items.map((item) => {
            return <SellerListItem id={item.id} title={item.title} iconUrl={item.iconUrl}/>
        })}
        </div>
    )
}


export default SellersList