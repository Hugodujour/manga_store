import React from "react"
import './styles.scss'
import { Link } from "react-router-dom"

import Logo from '../../assets/Logo.jpg'

const Header = props => {

    const logout =()=>{
        localStorage.clear()
        window.location.reload()
    }


    return(
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                    <img src={Logo} alt='logo' className="eclateam"></img>
                    </Link>
                </div>

            <div className="callToActions">
                <ul>
                    <li>
                        <Link to="/registration">
                            Register
                        </Link>
                    </li>
                    <li>
                        <button onClick={logout}>Logout</button>
                    </li>
                </ul>
            </div>

            </div>
        </header>
    )
}

export default Header