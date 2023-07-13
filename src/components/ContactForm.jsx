import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { Colors } from "../utils/colors";
import emailjs from "@emailjs/browser";


const validationSchema = yup.object().shape({
  name: yup.string().min(3).required("Please enter your name"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  message: yup.string().required("Please enter your message"),
});

const style = {
  backgroundColor: "#1c153b",
  borderRadius: "0.5rem",
  width: "100%",
  padding: 0,
  "& input": {
    fontSize: "0.8rem",
  },
  "& textarea": {
    color: "white",
    fontSize: "0.8rem",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      //  borderColor: "white",
    },
    "& input": {
      color: "white",
    },
    "&::placeholder": {
      color: "white",
      fontSize: "0.7rem",
    },
  },
  "& .MuiFilledInput-input": {
    color: "white",
    fontSize: "0.8rem",
    "&::placeholder": {
      color: "#8d85c7",
      fontSize: "0.8rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    },
  },
  "& .MuiFilledInput-root": {
    backgroundColor: "#1c153b",
    "&:hover:not($Mui-disabled)": {
      backgroundColor: "#1c153b",
    },
    "&.Mui-focused": {
      border: "none",
    },
  },
  "& .MuiFilledInput-underline:before": {
    border: "none",
  },
};

const ContactForm = () => {
  const [messageSent, setMessageSent] = useState("");

  let initialValues = {
    name: "",
    email: "",
    message: "",
  };
  const handleSubmit = (values) => {
    
    emailjs
      .send(
        "service_c69vg1p",
        "template_y6mlthg",
        {
          from_name: `name: ${values.name} email: ${values.email}`,
          from_email: values.email,
          message: values.message,
        },
        "m0NOuyDY7ba6cSqg5"
      )
      .then((res) => {
        values.name = "";
        values.email = "";
        values.message = "";
        setMessageSent("Your message sent successfully! 🎉");
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  useEffect(() => {
    if (messageSent) {
      const timer = setTimeout(() => {
        setMessageSent("");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [messageSent]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Box pb={1}>
          <Typography fontSize={14} mb={1}>
            Your Name
          </Typography>
          <Field name="name">
            {({ field }) => (
              <TextField
                {...field}
                placeholder="What's your name"
                variant="outlined"
                sx={style}
                InputProps={{
                  style: {
                    color: "white",
                    "&::placeholder": {
                      color: "white",
                      fontSize: "0.5rem",
                    },
                  },
                }}
              />
            )}
          </Field>
          <ErrorMessage
            name="name"
            component={Typography}
            sx={{
              color: "red",
              fontSize: 12,
              marginTop: 1,
            }}
          />
        </Box>

        <Box pb={1}>
          <Typography fontSize={14} mb={1}>
            Your Email
          </Typography>
          <Field name="email">
            {({ field }) => (
              <TextField
                {...field}
                placeholder="What's your email?"
                variant="outlined"
                sx={style}
              />
            )}
          </Field>
          <ErrorMessage
            name="email"
            component={Typography}
            sx={{
              color: "red",
              fontSize: 12,
              marginTop: 1,
            }}
          />
        </Box>

        <Box pb={1}>
          <Typography fontSize={14} mb={1}>
            Your Message
          </Typography>
          <Field name="message">
            {({ field }) => (
              <TextField
                {...field}
                placeholder="What do you want to say?"
                variant="outlined"
                sx={style}
                multiline
                minRows={2}
              />
            )}
          </Field>
          <ErrorMessage
            name="message"
            component={Typography}
            sx={{
              color: "red",
              fontSize: 12,
              marginTop: 1,
            }}
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: Colors.primary,
            marginTop: "1rem",
            padding: "0.5rem",
            width: "100%",
            borderRadius: "0.5rem",
            "&:hover": {
              backgroundColor: Colors.blue,
            },
          }}
        >
          <Typography fontSize={14} sx={{ textTransform: "capitalize" }}>
            Send
          </Typography>
        </Button>

        {messageSent && (
          <Box
            my={4}
            p={2}
            sx={{ backgroundColor: "green", borderRadius: "0.5rem" }}
            display="flex"
            justifyContent="center"
          >
            <Typography fontSize={12}>{messageSent}</Typography>
          </Box>
        )}
      </Form>
    </Formik>
  );
};

export default ContactForm;
