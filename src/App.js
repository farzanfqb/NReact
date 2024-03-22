import Footer from "./Component/Footer";
import Header from "./Component/Header";
import { Outlet } from "react-router-dom";
function App() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />

        </>
    );
}

export default App;
