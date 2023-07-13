import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { Colors } from "../utils/colors";
import { Constants } from "../utils/constants";
import ContactForm from "./ContactForm";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EarthCanvas from "./canvas/EarthCanvas";

const Contact = () => {
    
    return (
      <div id="Contact">
        <Stack
          px={{ xs: Constants.mainPaddingXs, md: Constants.mainPaddingMd }}
          my={10}
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
        >
          <Box
            height="50%"
            width={{ xs: "80%", md: "40%" }}
            p={4}
            sx={{ backgroundColor: Colors.darkBlue, borderRadius: "1.5rem" }}
            order={{ xs: 2, md: 1 }}
          >
            <Typography fontSize={10} color={Colors.grey}>
              GET IN TOUCH
            </Typography>
            <Typography fontWeight="900" my={1} mb={4} variant="h4">
              Contact
            </Typography>
            <ContactForm />
            <Box
              display="flex"
              alignItems="center"
              margin="1rem 0"
              justifyContent="center"
            >
              <Box
                width="40%"
                style={{
                  border: `0.5px solid ${Colors.grey}`,
                }}
              />
              <Typography variant="body1" sx={{ mx: "1rem" }}>
                Or
              </Typography>
              <Box
                width="40%"
                style={{
                  border: `0.5px solid ${Colors.grey}`,
                }}
              />
            </Box>
            <a href="https://www.linkedin.com/in/yomna-s/" target="_blank">
              <Button
                mt={4}
                py={4}
                sx={{
                  backgroundColor: Colors.blue,
                  borderRadius: "0.5rem",
                  width: "100%",
                  // "&:hover": { backgroundColor: Colors.blue },
                }}
              >
                <Stack direction="row" alignItems="center" gap={2}>
                  <LinkedInIcon />
                  <Typography
                    fontSize={14}
                    color="white"
                    sx={{ textTransform: "capitalize" }}
                  >
                    Contact me on LinkedIn
                  </Typography>
                </Stack>
              </Button>
            </a>
          </Box>
          <Box
            order={{ xs: 1, md: 2 }}
            // height="80%"
            width={{ xs: "80%", md: "50%" }}
          >
            <EarthCanvas />
          </Box>
        </Stack>
      </div>
    );
};

export default Contact;
