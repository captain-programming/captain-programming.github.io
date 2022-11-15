import React from 'react';
import {Box, Text, Heading, Flex, Link, FormControl, FormLabel, Input, FormHelperText, Textarea, Button} from "@chakra-ui/react";
import {GoLocation} from "react-icons/go";
import {IoMdCall} from "react-icons/io";
import {GrMail, GrLinkedinOption, GrGithub, GrTwitter} from "react-icons/gr";
import {SiHackerrank} from "react-icons/si";
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <>
    <Box bg={'gray.800'} color='white' p={10}>
    <Heading color={'blue.500'} mb={14} textAlign='center'><u>Get in touch</u></Heading>
    <Flex direction={['column', 'row']} width={'80%'} margin="auto" justifyContent={'space-between'}>
			<Flex direction={'column'} gap={3} fontSize={['16px', '20px']}>
				<Heading fontSize="25px">Dinesh Karde</Heading>
				<Flex alignItems={'center'} gap={2}>
					<GoLocation />
					<Link href='https://goo.gl/maps/LaXVYocgZW1WGqfs7' target={"_blank"}>Kopargoan, Maharashtra</Link>
				</Flex>
				<Flex alignItems={'center'} gap={2}>
					<IoMdCall />
					<Text>+91 7743891068</Text>
				</Flex>
				<Flex alignItems={'center'} gap={2}>
					<GrMail />
					<Link href="mailto:dineshkarde103@gmail.com" target={"_blank"}>dienshkarde103@gmail.com</Link>
				</Flex>
				<Flex gap={4} mt={4}>
					<Link href='https://www.linkedin.com/in/dinesh-karde/'_hover={{"color": "#00ffff"}} target={"_blank"}><GrLinkedinOption fontSize={26} /></Link>
					<Link href='https://github.com/captain-programming' _hover={{"color": "#00ffff"}}target={"_blank"}><GrGithub fontSize={26}/></Link>
					<Link href='https://twitter.com/DineshKarde103' _hover={{"color": "#00ffff"}}target={"_blank"}><GrTwitter fontSize={26}/></Link>
					<Link href='https://www.hackerrank.com/dineshkarde103' _hover={{"color": "#00ffff"}}target={"_blank"}><SiHackerrank fontSize={26}/></Link>
				</Flex>
			</Flex>
			<Flex direction={'column'} width={['100%', '40%']}>
				<Heading fontSize={'20px'} mt={[20, 0]} mb={2}>Send me an email</Heading>
				<ContactForm />
			</Flex>
    </Flex>
		<Text  mt={7} textAlign={'center'}>© 2020 copyright all right reserved</Text>
    </Box>
    </>
  )
}

export default Contact;