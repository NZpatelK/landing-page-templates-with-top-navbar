import React, { useState } from 'react';
import { MenuData } from '../Data/MenuData';
import '../Styles/Navbar.css';

interface MenuItem {
    title: string;
    url: string;
    cName: string;
}

const NavBar: React.FC = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = (): void => {
        setClicked(!clicked);
    }

    return (
        <nav className='NavBarItems'>
                <h1 className={clicked ? "hidden" : "logo"}>
                    React <i className='fab fa-react'></i>
                </h1>
                <div className='menu-icons' onClick={handleClick}>
                    <i className={clicked ? 'menu' : ''}>Menu</i>
                </div>
            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {MenuData.map((item: MenuItem, index: number) => {
                    return (
                        <li key={index}>
                            <a href={item.url} className={item.cName}>
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavBar;
