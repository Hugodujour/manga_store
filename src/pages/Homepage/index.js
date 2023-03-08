import React from "react";
import { Outlet } from "react-router";
import Directory from "../../components/Directory";
import './styles.scss'

const Homepage = props => {
    return (
        <section className="homepage">
            <Directory />
            <Outlet />
        </section>
    )
}

export default Homepage