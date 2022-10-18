import {LockClosedIcon} from "@heroicons/react/solid";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../../redux/actions/user";
import {useState} from "react";
import Spinner from "../Spinner/Spinner";
import {selectIsLoading, selectIsSuccess} from "../../redux/selectors";
import {Link} from "react-router-dom";

const SignUpForm = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const isLoading = useSelector(selectIsLoading)
    const isSuccess = useSelector(selectIsSuccess)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(register(name, username, password))
    }
    return (<>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                        <input type="hidden" name="remember" defaultValue="true"/>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="name" className="sr-only">
                                    Name
                                </label>
                                <input
                                    value={name}
                                    onChange={event => setName(event.target.value)}
                                    id="name"
                                    name="name"
                                    type="name"
                                    autoComplete="current-name"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    value={username}
                                    onChange={event => setUsername(event.target.value)}
                                    id="email-address"
                                    name="email"
                                    type="text"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    value={password}
                                    onChange={event => setPassword(event.target.value)}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>


                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {isLoading ? <Spinner/> : (<>
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                                    aria-hidden="true"/>
                                    </span>
                                    Sign up
                                </>)}
                            </button>
                            <Link to="/sign-in" className="flex justify-center">Already a user? <span
                                className="font-medium text-indigo-600 hover:text-indigo-500"> Sign-in</span> </Link>
                        </div>
                    </form>
                </div>

            </div>
            {isSuccess && (<div
                className=" max-w-md mx-auto p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                role="alert">
                <div className="font-medium">Congratulations, your account has been successfully created.</div>
                <Link to="/sign-in" className="decoration-1 underline">Go to sign-in</Link>
                <span className="font-medium"> and use your credentials.</span>
            </div>)}

        </>


    )
}

export default SignUpForm