import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

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

        {user?.uid ?
            <>
                <li onClick={handleLogout}><Link>Logout</Link></li>
                <li><Link to='/dashboard'>Dashboard</Link></li>
            </>

            :

            <li><Link to='/login'>Login</Link></li>
        }
    </React.Fragment>

    return (
        <div className="navbar bg-base-100 justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 capitalize">
                        {menuItems}
                    </ul>
                </div>
                <p className="font-semibold text-xl uppercase">Hello Doctor's</p>
            </div>
            <div className="navbar-center hidden md:flex lg:flex">
                <ul className="menu menu-horizontal px-1 capitalize">
                    {menuItems}

                </ul>
            </div>
        </div>
    );
};

export default Navbar;