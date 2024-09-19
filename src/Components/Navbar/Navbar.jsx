import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo1 from '../../assets/fnl_logo.png';
import './Navbar.css';
import menu from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // New state for menu visibility

  const navItems = [
    { name: 'Home', to: 'hero', offset: 0 },
    { name: 'About Us', to: 'hero', offset: 680 },
    { name: 'Services', to: 'program', offset: -120 },
    { name: 'Contact us', to: 'contact', offset: -180 },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu visibility
  };

  return (
    <>
      <div>
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
          <img src={logo1} alt="Logo" className="logo" />
          <ul className='ull'>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  smooth={true}
                  offset={item.offset}
                  duration={500}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="nav-link"
                >
                  {item.name}
                  {hoveredItem === item.name && <span className="hover-line"></span>}
                </Link>
              </li>
            ))}
          </ul>
          <div>
            <Link to="contact" smooth={true} offset={-180} duration={500}>
              <button className="btn11">Book Appointment</button>
            </Link>
          </div>
          <div className="menudiv" onClick={toggleMenu}>
            <img src={menu} alt="Menu" />
          </div>
        </nav>

        {/* Hello div visibility controlled by menuOpen state */}
        <div className={`hello ${menuOpen ? 'show' : ''}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  smooth={true}
                  offset={item.offset}
                  duration={500}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="nav-link"
                >
                  {item.name}
                  {hoveredItem === item.name && <span className="hover-line"></span>}
                </Link>
              </li>
            ))}
          </ul>
          <div className='yio'>
            <Link to="contact" smooth={true} offset={-180} duration={500}>
              <button className="btn11">Book Appointment</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
