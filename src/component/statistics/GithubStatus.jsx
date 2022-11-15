import { Box, Flex, Img } from '@chakra-ui/react'
import React from 'react'

const GithubStatus = () => {
	return (
		<>
		<Flex direction='column' gap={10} fontSize='15px'>
			<Img src='https://github-readme-streak-stats.herokuapp.com/?user=captain-programming&' />

			<Img src='https://github-readme-stats.vercel.app/api?username=captain-programming&show_icons=true&locale=en' />

			<Img src='https://github-readme-stats.vercel.app/api/top-langs?username=captain-programming&show_icons=true&locale=en&layout=compact' />
		</Flex>
		</>
	)
}

export default GithubStatus