import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = props => {
    return (
        <div> 
            <Header />
            <div className="main">
                {props.children}
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout