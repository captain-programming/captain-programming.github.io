import { Box, Flex, Img } from '@chakra-ui/react'
import React from 'react'

const GithubStatus = () => {
	return (
		<>
		<Flex direction='column' gap={10} fontSize='15px'>
			<Img id="github-streak-stats" src='https://github-readme-streak-stats.herokuapp.com/?user=captain-programming&' />

			<Img id="github-stats-card" src='https://github-readme-stats.vercel.app/api?username=captain-programming&show_icons=true&locale=en' />

			<Img id="github-top-langs" src='https://github-readme-stats.vercel.app/api/top-langs?username=captain-programming&show_icons=true&locale=en&layout=compact' />
		</Flex>
		</>
	)
}

export default GithubStatus