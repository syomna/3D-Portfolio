import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Colors } from "../utils/colors";
import { Constants } from "../utils/constants";
import { motion } from "framer-motion";

const Intro = () => {
  const MotionTypography = motion(Typography);

  return (
    <Stack
      direction="column"
      pt={{ xs: "25%", md: "10%" }}
      px={{ xs: Constants.mainPaddingXs, md: Constants.mainPaddingMd }}
    >
      <Box
        display="flex"
        flexDirection="column"
        flexWrap="wrap"
        width={{ xs: "100%", md: "50%" }}
      >
        <Stack direction="row" gap={1}>
          <MotionTypography
            // variant="h3"
            fontWeight="bold"
            fontSize={40}
            initial={{ opacity: 0, x: -50 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Hi, I'm
          </MotionTypography>
          <MotionTypography
            variant="h3"
            fontWeight="900"
            color={Colors.primary}
            initial={{ opacity: 0, x: 50 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Yomna
          </MotionTypography>
        </Stack>
        <MotionTypography
          pt={2}
          variant="h6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Software Developer | Mastering React.js and Flutter for Next-Level
          Applications
        </MotionTypography>
      </Box>
    </Stack>
  );
};

export default Intro;
