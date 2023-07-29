import React from 'react';
import Navbar from '../share/Navbar';
import Footer from '../share/Footer';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                   <Outlet></Outlet>
                    {/* <label htmlFor="my-drawer-1" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-1" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;