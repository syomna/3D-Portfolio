import {
  Box,
  Button,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LOGO from "/logo.png";
import { Colors } from "../utils/colors";
import { Constants } from "../utils/constants";
import DragHandleIcon from "@mui/icons-material/DragHandle";

const Navbar = () => {
  const cta = ["Overview", "Experience", "Projects", "Contact"];

  const [anchorEl, setAnchorEl] = useState(null);

  const handleDragHandleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  return (
    <Box
      height={60}
      width={{ xs: "90.5%", sm: "96%", md: "85%" }}
      position="fixed"
      top={0}
      pt={{ xs: 2, md: 0 }}
      px={{ xs: Constants.mainPaddingXs, md: Constants.mainPaddingMd }}
      sx={{ backgroundColor: "black", zIndex: 1000 }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" gap={2} alignItems="center">
          <Box height={30} component="img" src={LOGO} />
          <Box
            height="1.5rem"
            style={{
              border: "1px solid white",
            }}
          />
          <Typography fontWeight="500"> Yomna Salah</Typography>
        </Stack>
        <Stack direction="row" py={2} display={{ xs: "none", md: "flex" }}>
          {cta.map((c) => (
            <a href={`#${c}`} key={c}>
              <Typography
                fontSize={14}
                fontWeight="500"
                paddingX={2}
                paddingY={1}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: Colors.primary,
                    borderWidth: 1,
                    borderRadius: 2,
                  },
                }}
              >
                {c}
              </Typography>
            </a>
          ))}
        </Stack>
        <Button
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={handleDragHandleClick}
        >
          <DragHandleIcon color="white" />
        </Button>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          sx={{
            "& .MuiPaper-root": {
              backgroundColor: Colors.blue, // Replace with your desired background color
            },
          }}
        >
          {cta.map((c) => (
            <a href={`#${c}`} key={c}>
              <Typography
                fontSize={14}
                fontWeight="500"
                paddingX={2}
                paddingY={1}
                color="white"
                sx={{
                  cursor: "pointer",
                }}
              >
                {c}
              </Typography>
            </a>
          ))}
        </Popover>
      </Stack>
    </Box>
  );
};

export default Navbar;
