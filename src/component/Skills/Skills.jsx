import { Heading, Box, Flex } from "@chakra-ui/react";
import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandReactNative,
} from "react-icons/tb";
import {
  SiRedux,
  SiChakraui,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { BiGitMerge } from "react-icons/bi";
import React from "react";

const Skills = () => {
  return (
    <>
      <Box mb={20} id="skills">
        <Heading color={"blue.500"} mb={14} pt={24} textAlign="center">
          <u>Skills</u>
        </Heading>
        <Flex className="SkillList">
          <Flex className="SkillListAll">
            <Heading fontSize={"22px"} mb={3}>
              Front-end Skills
            </Heading>
            <Flex
              shadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
              }
              p={3}
              alignItems="center"
              gap={6}
              borderRadius={10}
            >
              <TbBrandHtml5 fontSize="30px" color="rgb(228,97,39)" class="skills-card-img"/>
              <Heading size={"sm"} class="skills-card-name">HTML5</Heading>
            </Flex>

            <Flex
              shadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
              }
              p={3}
              alignItems="center"
              gap={6}
              borderRadius={10}
            >
              <TbBrandCss3 fontSize="30px" color="rgb(46,75,210)" class="skills-card-img"/>
              <Heading size={"sm"} class="skills-card-name">CSS3</Heading>
            </Flex>

            <Flex
              shadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
              }
              p={3}
              alignItems="center"
              gap={6}
              borderRadius={10}
            >
              <TbBrandJavascript fontSize="30px" color="rgb(234,212,28)" class="skills-card-img"/>
              <Heading size={"sm"} class="skills-card-name">JAVASCRIPT</Heading>
            </Flex>

            <Flex
              shadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
              }
              p={3}
              alignItems="center"
              gap={6}
              borderRadius={10}
            >
              <TbBrandReactNative fontSize="30px" color="rgb(95,210,243)" class="skills-card-img"/>
              <Heading size={"sm"} class="skills-card-name">REACT</Heading>
            </Flex>

            <Flex
              shadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
              }
              p={3}
              alignItems="center"
              gap={6}
              borderRadius={10}
            >
              <SiRedux fontSize="30px" color="rgb(115,72,183)" class="skills-card-img"/>
              <Heading size={"sm"} class="skills-card-name">REDUX</Heading>
            </Flex>

            <Flex
              shadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
              }
              p={3}
              alignItems="center"
              gap={6}
              borderRadius={10}
            >
              <SiChakraui fontSize="30px" color="rgb(71,201,193)" class="skills-card-img"/>
              <Heading size={"sm"} class="skills-card-name">CHAKRA-UI</Heading>
            </Flex>

            <Flex
              shadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
              }
              p={3}
              alignItems="center"
              gap={6}
              borderRadius={10}
            >
              <SiTypescript fontSize="30px" color="rgb(47,116,192)" class="skills-card-img"/>
              <Heading size={"sm"} class="skills-card-name">TYPESCRIPT</Heading>
            </Flex>
          </Flex>
          <Flex className="SkillListAll">
            <Heading fontSize={"22px"} mb={3}>
              DSA & Other
            </Heading>

            <Flex
              shadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
              }
              p={3}
              alignItems="center"
              gap={6}
              borderRadius={10}
            >
              <BiGitMerge fontSize="30px" color="rgb(232,76,48)" class="skills-card-img"/>
              <Heading size={"sm"} class="skills-card-name">Git</Heading>
            </Flex>

            <Flex
              shadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
              }
              p={3}
              alignItems="center"
              gap={6}
              borderRadius={10}
            >
              <img
                src="https://play-lh.googleusercontent.com/9zvNJHedNg_6lOdwcodODMVsyeHKxuTIpnbBzomRGGZAp_vKVXnd5SlF8XZcXyGYjQ"
                width={"50px"}
                alt=""
                class="skills-card-img"
              />
              <Heading size={"sm"} class="skills-card-name">Data Strucure & algorithums</Heading>
            </Flex>
          </Flex>
          <Flex className="SkillListAll">
            <Heading fontSize={"22px"} mb={3}>
              Back-end Skills
            </Heading>

            <Flex
              shadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
              }
              p={3}
              alignItems="center"
              gap={6}
              borderRadius={10}
            >
              <SiExpress fontSize="30px" color="rgb(88,89,88)" class="skills-card-img"/>
              <Heading size={"sm"} class="skills-card-name">Express.js</Heading>
            </Flex>

            <Flex
              shadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
              }
              p={3}
              alignItems="center"
              gap={6}
              borderRadius={10}
            >
              <SiNodedotjs fontSize="30px" color="rgb(126,199,41)" class="skills-card-img"/>
              <Heading size={"sm"} class="skills-card-name">Node.js</Heading>
            </Flex>

            <Flex
              shadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
              }
              p={3}
              alignItems="center"
              gap={6}
              borderRadius={10}
            >
              <SiMongodb fontSize="30px" color="rgb(66,148,66)" class="skills-card-img"/>
              <Heading size={"sm"} class="skills-card-name">MongoDB</Heading>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Skills;
