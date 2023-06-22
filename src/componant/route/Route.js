import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Appointment from "../Appointment/Appoinment/Appointment";
import Dashboard from "../Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
    }
])


export default router;