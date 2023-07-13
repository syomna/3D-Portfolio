import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Tilt } from "react-tilt";
import { Colors } from "../utils/colors";
import GitHubIcon from "@mui/icons-material/GitHub";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

const ProjectCard = ({ project }) => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  const style = {
    height: 350,
    width: 280,
    border: `4px solid ${Colors.blue}`,
    borderRadius: "0.5rem",
  };

  const { img, title, subTitle, tech, demo, github , isApp , playStore , appStore } = project;
  return (
    <Tilt options={defaultOptions} style={style}>
      <Stack
        height={350}
        width={280}
        alignItems="center"
        justifyContent="center"
        gap={2}
      >
        <Box
          component="img"
          height="50%"
          width="100%"
          src={img}
          sx={{ borderRadius: "0.5rem", objectFit: "cover" }}
        />
        <Box p={2}>
          <Typography fontWeight="bold">{title}</Typography>
          <Typography my={1} fontSize={10} color={Colors.grey}>
            {subTitle}
          </Typography>
          <Stack direction="row" columnGap={1} flexWrap="wrap">
            {tech.map((t) => (
              <Typography key={t.name} fontSize={10} color={t.color}>
                {t.name}
              </Typography>
            ))}
          </Stack>
          {isApp ? (
            <Stack mt={1} direction="row" justifyContent="space-between">
              <a href={playStore} target="_blank">
                <GoogleIcon />
              </a>

              <a href={appStore} target="_blank">
                <AppleIcon />
              </a>
            </Stack>
          ) : (
            <Stack mt={1} direction="row" justifyContent="space-between">
              <a href={demo} target="_blank">
                <PlayCircleIcon />
              </a>

              <a href={github} target="_blank">
                <GitHubIcon />
              </a>
            </Stack>
          )}
        </Box>
      </Stack>
    </Tilt>
  );
};

export default ProjectCard;
