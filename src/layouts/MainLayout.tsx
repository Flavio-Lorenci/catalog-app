import NavBar from "../components/NavBar.tsx";
import {Outlet} from "react-router-dom";

function MainLayout() {
    return (
        <>
            <NavBar/>
            <Outlet/>
        </>
    );
}

export default MainLayout;