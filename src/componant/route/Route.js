import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Appointment from "../Appointment/Appoinment/Appointment";
import Dashboard from "../Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";
import MyAppointment from "../Dashboard/MyAppointment/MyAppointment";

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
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path:'/dashboard',
                element: <MyAppointment></MyAppointment>
            }
        ]
    }
])


export default router;