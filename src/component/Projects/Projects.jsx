import React from 'react';
import ProjectDetails from './ProjectDetails';  
import { Box, Heading } from '@chakra-ui/react';
import sephora1 from "../../resources/sephora/sephora-1.png";
import sephora2 from "../../resources/sephora/sephora-2.png";
import sephora3 from "../../resources/sephora/sephora-3.png";
import sephora4 from "../../resources/sephora/sephora-4.png";
import sephora5 from "../../resources/sephora/sephora-5.png";
import sephora6 from "../../resources/sephora/sephora-6.png";
import sephora7 from "../../resources/sephora/sephora-7.png";
import sephora8 from "../../resources/sephora/sephora-8.png";
import sephora9 from "../../resources/sephora/sephora-9.png";
import sephora10 from "../../resources/sephora/sephora-10.png";
import cricinfo1 from "../../resources/cricinfo/cricinfo-1.png";
import cricinfo2 from "../../resources/cricinfo/cricinfo-2.png";
import cricinfo3 from "../../resources/cricinfo/cricinfo-3.png";
import cricinfo4 from "../../resources/cricinfo/cricinfo-4.png";
import cricinfo5 from "../../resources/cricinfo/cricinfo-5.png";
import cricinfo6 from "../../resources/cricinfo/cricinfo-6.png";
import cricinfo7 from "../../resources/cricinfo/cricinfo-6.png";
import chargebee1 from "../../resources/chargebee/chargebee-1.png";
import chargebee2 from "../../resources/chargebee/chargebee-2.png";
import chargebee3 from "../../resources/chargebee/chargebee-3.png";
import chargebee4 from "../../resources/chargebee/chargebee-4.png";
import chargebee5 from "../../resources/chargebee/chargebee-5.png";
import chargebee6 from "../../resources/chargebee/chargebee-6.png";
import chargebee7 from "../../resources/chargebee/chargebee-7.png";
import chargebee8 from "../../resources/chargebee/chargebee-8.png";
import olx1 from "../../resources/olx/olx-1.png";
import olx2 from "../../resources/olx/olx-2.png";
import olx3 from "../../resources/olx/olx-3.png";
import olx4 from "../../resources/olx/olx-4.png";
import olx5 from "../../resources/olx/olx-5.png";


const projectArr=[
  {
    title: "Sephora Clone", 
    description: "Sephora is a beauty product brand and we made a clone of its online retail platform.",
    team: "A collaborative project built by a team of 5, executed in 5 days.",
    techStack: "CSS | HTML | JavaScript",
    codeLink: "https://github.com/Suraj-Badwaik/Sephora-clone",
    liveLink: "https://sephora-clone-website.netlify.app/",
    img: [sephora1, sephora2, sephora3, sephora4, sephora5, sephora6, sephora7, sephora8, sephora9, sephora10]
  },
  {
    title: "Cricinfo Clone", 
    description: "Cricinfo is the best cricket news website and we made a clone of its online cricket news platform.",
    team: "A collaborative project built by a team of 5, executed in 5 days.",
    techStack: "CSS | HTML | JavaScript",
    codeLink: "https://github.com/vivek13420/CricInfo-Clone",
    liveLink: "https://cerulean-starlight-aac220.netlify.app/",
    img: [cricinfo1, cricinfo2, cricinfo3, cricinfo4, cricinfo5, cricinfo6, cricinfo7]
  },
  {
    title: "Chargebee Clone", 
    description: "Chargebee is the subscription billing and revenue management platform and we made a clone of its online subscription platform.",
    team: "A collaborative project built by a team of 4, executed in 5 days.",
    techStack: "CSS | HTML | JavaScript | React",
    codeLink: "https://github.com/captain-programming/max-alarm-4534",
    liveLink: "https://chargebee-dk-clone.netlify.app/",
    img: [chargebee1, chargebee2, chargebee3, chargebee4, chargebee5, chargebee6, chargebee7, chargebee8]
  },
  {
    title: "OLX Clone", 
    description: "OLX is a electronics and automobile product brand and we made a clone of its online retail platform.",
    team: "A collaborative project built by a me, executed in 5 days.",
    techStack: "CSS | HTML | JavaScript | React",
    codeLink: "https://github.com/captain-programming/rabid-fire-6527",
    liveLink: "#",
    img: [olx1, olx2, olx3, olx4, olx5]
  },
]

const Projects = () => {
  return (
    <>
      <Heading color={'blue.500'} mb={14} pt={10} textAlign='center'><u>Projects</u></Heading>
      <Box className='Projects'>
        {projectArr.map((p, i)=> (
          <ProjectDetails data={p} key={i}/>
        ))}
    </Box>
    </>
  )
}
export default Projects;