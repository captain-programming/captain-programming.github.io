import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const About = () => {
  return (
    <>
      <Box id="about" class="about section" textAlign={"center"} p={["100px 10px", "200px 10px"]}>
        <Heading color={"blue.500"} mb={14}>
          <u>About me</u>
        </Heading>
        <Flex className="AboutText">
          <Heading fontSize={["25px", "30px"]} id="user-detail-name">I'am Dinesh Karde</Heading>
          <Text fontSize={["20px", "25px"]} textAlign="justify" id="user-detail-intro">
            Quick learner, web developer with the ability to write clean,
            reusable, optimised code and an aspiring full-stack web developer
            with core knowledge of MERN stack technology. Looking forward to
            applying and enhancing my skills and knowledge as a developer.
          </Text>
        </Flex>
        <Flex className="AboutContact" fontSize={["16px", "20px"]}>
          <Link href="https://goo.gl/maps/ViVkyGA3zvJWHmvLA" target={"_blank"}>
            <Flex alignItems="center" gap={2}>
              <MdLocationOn /> Ahmednagar, Maharashtra
            </Flex>
          </Link>
          <Link href="mailto:dineshkarde103@gmail.com" target={"_blank"}>
            <Flex alignItems="center" gap={2}>
              <MdEmail />
              dineshKarde103@gmail.com
            </Flex>
          </Link>
          <Flex alignItems="center" gap={2}>
            <MdPhone />
            7743891068
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default About;
