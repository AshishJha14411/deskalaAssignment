import React, { useState } from "react";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, Navigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { login } from "../../actions/auth";

import { connect } from "react-redux";
const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  //Redirect is logged in
  if (isAuthenticated) {
    return <Navigate to="/Candidate" />;
  }

  console.log(isAuthenticated);

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Grid
        container
        sx={{
          justifyContent: "center",
          bgcolor: "#e0e0e0",
          minHeight: "100%",
          padding: "2rem",
          maxWidth: "100%",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          sx={{
            color: "#00b8d4",
            padding: "2rem",
          }}
        >
          Deskala-Assignment
        </Typography>
        <Grid
          sx={{
            display: "flex",
            alignItems: "space-around",
            flexDirection: "column",
            bgcolor: "#fafafa",
            height: "80%",
            maxWidth: "100%",
            padding: "5rem",
          }}
        >
          <Typography
            variant="h6"
            align="center"
            sx={{
              padding: "2rem",
            }}
          >
            Login
          </Typography>
          <Typography
            variant="h9"
            sx={{
              paddingBottom: "1rem",
            }}
          >
            Email Id
          </Typography>
          <TextField
            id="outlined-password-input"
            label="Email"
            type="email"
            name="email"
            onChange={onChange}
          />
          <Typography
            variant="h9"
            sx={{
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
          >
            Password
          </Typography>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            name="password"
            onChange={onChange}
          />

          <Button
            variant="contained"
            onClick={onSubmit}
            sx={{
              marginTop: "3rem",
              bgcolor: "#00b8d4",
              "&:hover": {
                background: "#006064",
              },
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            sx={{
              marginTop: "1rem",
              bgcolor: "#00b8d4",
              "&:hover": {
                background: "#006064",
              },
            }}
          >
            <Link to="/signup">Sign up</Link>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
