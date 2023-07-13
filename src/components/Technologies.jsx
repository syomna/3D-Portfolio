import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { Colors } from "../utils/colors";
import { Constants } from "../utils/constants";
import { Infos } from "../utils/infos";
import BallCanvas from "./canvas/BallCanvas";

const MotionTypography = motion(Typography);
const Technologies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once when in view
    threshold: 0.5, // Adjust this value based on when you want the animation to start
  });
  return (
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
        TECHNOLOGIES I USE
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
        Technologies
      </MotionTypography>

      <Stack direction="row" flexWrap="wrap" gap={2}>
        {Infos.technologies.map((tech) => {
          return (
            <Stack key={tech.name} alignItems="center" gap={1}>
              <Box height={80} width={80}>
                <BallCanvas icon={tech.icon} />
              </Box>
              <Typography fontSize={10}>{tech.name}</Typography>
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Technologies;
