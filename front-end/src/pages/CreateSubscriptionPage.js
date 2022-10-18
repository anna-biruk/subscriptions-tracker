import {useDispatch, useSelector} from "react-redux";
import {createSubscriptionItem} from "../redux/actions";
import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import dayjs from "dayjs";
import {selectCreateIsLoading} from "../redux/selectors";
import Spinner from "../components/Spinner/Spinner";

const CreateSubscriptionPage = () => {
    const {sellerId} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [title, setTitleValue] = useState("")
    const [price, setPriceValue] = useState("")
    const [currency, setCurrencyValue] = useState("USD")
    const [period, setPeriodValue] = useState("month")
    const [startDate, setStartDateValue] = useState(dayjs().format('YYYY-MM-DD'))
    const [endDate, setEndDateValue] = useState(dayjs().add(1, 'month').format('YYYY-MM-DD'))

    const isLoading = useSelector(selectCreateIsLoading)

    const handleCreateItem = (e) => {
        e.preventDefault()
        dispatch(createSubscriptionItem({
            sellerId,
            title,
            price,
            period,
            currency,
            startDate,
            endDate
        })).then(({successful}) => {
            if (successful) {
                navigate('/list-items')
            }
        })
    }
    return (
        <>
            <div tabIndex="-1" aria-hidden="true"
                 className="overflow-y-auto mx-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-1/3 md:w-1/2 xs:w-5/6 md:inset-0 h-modal md:h-full">
                <div className="py-6 px-6 lg:px-8">
                    <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Create new subscription </h3>
                    <form className="space-y-6" onSubmit={handleCreateItem}>
                        <div>
                            <label htmlFor="email"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                            <input type="text" name="title" id="title"
                                   value={title}
                                   onChange={(e) => {
                                       setTitleValue(e.target.value)
                                   }}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                   placeholder="Netflix" required/>
                        </div>
                        <div>
                            <label htmlFor="price"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
                            <input type="text" name="price" id="price" placeholder="10"
                                   value={price}
                                   onChange={(e) => {
                                       setPriceValue(e.target.value)
                                   }}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                   required/>
                        </div>
                        <div>
                            <label htmlFor="currency"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select
                                currency</label>
                            <select id="currency"
                                    value={currency}
                                    onChange={(e) => {
                                        setCurrencyValue(e.target.value)
                                    }}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>USD</option>
                                <option>EURO</option>
                                <option>BYN</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="currency"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select
                                period</label>
                            <select id="currency"
                                    value={period}
                                    onChange={(e) => {
                                        setPeriodValue(e.target.value)
                                    }}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>week</option>
                                <option>month</option>
                                <option>year</option>
                            </select>
                        </div>
                        <div className="relative">
                            <input type="date"
                                   value={startDate}
                                   onChange={(e) => {
                                       setStartDateValue(e.target.value)
                                   }}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Select start date"/>
                        </div>
                        <div className="relative">
                            <input type="date"
                                   value={endDate}
                                   onChange={(e) => {
                                       setEndDateValue(e.target.value)
                                   }}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Select end date"/>
                        </div>

                        <button type="submit"
                                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            {isLoading ? <Spinner/> : (
                                <span>Create</span>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateSubscriptionPage