import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const { logOut } = useContext(AuthContext);


    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }
    return (
        <div className='flex flex-col justify-center text-xl font-semibold text-red-400 items-center h-[500px]'>
            <p>Ops! Something went wrong</p>
            <p>{error?.statusText || error?.message}</p>
            <p className='mb-4'>Please logout and again login</p>
            <button className='btn btn-sm bg-black hover:bg-black capitalize text-base rounded-none text-white' onClick={handleLogout}>LogOut</button>
        </div>
    );
};

export default DisplayError;