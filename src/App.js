import { useState } from "react";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
function App() {
    const [user, setUser] = useState({
        name: "Not Dummy",
        email: "notdummy@gmail.com"
    }
    )
    return (
        <>
            <Header />
            <UserContext.Provider value={{ user: user, setUser: setUser }}>
                <Outlet />
                <Footer />
            </UserContext.Provider>

        </>
    );
}

export default App;
