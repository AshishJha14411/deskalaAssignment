import React from "react";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import {connect} from 'react-redux'
import Button from "@mui/material/Button";
import { useState } from "react";
import { setAlert } from "../../actions/alert";
import { PropTypes } from "prop-types";
import { register } from "../../actions/auth";
import { Link, Navigate } from "react-router-dom";
const Signup = ({setAlert, register, isAuthenticated}) => {
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    password: "",
  });

  const { email, phoneNumber, password} = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if(password.length <= 8){
      setAlert('Password is not of Lenght 8 or does not contain one uppercase, one lowercase, one number and a special character', 'danger')
    } else if(email.includes(!'@')){
      setAlert('Invalid email address', 'danger')
    } else if((phoneNumber).length !==10){
      setAlert('Phone Number is not valid', 'danger')
    } else{
      register({email, phoneNumber, password})
      console.log(formData);
    }
  };
  if(isAuthenticated) {
    return <Navigate to="/Candidate" />;
  }
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          bgcolor: "#e0e0e0",
          height: "100vh",
          paddingLeft: "10%",
          paddingRight: "10%",
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
        <Box
          sx={{
            display: "flex",
            alignItems: "space-around",
            flexDirection: "column",
            bgcolor: "#fafafa",
            height: "80%",
            maxWidth: "100%",
            paddingLeft: "5rem",
            paddingRight: "5rem",
          }}
        >
          <Typography
            variant="h6"
            align="center"
            sx={{
              padding: "2rem",
            }}
          >
            SignUp
          </Typography>

          <Typography
            variant="h9"
            sx={{
              paddingBottom: "1rem",
            }}
          >
            Email Id
          </Typography>
          <TextField name="email" onChange={onChange} label="email" type="email" required />
          <Typography
            variant="h9"
            sx={{
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
          >
            Phone Number
          </Typography>
          <TextField
            name="phoneNumber"
            label="phoneNumber"
            type="number"
            onChange={onChange}
            required
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
            name="password"
            label="password"
            type="password"
            onChange={onChange}
            required
          />

          <Button
            onClick={onSubmit}
            variant="contained"
            sx={{
              marginTop: "5rem",
              bgcolor: "#00b8d4",
              "&:hover": {
                background: "#006064",
              },
            }}
          >
            SignUp
          </Button>
          <Typography>
            Already have an account? <Link to='/login'>Sign in</Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
Signup.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, {setAlert, register})(Signup);
