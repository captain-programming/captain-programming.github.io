import React from "react";
import ProjectDetails from "./ProjectDetails";
import { Box, Heading } from "@chakra-ui/react";
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
import myhours1 from "../../resources/myhours/myhours1.png";
import myhours2 from "../../resources/myhours/myhours2.png";
import myhours3 from "../../resources/myhours/myhours3.png";
import myhours4 from "../../resources/myhours/myhours4.png";
import myhours5 from "../../resources/myhours/myhours5.png";
import myhours6 from "../../resources/myhours/myhours6.png";
import myhours7 from "../../resources/myhours/myhours7.png";
import myhours8 from "../../resources/myhours/myhours8.png";
import myhours9 from "../../resources/myhours/myhours9.png";
import beautiva1 from "../../resources/beautiva/beautiva1.png";
import beautiva2 from "../../resources/beautiva/beautiva2.png";
import beautiva3 from "../../resources/beautiva/beautiva3.png";
import beautiva4 from "../../resources/beautiva/beautiva4.png";
import beautiva5 from "../../resources/beautiva/beautiva5.png";
import beautiva6 from "../../resources/beautiva/beautiva6.png";
import beautiva7 from "../../resources/beautiva/beautiva7.png";
import beautiva8 from "../../resources/beautiva/beautiva8.png";
import beautiva9 from "../../resources/beautiva/beautiva9.png";
import beautiva10 from "../../resources/beautiva/beautiva10.png";
import beautiva11 from "../../resources/beautiva/beautiva11.png";
import beautiva12 from "../../resources/beautiva/beautiva12.png";
import beautiva13 from "../../resources/beautiva/beautiva13.png";

const projectArr = [
  {
    title: "Sephora Clone",
    description:
      "Sephora is a beauty product brand and we made a clone of its online retail platform.",
    team: "A collaborative project built by a team of 5, executed in 5 days.",
    techStack: "CSS | HTML | JavaScript",
    codeLink: "https://github.com/Suraj-Badwaik/Sephora-clone",
    liveLink: "https://sephora-clone-website.netlify.app/",
    img: [
      sephora1,
      sephora2,
      sephora3,
      sephora4,
      sephora5,
      sephora6,
      sephora7,
      sephora8,
      sephora9,
      sephora10,
    ],
  },
  {
    title: "Cricinfo Clone",
    description:
      "Cricinfo is the best cricket news website and we made a clone of its online cricket news platform.",
    team: "A collaborative project built by a team of 5, executed in 5 days.",
    techStack: "CSS | HTML | JavaScript",
    codeLink: "https://github.com/vivek13420/CricInfo-Clone",
    liveLink: "https://cerulean-starlight-aac220.netlify.app/",
    img: [
      cricinfo1,
      cricinfo2,
      cricinfo3,
      cricinfo4,
      cricinfo5,
      cricinfo6,
      cricinfo7,
    ],
  },
  {
    title: "Chargebee Clone",
    description:
      "Chargebee is the subscription billing and revenue management platform and we made a clone of its online subscription platform.",
    team: "An individual project built by a me, executed in 5 days.",
    techStack: "CSS | HTML | JavaScript | React",
    codeLink: "https://github.com/captain-programming/max-alarm-4534",
    liveLink: "https://chargebee-dk-clone.netlify.app/",
    img: [
      chargebee1,
      chargebee2,
      chargebee3,
      chargebee4,
      chargebee5,
      chargebee6,
      chargebee7,
      chargebee8,
    ],
  },
  {
    title: "OLX Clone",
    description:
      "OLX is an electronics and automobile product brand and we made a clone of its online retail platform.",
    team: "An individual project built by a me, executed in 5 days.",
    techStack: "CSS | HTML | JavaScript | React",
    codeLink: "https://github.com/captain-programming/rabid-fire-6527",
    liveLink: "https://olxclonewebsite.netlify.app/",
    img: [olx1, olx2, olx3, olx4, olx5],
  },
  {
    title: "My Hours Clone",
    description:
      "My Hours are organizing projects, tracking time, and reporting your work.",
    team: "A collaborative project built by a team of 5, executed in 5 days.",
    techStack: "CSS | HTML | JavaScript | React | Node.js | MongoDB",
    codeLink: "https://github.com/Surya9263/hideous-crack-5602",
    liveLink: "https://myhour.vercel.app//",
    img: [
      myhours1,
      myhours2,
      myhours3,
      myhours4,
      myhours5,
      myhours6,
      myhours7,
      myhours8,
      myhours9,
    ],
  },
  {
    title: "Beautiva",
    description:
      "Beautiva is an Ecommerce web application that deals with selling lifestyle-related products. Design inspiration is taken from Nykaa.",
    team: "A collaborative project built by a team of 5, executed in 5 days.",
    techStack: "CSS | HTML | JavaScript | React | Node.js | MongoDB",
    codeLink: "https://github.com/sanj1997/wasteful-dock-5798",
    liveLink: "https://beautiva-ecom.netlify.app/",
    img: [
      beautiva1,
      beautiva2,
      beautiva3,
      beautiva4,
      beautiva5,
      beautiva6,
      beautiva7,
      beautiva8,
      beautiva9,
      beautiva10,
      beautiva11,
      beautiva12,
      beautiva13,
    ],
  },
];

const Projects = () => {
  return (
    <Box id="projects">
      <Heading color={"blue.500"} mb={14} pt={24} textAlign="center">
        <u>Projects</u>
      </Heading>
      <Box className="Projects">
        {projectArr.map((p, i) => (
          <ProjectDetails data={p} key={i} />
        ))}
      </Box>
    </Box>
  );
};
export default Projects;
