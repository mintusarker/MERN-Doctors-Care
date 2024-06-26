import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Appointment from "../Appointment/Appointment/Appointment";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";
import MyAppointment from "../Dashboard/MyAppointment/MyAppointment";
import AllUsers from "../../users/AllUsers";
import AdminRoute from "./AdminRoute";
import AddDoctors from "../Doctors/AddDoctors";
import ManageDoctors from "../Doctors/ManageDoctors";
import Payment from "../Dashboard/Payment/Payment";
import DisplayError from "../Error.js/DisplayError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/dashboard/users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-doctors",
        element: (
          <AdminRoute>
            <AddDoctors></AddDoctors>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-doctors",
        element: (
          <AdminRoute>
            <ManageDoctors></ManageDoctors>
          </AdminRoute>
        ),
      },
      {
        path: "dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(
            `https://hello-doctors-server.vercel.app/bookings/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
