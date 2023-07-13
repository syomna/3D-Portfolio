import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { Colors } from "../utils/colors";
import { Constants } from "../utils/constants";
import { Infos } from "../utils/infos";
import ProjectCard from "./ProjectCard";

const MotionTypography = motion(Typography);

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once when in view
    threshold: 0.5, // Adjust this value based on when you want the animation to start
  });
    return (
      <div id="Projects">
        <Box
          mt={8}
          px={{
            xs: Constants.mainPaddingXs,
            md: Constants.mainPaddingMd,
          }}
        >
          <MotionTypography
            ref={ref}
            mb={1}
            fontSize={10}
            color={Colors.grey}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1.5 }}
          >
            MY WORK
          </MotionTypography>
          <MotionTypography
            ref={ref}
            variant="h4"
            fontWeight="900"
            mb={4}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1.5 }}
          >
            Projects
          </MotionTypography>

          <MotionTypography
            ref={ref}
            fontSize={14}
            width={{ xs: "100%", md: "60%" }}
            sx={{ color: Colors.grey }}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1.5 }}
          >
            These projects exemplify my skills and expertise through real-world
            examples of my work. Each project is accompanied by a concise
            description, along with links to code repositories and live demos.
            They serve as a testament to my proficiency in tackling intricate
            challenges, adeptness with diverse technologies, and successful
            project management.
          </MotionTypography>

          <Box mt={4}>
            <Box display="flex" flexWrap="wrap" gap={4}>
              {Infos.projects.map((p) => {
                return <ProjectCard key={p.title} project={p} />;
              })}
            </Box>
          </Box>
        </Box>
      </div>
    );
};

export default Projects;
