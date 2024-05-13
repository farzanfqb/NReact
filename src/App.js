import { useState } from "react";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from 'react-redux';
import store from "../src/utils/store";

function App() {
    const [user, setUser] = useState({
        name: "Not Dummy",
        email: "notdummy@gmail.com"
    }
    )
    return (
        <>
            <Provider store={store}>
                <Header />
                <UserContext.Provider value={{ user: user, setUser: setUser }}>
                    <Outlet />
                    <Footer />
                </UserContext.Provider>
            </Provider>

        </>
    );
}

export default App;
