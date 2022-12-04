import React from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react';
import { Github } from './GithubCalender';
import GithubStatus from './GithubStatus';

const Statistics = () => {
  return (
    <>
    <Box>
    <Heading color={'blue.500'} mb={14} pt={24} textAlign='center'><u>Statistics</u></Heading>
    <Flex width={"80%"} margin="auto" mb={20}>
      <Github />
    </Flex>
    <Box width={"80%"} margin="auto" mb={20}>
      <GithubStatus />
    </Box>
    </Box>
    </>
  )
}

export default Statistics;