import React from 'react';
import Logo from "../../resources/dk-logo.jpg";
import { Flex, Img } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const NavbarLaptop = () => {
  const [showNavList, setShowNavList] = useState("#home");
  const resumeLink = 'https://drive.google.com/file/d/1FS-AYR0uBiDlbuN3sJbmoZG-d2i1f_lg/view?usp=sharing';

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(id);
  };

  const resumeButton = () =>{
    fetch('Dinesh-Karde-Resume.pdf').then(res =>{
      res.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Dinesh-Karde-Resume.pdf';
        alink.click();
      })
    })

    window.open(resumeLink, '_blank');
  };
  
  console.log(showNavList);
  return (
    <>
    <Flex id="nav-menu" justifyContent={'space-between'} p={[3, 2, 1, 2]} width={'100%'} margin="auto" alignItems={'center'} boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'} position={'fixed'} bg='gray.300'>
      <NavLink to="/"><Img src={Logo} alt='' width={20} borderRadius={10}/></NavLink>
      <Flex gap={10} fontWeight="700" pr={2} fontSize='20px'>

        <a class="nav-link home" href='#home' onClick={() =>  toggleNavList("#home")} style={showNavList==="#home"? {textDecoration: "underline", color:'rgb(47,123,197)'}: {textDecoration: ""}}>Home</a>

        <a class="nav-link about" href='#about' onClick={() =>  toggleNavList("#about")} style={showNavList==="#about"? {textDecoration: "underline", color:'rgb(47,123,197)'}: {textDecoration: ""}}>About me</a>

        <a class="nav-link skills" href='#skills' onClick={() =>  toggleNavList("#skills")} style={showNavList==="#skills"? {textDecoration: "underline", color:'rgb(47,123,197)'}: {textDecoration: ""}}>Skills</a>

        <a class="nav-link projects" href='#projects' onClick={() =>  toggleNavList("#projects")} style={showNavList==="#projects"? {textDecoration: "underline", color:'rgb(47,123,197)'}: {textDecoration: ""}}>Projects</a>

        <a href='#statistics' onClick={() =>  toggleNavList("#statistics")} style={showNavList==="#statistics"? {textDecoration: "underline", color:'rgb(47,123,197)'}: {textDecoration: ""}}>Statistics</a>

        <a class="nav-link contact" href='#contact' onClick={() =>  toggleNavList("#contact")} style={showNavList==="#contact"? {textDecoration: "underline", color:'rgb(47,123,197)'}: {textDecoration: ""}}>Contact</a>
        
        <a class="nav-link resume" href='#resume' onClick={resumeButton} id="resume-link-1">Resume</a>
      </Flex>
    </Flex>
    </>
  )
}

export default NavbarLaptop