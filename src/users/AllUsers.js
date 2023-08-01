import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useLoaderData } from 'react-router-dom';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = res.json()
            return data;
        }
    })


    const handleStatusUpdated = (_id) => {
        fetch(`http://localhost:5000/user/admin/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin Successfully')
                    refetch()
                } else{
                    toast.error(data.text)
                }
            })
    };


    const handleDelete = (_id) => {
        fetch(`http://localhost:5000/user/${_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json()
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success('User Deleted Successfully')
                    refetch()
                }
            }))
    };

    return (
        <div>
            <div className="text-2xl ml-3">All Users</div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className='text-[16px] text-rose-700'>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, i) => <tr key={user?._id}>
                            <th>{i + 1}</th>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                            <td>{user?.role ? <button className='btn btn-xs btn-success rounded'>{user?.role}</button> : <button onClick={() => handleStatusUpdated(user?._id)} className='btn btn-xs btn-success rounded'> Make admin</button>}</td>
                            <td>{user?.role ? '' : <button onClick={() => handleDelete(user?._id)} className='btn btn-xs btn-warning rounded'>Remove</button>}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;