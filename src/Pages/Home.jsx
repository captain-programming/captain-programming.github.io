import { Box } from '@chakra-ui/react';
import React from 'react';
import About from '../component/About/About';
import PortfollioLaptop from '../component/Home/PortfollioLaptop';
import PortfollioMobile from '../component/Home/PortfollioMobile';
import PortfollioTablet from '../component/Home/PortfollioTablet';
import Projects from '../component/Projects/Projects';
import Skills from '../component/Skills/Skills';
import Contact from '../component/Contact/Contact';

const Home = () => {
  return (
    <>
      <Box className='container'>
      <Box className='PortfollioLaptop'  pt={40}><PortfollioLaptop /></Box>
      <Box className='PortfollioMobile'  p={10}><PortfollioMobile /></Box>
      <Box className='PortfollioTablet'  p={10}><PortfollioTablet /></Box>
      </Box>
      <Box>
      <Box><About/></Box>
      <Box><Skills /></Box>
      <Box width={"80%"} margin="auto" mt={40}><Projects /></Box>
      <Contact />
      </Box>
    </>  )
}

export default Home