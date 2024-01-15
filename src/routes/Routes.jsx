import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Service from "../component/Service";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddService from "../component/AddService";
import ProceedPage from "../pages/Order";
import PrivateRoute from "./PrivateRoute";
import BookService from "../pages/BookService";
import Bookings from "../pages/Bookings";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/service",
                element: <Service />
            },
            {
                path: "/addservice",
                element: <PrivateRoute>
                    <AddService />
                </PrivateRoute>
            },
            {
                path: "/services/:id",
                element: <PrivateRoute>
                    <ProceedPage />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://car-service-server-site-eta.vercel.app/services/${params.id}`)
            },
            {
                path: "/book/:id",
                element: <BookService />,
                loader: ({ params }) => fetch(`https://car-service-server-site-eta.vercel.app/services/${params.id}`)
            },
            {
                path: "/bookings",
                element: <PrivateRoute>
                    <Bookings />
                </PrivateRoute>
            }

        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
])