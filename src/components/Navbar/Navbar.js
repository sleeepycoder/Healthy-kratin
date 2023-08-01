import React, { useState } from 'react';
import { FiUser, FiMenu } from 'react-icons/fi';
import './navbar.css'; // Create a separate CSS file for styling
import {Link} from 'react-router-dom'
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Define your navigation items and dropdown menus in an array
  const navItems = [
    // home Selection
    { title: 'Home', link: '/' },
    { title: 'UserProfile', link: '/userprofile' },
    { title: 'healthInformation', link: '/health' },
    { title: 'Personal Plane', link: '/plane' },
    { title: 'MealPlanner', link: '/meals' },
    { title: 'Contact', link:'/contact' },
    
  ]
  const userDropdownMenu = [
    { title: 'Profile', link: '/profile' },
    { title: 'Login', link: '/login' },
    { title: 'Register', link: '/register' },
    
  ];
  return (
    <><nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to='/' style={{ textDecoration: 'none' }}>Healthy</Link>
        </div>
        <ul className={showMenu ? 'nav-links active' : 'nav-links'}>
          {/* Use map to render navigation items */}
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
          <li className="user-icon-dropdown">
            <FiUser size={24} onClick={toggleMenu} />
            {showMenu && (
              <ul className="dropdown-menu">
                {userDropdownMenu.map((item, index) => (
                  <li key={index}>
                    <a href={item.link}>{item.title}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          <FiMenu size={24} />
        </div>
      </div>
    </nav></>
  );
  
                }
export default Navbar;
