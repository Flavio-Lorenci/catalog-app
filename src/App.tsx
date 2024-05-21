import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import AdminPage from "./pages/AdminPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/admin' element={<AdminPage/>}/>
        </Route>
    )
)

function App() {
    return (
        <RouterProvider router={router}/>
    );
}
export default App;