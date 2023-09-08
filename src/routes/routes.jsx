import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute.jsx'
import Profile from "../pages/Profile.jsx";
import Home from "../pages/Home.jsx";
import Layout from "../pages/Layout.jsx";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "app",
                element: <Profile />,
            },
            {
                path: "secure",
                element: <ProtectedRoute pass={false}><Profile /></ProtectedRoute>
            }
        ]
    },


]);

