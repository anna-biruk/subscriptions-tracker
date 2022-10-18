import dateFormat from "dateformat";
import EditModal from "../EditModal/EditModal";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {deleteSubscriptionItem, updateSubscriptionItem} from "../../redux/actions";


const SubscriptionItem = ({id, title, price, currency, startDate, sellerIcon, endDate, period, nextChargeDate}) => {
    const startDateFormat = dateFormat(startDate, "dd/mm/yyyy")
    const endDateFormat = dateFormat(endDate, "dd/mm/yyyy")
    const nextPaymentDateFormat = dateFormat(nextChargeDate, "dd/mm/yyyy")

    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)

    const handleUpdate = ({
                              title,
                              price,
                              currency,
                              startDate,
                              endDate,
                              sellerIcon,
                              period,
                              nextChargeDate
                          }) => {
        dispatch(updateSubscriptionItem({
            id,
            title,
            price,
            currency,
            startDate,
            endDate,
            sellerIcon,
            period,
            nextChargeDate
        }))
    }

    const handleDeleteItem = () => {
        dispatch(deleteSubscriptionItem(id))
    }
    return (
        <>
            <div
                className="flex mt-4 flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img
                    className="object-cover ml-2 w-1/3 h-80 rounded-t-lg md:h-auto md:w-26 md:rounded-none md:rounded-l-lg"
                    src={sellerIcon} alt=""/>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <div className="flex flex-wrap">
                        <h1 className="flex-auto text-lg font-semibold text-slate-900">
                            {title}
                        </h1>
                        <div className="text-lg font-semibold text-slate-500">
                            {price} {currency}
                        </div>
                    </div>
                    <div className="mb-3 font-medium text-gray-700 dark:text-gray-400">Frequency: {period} </div>
                    <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">Start
                        date: {startDateFormat} </div>
                    <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">End
                        date: {endDateFormat} </div>
                    <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">Next payment
                        date: {nextPaymentDateFormat} </div>
                    <div className="flex justify-evenly">
                        <button
                            className="w-1/3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={() => setOpen(true)}>Edit
                        </button>
                        <button
                            onClick={handleDeleteItem}
                            className="w-1/3 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >Delete
                        </button>
                    </div>


                </div>
            </div>

            <EditModal open={open} subscriptionItem={{
                id,
                title,
                price,
                currency,
                startDate,
                endDate,
                sellerIcon,
                period,
                nextChargeDate
            }} onClose={() => setOpen(false)} onEdit={handleUpdate}/>
        </>


    )
}

export default SubscriptionItem