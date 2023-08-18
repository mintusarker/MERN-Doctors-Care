import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';

const MyAppointment = () => {
    const { user } = useContext(AuthContext)
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = res.json()
            return data;
        }
    })

    return (
        <div>
            <div className="text-xl font-semibold ml-3">My Appointment: {bookings?.length}</div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className='text-base text-green-600'>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings?.length && bookings?.map((booking, i) => <tr key={booking?._id}>
                            <th>{i + 1}</th>
                            <td>{booking?.patient}</td>
                            <td>{booking?.treatment}</td>
                            <td>{booking?.appointmentDate}</td>
                            <td>{booking?.slot}</td>
                            <td>{booking?.price}</td>
                            <td>
                                {
                                  booking?.price && !booking?.paid && <Link to={`dashboard/payment/${booking?._id}`}><button className='text-black btn btn-sm btn-success rounded-sm'>Pay</button> </Link>
                                }

                                {
                                    booking?.price &&  bookings?.paid && <p className='text-green-600'>Paid</p>
                                }
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;