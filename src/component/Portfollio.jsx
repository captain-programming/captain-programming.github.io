import React from 'react';
import Styles from './portfollio.module.css';
import {GrLinkedinOption, GrGithub} from "react-icons/gr";
import Pic from "../resources/img.jpg";

const Portfollio = () => {
  return (
    <>
    <div className={Styles.portfollio}>
    <div>
      <h2 className={Styles.name}>Hi 👋,</h2>
      <h2 className={Styles.name}>I'am <span>Dinesh</span></h2>
      <h2 className={Styles.name}>MERN Developer</h2>
      <button className={Styles.resumeBtn}>Resume</button>
      <div className={Styles.socialMedia}>
            <a href='https://www.linkedin.com/in/dinesh-karde/' className={Styles.socialLogo}><GrLinkedinOption /></a>
            <a href='https://github.com/captain-programming' className={Styles.socialLogo}><GrGithub /></a>
      </div>
    </div>
    <img src={Pic} alt='' className={Styles.profilePicture}/>
    </div>
    </>
  )
}

export default Portfollio