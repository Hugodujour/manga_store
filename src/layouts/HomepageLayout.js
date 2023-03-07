import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HomepageLayout = props => {
    return (
        <div className="fullHeight"> 
            <Header />
                {props.children}
                <Outlet />
                <Footer />
        </div>
    )
}

export default HomepageLayout