import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
const Home = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        marginTop: '6rem',
        display: "flex",
        justifyContent: "space-around",
        minHeight: '100%'
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
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                minWidth: "7rem",
                marginTop: "3rem",
                bgcolor: "#00b8d4",
                "&:hover": {
                  background: "#006064",
                },
              }}
            >
              Login
            </Button>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                minWidth: "7rem",
                marginTop: "3rem",
                bgcolor: "#00b8d4",
                "&:hover": {
                  background: "#006064",
                },
              }}
            >
              Signup
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
