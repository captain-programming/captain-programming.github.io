import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import { Box } from '@chakra-ui/react';
import NavbarLaptop from '../component/Navbar/NavbarLaptop';
import NavbarMobile from '../component/Navbar/NavbarMobile';
import useWindowDimensions from '../hook/useWindowDimentions';

const AllRouters = () => {
  const { height, width } = useWindowDimensions();
  
  console.log(height, width)
  return (
    <>
    {(width > 820) ? (
      <Box><NavbarLaptop /></Box>
    ):(
      <Box className='NavbarMobile'><NavbarMobile /></Box>
    )}

    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
    </>
  )
}

export default AllRouters