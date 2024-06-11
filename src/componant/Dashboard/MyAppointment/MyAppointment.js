import React, { useContext, useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../context/AuthProvider";
import { Link } from "react-router-dom";
import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs";
import { useReactToPrint } from "react-to-print";
import { toast } from "react-hot-toast";

const MyAppointment = () => {
  const componentRef = useRef();

  const { user } = useContext(AuthContext);
  const { data: bookings = [], refetch } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://hello-doctors-server.vercel.app/bookings?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = res.json();
      return data;
    },
  });

  const deleteAppointment = (_id) => {
    fetch(`https://hello-doctors-server.vercel.app/bookings/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success(`Appointment deleted successfully`);
        refetch();
      });
  };

  // pdf handler
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Patient Info",
  });

  return (
    <div>
      <p className="text-xl mb-3 font-semibold ml-10">
        My Appointment: {bookings?.length}
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-10">
        {bookings?.length &&
          bookings?.map((booking) => (
            <div className="p-4 m-2 bg-base-100 shadow-xl">
              <div ref={componentRef}>
                <div className="card-body">
                  <h2 className="text-xl font-semibold">
                    Patient Name: {booking?.patient}
                  </h2>
                  <p>
                    Treatment Category: <strong>{booking?.treatment}</strong>{" "}
                  </p>
                  <p>Date: {booking?.appointmentDate}</p>
                  <p>Time: {booking?.slot}</p>
                  <p>Fee: ${booking?.price}</p>
                  <p className="break-words">
                    TransactionID:
                    {booking?.transactionId
                      ? booking?.transactionId
                      : "No Payment"}
                  </p>
                  <div className="pt-8 card-actions justify-between items-center">
                    <div>
                      {booking?.price && booking?.paid && (
                        <p className="text-green-600 font-semibold">
                          Payment: Paid
                        </p>
                      )}
                      {booking?.price && !booking?.paid && (
                        <Link to={`dashboard/payment/${booking?._id}`}>
                          <button className="text-black btn btn-sm btn-success rounded-sm">
                            Pay
                          </button>
                        </Link>
                      )}
                    </div>
                    <div>
                      <div>
                        {booking?.paid ? (
                          <button
                            onClick={handlePrint}
                            className="text-rose-600"
                          >
                            <BsFillFileEarmarkArrowDownFill className="text-2xl" />
                          </button>
                        ) : (
                          <button
                            onClick={() => deleteAppointment(booking?._id)}
                            className="text-black btn btn-sm btn-error rounded-sm"
                          >
                            Cancel
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyAppointment;
