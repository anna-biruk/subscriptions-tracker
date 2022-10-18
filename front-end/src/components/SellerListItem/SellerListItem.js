import {Link} from "react-router-dom";

const SellerListItem = ({id, title, iconUrl}) => {
    return (
        <Link to={`/sellers/${id}/create`} key={id}
           className="block p-6 max-w-xs bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img
                className="object-cover ml-2 mr-2 w-20  rounded-t-lg md:h-auto md:w-26 md:rounded-none md:rounded-l-lg"
                src={iconUrl} alt=""/>
            <h5 className="mb-2 text-xl mx-auto font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>

        </Link>
    )
}

export default SellerListItem