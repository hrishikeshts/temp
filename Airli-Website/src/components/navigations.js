import React, { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    Nav,
    Collapse,
    NavbarToggler,
} from "reactstrap";
import { Link } from 'react-router-dom';
import blacklogo from "../graphics/airli-logo-black.png";

function NavigationS() {
    const [collapsed, setCollapsed] = useState(true);
    const [expand, setExpand] = useState("");
    const [toggleMenu, setMenu] = useState(false);

    const icon = !toggleMenu ? (
        <svg
            aria-hidden='true'
            focusable='false'
            width='20px'
            data-prefix='fas'
            data-icon='bars'
            class='svg-inline--fa fa-bars fa-w-14'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
        >
            <path
                fill='white'
                d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z'
            ></path>
        </svg>
    ) : (
        <svg
            aria-hidden='true'
            focusable='false'
            width='20px'
            data-prefix='fas'
            data-icon='times'
            class='svg-inline--fa fa-times fa-w-11'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 352 512'
        >
            <path
                fill='black'
                d='M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z'
            ></path>
        </svg>
    );

    const toggle = () => {
        setCollapsed((prevState) => !prevState);
        if (collapsed) {
            setExpand("nav-expand");
        } else setExpand("");
        setMenu((prevState) => !prevState);
    };

    return (
        <Navbar
            expand='md'
            className={`nav-active ${expand}`}
            fixed='top'
        >
        <NavbarBrand href='/' className='mr-auto' draggable='false'>
            <img
                src={blacklogo}
                alt='Airli'
                width='100px'
                draggable='false'
            />
        </NavbarBrand>
            <NavbarToggler onClick={toggle} className='mr-2'>
                {icon}
            </NavbarToggler>
            <Collapse isOpen={!collapsed} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href='/' draggable='false'>
                            <span>Home</span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            href='https://www.orbitaustralia.com/'
                            id='orbitaustralia'
                            target='_blank'
                            rel='noreferrer'
                            draggable='false'
                        >
                            <aside>Orbit</aside>
                            <span>Australia</span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#download' draggable='false'>
                            <span>Download</span>
                        </NavLink>
                    </NavItem>
                    <NavItem >
                        <Link className="nav-link" to='/aboutus' draggable='false'>
                            About Us
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to='/other' draggable='false'>
                            Other
                        </Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default NavigationS;
