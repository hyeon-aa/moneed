import { Outlet } from "react-router";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Lnb from "./components/Layout/Lnb";


function App() {

    return (
        <>
            <div className="flex h-[100vh]">
                <Lnb active />
                <div className="flex-1">
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default App
