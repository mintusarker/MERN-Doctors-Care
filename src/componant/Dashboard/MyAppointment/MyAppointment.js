import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../context/AuthProvider';

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
            <div className="text-2xl ml-3">My Appointment</div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings?.length && bookings?.map((booking, i) => <tr key={booking?._id}>
                            <th>{i + 1}</th>
                            <td>{booking?.patient}</td>
                            <td>{booking?.treatment}</td>
                            <td>{booking?.appointmentDate}</td>
                            <td>{booking?.slot}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;