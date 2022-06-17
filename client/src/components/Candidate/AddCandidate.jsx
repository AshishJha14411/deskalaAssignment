import React from "react";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import names from "./states";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { createCandidate } from "../../actions/candidate";
const initialState = {
  name: "",
  dateOfBirth: "",
  age: "",
  address: "",
  pin: "",
  state: "",
  email: "",
};
const AddCandidate = ({ createCandidate }, props) => {
  const [formData, setFormData] = useState(initialState);

  console.log(props);
  const { name, dateOfBirth, age, address, pin, state, email } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    createCandidate(formData);
  };
  console.log(formData);

  return (
    <Container>
      <Grid
        sx={{
          bgcolor: "#e0e0e0",
          height: "100vh",
          padding: "2rem",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            bgcolor: "#fafafa",
            height: "90%",
            maxWidth: "100%",
            padding: "5rem",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              paddingBottom: "2rem",
            }}
          >
            Create Candidate
          </Typography>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Grid
              sx={{
                display: "flex",
                alignItems: "space-between",
                flexDirection: "column",
                paddingRight: "15rem",
              }}
            >
              <Typography
                variant="h9"
                sx={{
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                }}
              >
                Name
              </Typography>
              <TextField
                id="outlined-password-input"
                label="Name"
                type="text"
                value={name}
                name="name"
                onChange={(e) => onChange(e)}
              />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h9"
                sx={{
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                }}
              >
                Address
              </Typography>
              <TextField
                id="outlined-password-input"
                label="Address"
                type="text"
                name="address"
                value={address}
                onChange={(e) => onChange(e)}
              />
            </Grid>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Grid
              sx={{
                display: "flex",
                alignItems: "space-between",
                flexDirection: "column",
                paddingRight: "15rem",
              }}
            >
              <Typography
                variant="h9"
                sx={{
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                }}
              >
                Date of Birth
              </Typography>
              <TextField
                id="outlined-password-input"
                label="enter your Date of Birth"
                type="text"
                value={dateOfBirth}
                name="dateOfBirth"
                onChange={(e) => onChange(e)}
              />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <FormControl
                sx={{
                  paddingBottom: "1rem",
                  minWidth: "14rem",
                }}
              >
                <Typography
                  variant="h9"
                  sx={{
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                  }}
                >
                  State
                </Typography>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  placeholder="Select your State"
                  input={
                    <OutlinedInput
                      name="state"
                      value={state}
                      onChange={(e) => onChange(e)}
                    />
                  }
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Grid
              sx={{
                display: "flex",
                alignItems: "space-between",
                flexDirection: "column",
                paddingRight: "15rem",
              }}
            >
              <Typography
                variant="h9"
                sx={{
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                }}
              >
                Age
              </Typography>
              <TextField
                id="outlined-password-input"
                label="enter your Age"
                type="number"
                name="age"
                value={age}
                onChange={(e) => onChange(e)}
              />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h9"
                sx={{
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                }}
              >
                Pin Code
              </Typography>
              <TextField
                id="outlined-password-input"
                label="Enter your 6 digit Pin Code"
                type="number"
                name="pin"
                onChange={(e) => onChange(e)}
                value={pin}
              />
            </Grid>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Grid
              sx={{
                display: "flex",
                alignItems: "space-between",
                flexDirection: "column",
                paddingRight: "15rem",
              }}
            >
              <Typography
                variant="h9"
                sx={{
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                }}
              >
                Email
              </Typography>
              <TextField
                id="outlined-password-input"
                label="enter your email"
                type="email"
                name="email"
                onChange={(e) => onChange(e)}
                value={email}
              />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "space-between",
                flexDirection: "row",
                paddingLeft: "10rem",
                margin: "1rem",
              }}
            >
              <Link to="/candidate">
                <Button
                  variant="contained"
                  sx={{
                    color: "black",
                    bgcolor: "white",
                    margin: "1rem",
                    "&:hover": {
                      background: "#bdbdbd",
                    },
                  }}
                >
                  Cancel
                </Button>
              </Link>
              <Link to="/candidate">
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#00b8d4",
                    margin: "1rem",
                    "&:hover": {
                      background: "#006064",
                    },
                  }}
                  onClick={onSubmit}
                >
                  Create
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
AddCandidate.propTypes = {
  createCandidate: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  candidate: state.candidate,
});

export default connect(mapStateToProps, { createCandidate })(AddCandidate);
