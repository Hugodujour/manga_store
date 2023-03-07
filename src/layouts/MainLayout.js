import React from "react";
import { Outlet } from "react-router";
import Header from "../components";

const MainLayout = props => {
    return (
        <div>
            <Header />
            <div className="main">
                <h1>salut</h1>
                {props.children}
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout