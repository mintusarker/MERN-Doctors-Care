import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosTimer } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { BiPlusMedical } from "react-icons/bi";



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }

    const menuItems = <React.Fragment>
        <li><Link to='/'>home</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        {/* <li><Link to='/about'>About</Link></li> */}
        <li><Link to='/signup'>SignUp</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>

        {user?.uid ?
            <>
                <li onClick={handleLogout}><Link>Logout</Link></li>
            </>

            :

            <li><Link to='/login'>Login</Link></li>
        }
    </React.Fragment>

    return (
        <div className=''>
            <div className='lg:flex md:flex hidden justify-between font-medium py-4 px-16 bg-slate-700 text-white leading-7'>
                <div className='flex justify-center items-center gap-8'>
                    <div className='flex justify-center items-center gap-2'>
                        <BsFillTelephoneFill className='text-lg'></BsFillTelephoneFill>
                        <p>Contact Number: 00000001111</p>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <IoIosTimer className='text-xl'></IoIosTimer>
                        <p>Mon - Fri : 09:00 AM to 05:00 PM</p>
                    </div>
                </div>
                <div className='flex font-medium justify-center items-center gap-2'>
                    <MdLocationOn className='text-xl'></MdLocationOn>
                    <p>Location : 22, South Wales, New York</p>

                </div>

            </div>

            <div className="navbar lg:pl-12  bg-base-100 justify-between">
                <div className="navbar-start">

                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 capitalize">
                            {menuItems}
                        </ul>
                    </div>
                    <BiPlusMedical className='text-red-500 text-xl md:text-3xl lg:text-3xl mr-2'></BiPlusMedical>
                    <p className="font-semibold text-xl uppercase">Doctors Care</p>
                </div>
                <div className="navbar-center hidden md:flex lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold text-base capitalize">
                        {menuItems}

                    </ul>
                </div>
                <label htmlFor="my-drawer-1" tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;