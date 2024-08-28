import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';
import menuIcon from './assets/menu.png';
import closeMenuIcon from './assets/close_small.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMobileDropdown = () => {
        setIsMobileDropdownOpen(!isMobileDropdownOpen);
    };

    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar-brand">Pizzeria Passione</Link>
                <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/" className="nav-link">Início</Link></li>
                    <li className="nav-item"><Link to="/menu" className="nav-link">Menu</Link></li>
                    <li className="nav-item"><Link to="/sobre_nos" className="nav-link">Acerca de Nós</Link></li>
                    {/* 
                    <li className="nav-item" onClick={toggleDropdown}>
                        <Link to="#locations" className="nav-link">Outros Estabelecimentos</Link>
                        {isDropdownOpen && (
                            <ul className="dropdown">
                                <li className="dropdown-item"><Link to="#location1" className="nav-link">Estabelecimento 1</Link></li>
                                <li className="dropdown-item"><Link to="#location2" className="nav-link">Estabelecimento 2</Link></li>
                            </ul>
                        )}
                    </li>
                    */}
                    <li className="nav-item"><Link to="/contactos" className="nav-link">Contactos</Link></li>
                </ul>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
                </div>
            </nav>
            {isOpen && (
                <div className="mobile-menu">
                    <img src={closeMenuIcon} alt="Close Icon" className="close-btn" onClick={toggleMenu} />
                    <ul className="mobile-nav">
                        <li className="nav-item"><Link to="/" className="nav-link" onClick={toggleMenu}>Início</Link></li>
                        <li className="nav-item"><Link to="/menu" className="nav-link" onClick={toggleMenu}>Menu</Link></li>
                        <li className="nav-item"><Link to="/sobre_nos" className="nav-link" onClick={toggleMenu}>Acerca de Nós</Link></li>
                        {/* 
                        <li className="nav-item" onClick={toggleMobileDropdown}>
                            <Link to="#locations" className="nav-link">Outros Estabelecimentos</Link>
                            {isMobileDropdownOpen && (
                                <ul className="mobile-dropdown">
                                    <li className="nav-item"><Link to="#location1" className="nav-link" onClick={toggleMenu}>Pizzeria Passione</Link></li>
                                    <li className="nav-item"><Link to="#location2" className="nav-link" onClick={toggleMenu}>Gelataria Sim Papá</Link></li>
                                </ul>
                            )}
                        </li>
                        */}
                        <li className="nav-item"><Link to="/contactos" className="nav-link" onClick={toggleMenu}>Contactos</Link></li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Navbar;
