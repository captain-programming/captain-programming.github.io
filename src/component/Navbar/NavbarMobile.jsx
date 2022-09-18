import React from 'react';
import Logo from "../../resources/dk-logo.jpg";
import { Flex, IconButton, Img, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';

const NavbarMobile = () => {
  return (
    <>
    <Flex justifyContent={'space-between'} p={3} width={'85%'} margin="auto" alignItems={'center'} className='Navbar'>
      <NavLink to="/"><Img src={Logo} alt='' width={20} borderRadius={10}/></NavLink>
      <Menu>
            <MenuButton 
            as={IconButton}
            icon={<HamburgerIcon />}
            variant='outline'
            />
            <MenuList>
                  <MenuItem>Home</MenuItem>
                  <MenuItem>About me</MenuItem>
                  <MenuItem>Skills</MenuItem>
                  <MenuItem>Projects</MenuItem>
                  <MenuItem>Contacts</MenuItem>
            </MenuList>
        
      </Menu>
    </Flex>
    </>
  )
}

export default NavbarMobile;