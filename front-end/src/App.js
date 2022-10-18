import './App.css';
import LoginForm from "./components/LoginForm/LoginForm";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import SubscriptionsPage from "./pages/SubscriptionsPage";
import SellersPage from "./pages/SellersPage";
import CreateSubscriptionPage from "./pages/CreateSubscriptionPage";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<SignUpForm/>}/>
                    <Route path="/sign-up" element={<SignUpForm/>}/>
                    <Route path="/sign-in" element={<LoginForm/>}/>
                    <Route path="/list-items" element={<SubscriptionsPage/>}/>
                    <Route path="/sellers" element={<SellersPage/>}/>
                    <Route path="/sellers/:sellerId/create" element={<CreateSubscriptionPage/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
