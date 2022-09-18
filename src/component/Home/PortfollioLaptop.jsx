import React from 'react';
import {GrLinkedinOption, GrGithub, GrTwitter} from "react-icons/gr";
import Pic from "../../resources/img.jpg";
import { Flex, Heading, Button, Img, Link } from '@chakra-ui/react';

const PortfollioLaptop = () => {
  return (
    <>
    <Flex justifyContent={'space-between'}>
    <Flex direction={'column'} gap={10}>
      <Heading>Hi 👋,</Heading>
      <Heading>I'am <span style={{color: "blue"}}>Dinesh</span></Heading>
      <Heading>MERN Stack Developer</Heading>
      <Button colorScheme={'blue'} width="140px" mt={6} 
      onClick={()=> window.open("https://drive.google.com/file/d/1FS-AYR0uBiDlbuN3sJbmoZG-d2i1f_lg/view?usp=sharing", "_black")}>Download CV</Button>
      <Flex gap={4} mt={10}>
            <Link href='https://www.linkedin.com/in/dinesh-karde/'_hover={{"color": "#00ffff"}} target={"_blank"}><GrLinkedinOption fontSize={26} /></Link>
            <Link href='https://github.com/captain-programming' _hover={{"color": "#00ffff"}} target={"_blank"}><GrGithub fontSize={26}/></Link>
            <Link href='https://twitter.com/DineshKarde103' _hover={{"color": "#00ffff"}}target={"_blank"}><GrTwitter fontSize={26}/></Link>
      </Flex>
    </Flex>
    <Img src={Pic} alt='' className='ProfileImg'/>
    </Flex>
    </>
  )
}

export default PortfollioLaptop;