import React from 'react';
import Navbar from '../share/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../share/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;