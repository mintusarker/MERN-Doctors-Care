import React from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

const ManageDoctors = () => {

    const { data: doctors = [], refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/doctors');
            const data = res.json();
            return data;
        }
    })

    const handleDeleteDoctor = (_id) => {
        fetch(`http://localhost:5000/doctors/${_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success(`Doctors deleted successfully`);
                refetch();
            })
    }

    return (
        <div>
            <h2 className='2xl'>Manage Doctors</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-[16px] text-black'>
                            <th></th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            doctors.map((doctor, i) => <tr key={doctor?._id}>
                                <th>{i + 1}</th>
                                <td> <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={doctor?.imageUrl} alt='doctors' />
                                    </div>
                                </div></td>
                                <td>{doctor?.name}</td>
                                <td>{doctor?.email}</td>
                                <td><button onClick={() => handleDeleteDoctor(doctor?._id)} className='btn btn-success btn-sm'>Remove</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;