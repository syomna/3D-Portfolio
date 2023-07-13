import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import { Colors } from "../utils/colors";
import { Constants } from "../utils/constants";
import {
  VerticalTimeline,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExpElement from "./ExpElement";
import { Infos } from "../utils/infos";

const MotionTypography = motion(Typography);
const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once when in view
    threshold: 0.5, // Adjust this value based on when you want the animation to start
  });
  return (
    <div id="Experience">
      <Box
        mt={6}
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
          WHAT I HAVE DONE SO FAR
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
          Working Experience
        </MotionTypography>

        <VerticalTimeline>
          {Infos.experience.map((ex) => {
            return (
              <ExpElement
                key={ex.title}
                img={ex.img}
                title={ex.title}
                place={ex.place}
                isIti={ex.isIti}
                date={ex.date}
              />
            );
          })}
        </VerticalTimeline>
      </Box>
    </div>
  );
};

export default Experience;
