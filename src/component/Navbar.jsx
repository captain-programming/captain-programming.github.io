import React from 'react';
import Styles from './portfollio.module.css';
import Logo from "../resources/dk-logo.jpg";
import {FiMenu} from "react-icons/fi";

const Navbar = () => {
  return (
    <>
    <div className={Styles.navbar}>
      <img src={Logo} alt='' className={Styles.logo}/>
      <div className={Styles.menu}>
        <p className={Styles.menuItem}>Home</p>
        <p className={Styles.menuItem}>About</p>
        <p className={Styles.menuItem}>Skills</p>
        <p className={Styles.menuItem}>Projects</p>
        <p className={Styles.menuItem}>Contact</p>
      </div>
      <div className={Styles.menuBar}><FiMenu/></div>
    </div>
    </>
  )
}

export default Navbar