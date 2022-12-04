import React from 'react';
import {GrLinkedinOption, GrGithub, GrTwitter} from "react-icons/gr";
import Pic from "../../resources/img.png";
import { Flex, Heading, Button, Img, Link, Text, Image } from '@chakra-ui/react';
import Typed from 'react-typed';

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
    <Flex direction={'column'} gap={4} mt={16}>
      <Heading>Hi 👋,</Heading>
      <Heading>I'am <span style={{color: "rgb(49,130,206)"}}>Dinesh</span></Heading>
      <Text fontSize={['xl', '2xl', '3xl', '4xl']} fontWeight="bold">I'm a <span style={{ color: "rgb(49,130,206)" }}> <Typed
            strings={['Full Stack Web Developer', "MERN Stack Developer"]}
            typeSpeed={80} loop
            backSpeed={80}
        />
        </span> 
      </Text>
      <Button colorScheme={'blue'} width="140px" mt={6} 
      onClick={resumeButton}
      >Resume</Button>
      
    </Flex>
    <Flex direction={'column'} alignItems='center' justifyContent={'center'}>
    <Image src={Pic} w={["250px", "340px"]} borderRadius="20%"  h={["250px", "340px"]} mt={16}/>
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