import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { Tilt } from "react-tilt";
import { Colors } from '../utils/colors';

const TiltCard = ({img, title}) => {

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
      height: 200,
      width: 200,
      border: `2px solid ${Colors.blue}`,
      borderRadius: "0.5rem",
    };
  return (
    <Tilt options={defaultOptions} style={style}>
      <Stack height={200} alignItems="center" justifyContent="center" gap={2}>
        <Box component="img" height={40} width={40} src={img} />
        <Typography>{title}</Typography>
      </Stack>
    </Tilt>
  );
}

export default TiltCard