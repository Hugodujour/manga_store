import React from "react"
import './styles.scss'
import Logo from './../assets/Logo.jpg'

const Header = props => {
    return(
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt='logo' className="eclateam"></img>
                </div>
            </div>
        </header>
    )
}

export default Header