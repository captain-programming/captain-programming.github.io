import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Button, Flex, Input, Text, Textarea, useToast } from '@chakra-ui/react';
 
const ContactForm = () => {
 const form = useRef();
 const  YOUR_SERVICE_ID = "service_w25muvh";
 const  YOUR_TEMPLATE_ID = "template_664cu7s";
 const YOUR_PUBLIC_KEY = "-cfOXTQ6hNn54VGSN";
 const toast = useToast();
 
 const sendEmail = (e) => {
   e.preventDefault(); // prevents the page from reloading when you hit “Send”
 
   emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
     .then((result) => {
         toast({
					title: 'Send Message.',
          status: 'success',
          duration: 2000,
					position: "top-right",
          isClosable: true,
				 })
				//  console.log(form);
     }, (error) => {
         // show the user an error
				 console.log(error);
     });

		 document.getElementById('contactForm').reset();

 };
 
 return (
   <form id='contactForm' ref={form} onSubmit={sendEmail}>
    <Flex direction='column' gap={3} fontSize={['15px', '18px']}>
			<Box>
				<Text>Full Name</Text>
				<Input type="text" name="user_name" />
			</Box>
			
			<Box>
				<Text>Email Address</Text>
				<Input type="email" name="user_email" />
			</Box>

			<Box>
				<Text>Message</Text>
				<Textarea name="message" />
			</Box>

			<Button type='submit' value="Send" fontSize={['18px', '20px']} bg={'gray.800'} _hover={{color: "blue.500"}}>Send to me</Button> 
		</Flex>
   </form>
 );
};
 
export default ContactForm;