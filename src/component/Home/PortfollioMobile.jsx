import React from 'react';
import {GrLinkedinOption, GrGithub, GrTwitter} from "react-icons/gr";
import Pic from "../../resources/img.png";
import { Flex, Heading, Button, Img, Link } from '@chakra-ui/react';

const PortfollioMobile = () => {
  const resumeLink = 'https://drive.google.com/file/d/1FS-AYR0uBiDlbuN3sJbmoZG-d2i1f_lg/view?usp=sharing';

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
  }

  return (
    <>
    <Flex direction={'column'} gap={4}>
      <Heading>Hi 👋,</Heading>
      <Heading>I'am <span style={{color: "blue"}}>Dinesh</span></Heading>
      <Heading>MERN Stack Developer</Heading>
      <Button colorScheme={'blue'} width="140px" mt={6} 
      onClick={resumeButton}
      >Resume</Button>
      
    </Flex>
    <Flex direction={'column'} alignItems='flex-end' justifyContent={'center'}>
      <Img src={Pic} alt='' width={60} height={60} borderRadius="50%" mt={24}/>
    </Flex>
    <Flex gap={4} mt={20}>
            <Link href='https://www.linkedin.com/in/dinesh-karde/'_hover={{"color": "#00ffff"}} target={"_blank"}><GrLinkedinOption fontSize={26} /></Link>
            <Link href='https://github.com/captain-programming' _hover={{"color": "#00ffff"}}target={"_blank"}><GrGithub fontSize={26}/></Link>
            <Link href='https://twitter.com/DineshKarde103' _hover={{"color": "#00ffff"}}target={"_blank"}><GrTwitter fontSize={26}/></Link>
      </Flex>
    </>
  )
}

export default PortfollioMobile;