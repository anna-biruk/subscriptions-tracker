import {PlusIcon} from '@heroicons/react/solid'
import SubscriptionList from "../components/SubscriptionList/SubscriptionList";
import {Link} from "react-router-dom";

const SubscriptionsPage = () => {
    return (
        <>
            <div className="w-1/6 mx-auto mt-3">
            <Link
                to="/sellers"
                className="flex items-center rounded-lg bg-blue-700 hover:bg-blue-800 px-4 py-2 text-white"
            >
                <PlusIcon className="w-6 h-6"/> Add new subscription
            </Link>
            </div>
            <div className="grid grid-cols-6 gap-4">
                <div className=" col-span-6 ">
                    <SubscriptionList/>
                </div>
            </div>
        </>
    )
}

export default SubscriptionsPage