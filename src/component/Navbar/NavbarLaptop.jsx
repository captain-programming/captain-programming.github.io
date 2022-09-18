import React from 'react';
import Logo from "../../resources/dk-logo.jpg";
import { Flex, Heading, Img } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const NavbarLaptop = () => {
  return (
    <>
    <Flex justifyContent={'space-between'} p={[3, 2, 1, 2]} width={'95%'} margin="auto" alignItems={'center'} className='Navbar'>
      <NavLink to="/"><Img src={Logo} alt='' width={20} borderRadius={10}/></NavLink>
      <Flex gap={10}>
        <Heading size={'md'} cursor="pointer">Home</Heading>
        <Heading size={'md'} cursor="pointer">About me</Heading>
        <Heading size={'md'} cursor="pointer">Skills</Heading>
        <Heading size={'md'} cursor="pointer">Projects</Heading>
        <Heading size={'md'} cursor="pointer">Contact</Heading>
      </Flex>
    </Flex>
    </>
  )
}

export default NavbarLaptop