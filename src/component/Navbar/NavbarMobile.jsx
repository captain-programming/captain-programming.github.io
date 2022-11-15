import React from 'react';
import Logo from "../../resources/dk-logo.jpg";
import { Flex, IconButton, Img, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const NavbarMobile = () => {
  const [showNavList, setShowNavList] = useState(false);
  const resumeLink = 'https://drive.google.com/file/d/1FS-AYR0uBiDlbuN3sJbmoZG-d2i1f_lg/view?usp=sharing';

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
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

  return (
    <>
    <Flex justifyContent={'space-between'} p={3} width={'100%'} margin="auto" alignItems={'center'} position={'fixed'} bg='gray.300' boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}>
      <NavLink to="/"><Img src={Logo} alt='' width={20} borderRadius={10}/></NavLink>
      <Menu>
            <MenuButton 
            as={IconButton}
            icon={<HamburgerIcon />}
            variant='outline'
            />
            <MenuList>
            <Flex gap={2} p={2} pl={4} direction="column">
              <a href='#home' onClick={() =>  toggleNavList("#home")}>Home</a>
              <a href='#about' onClick={() =>  toggleNavList("#about")}>About me</a>
              <a href='#skills' onClick={() =>  toggleNavList("#skills")}>Skills</a>
              <a href='#projects' onClick={() =>  toggleNavList("#projects")}>Projects</a>
              <a href='#statistics' onClick={() =>  toggleNavList("#statistics")}>Statistics</a>
              <a href='#contact' onClick={() =>  toggleNavList("#contact")}>Contact</a>
              <a href='#resume' onClick={resumeButton}>Resume</a>
            </Flex>
            </MenuList>
        
      </Menu>
    </Flex>
    </>
  )
}

export default NavbarMobile;