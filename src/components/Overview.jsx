import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Box, Stack, Typography } from "@mui/material";
import { Constants } from "../utils/constants";
import { Infos } from "../utils/infos";
import Web from "../assets/web.png";
import Mobile from "../assets/mobile.png";
import { Colors } from "../utils/colors";
import TiltCard from "./TiltCard";

const MotionTypography = motion(Typography);

const Overview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once when in view
    threshold: 0.5, // Adjust this value based on when you want the animation to start
  });

  const formattedSummary = Infos.summary.split(".");

  return (
    <div id="Overview">
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        gap={2}
        px={{ xs: Constants.mainPaddingXs, md: Constants.mainPaddingMd }}
      >
        <Box>
          <MotionTypography
            ref={ref}
            mb={1}
            fontSize={10}
            color={Colors.grey}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1.5 }}
          >
            INTRODUCTION
          </MotionTypography>
          <MotionTypography
            ref={ref}
            variant="h4"
            fontWeight="900"
            mb={2}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1.5 }}
          >
            Overview
          </MotionTypography>
          {formattedSummary.map((s) => (
            <MotionTypography
              key={s}
              fontSize={14}
              color={Colors.grey}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1.5 }}
            >
              {s}
            </MotionTypography>
          ))}
        </Box>
        <Stack direction="row" gap={2} mt={4}>
          <TiltCard img={Web} title="Web Developer" />
          <TiltCard img={Mobile} title="Mobile Developer" />
        </Stack>
      </Stack>
    </div>
  );
};

export default Overview;
