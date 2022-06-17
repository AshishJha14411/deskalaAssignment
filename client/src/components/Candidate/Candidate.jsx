import React from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Container } from "@mui/system";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, Navigate } from "react-router-dom";
import { deleteData } from "../../actions/candidate";
import { useEffect } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

const initialState = {
  name: "",
  dateOfBirth: "",
  age: "",
  address: "",
  pin: "",
  state: "",
  email: "",
};

const Candidate = ({ /* candidate:{candidateValue} */ deleteData }) => {
  const data = [
    {
      _id: "62a62950e7176a55899895da",
      name: "Qwerst",
      dateOfBirth: "08/01/1996",
      age: 25,
      address: "new delhi, east noida, colony 45",
      pin: 784021,
      state: "Punjab",
      email: "random@test.com",
      shortListStatus: "Rejected",
      __v: 0,
    },
    {
      _id: "62a6da0bc24de3b84db4833d",
      name: "Qwerst",
      dateOfBirth: "08/01/1996",
      age: 25,
      address: "new delhi, east noida, colony 45",
      pin: 784021,
      state: "UP",
      email: "random@test.com",
      shortListStatus: "Rejected",
      __v: 0,
    },
    {
      _id: "62a6da23c24de3b84db48340",
      name: "Qwerst",
      dateOfBirth: "08/01/1996",
      age: 25,
      address: "new delhi, east noida, colony 45",
      pin: 784021,
      state: "QW",
      email: "random@test.com",
      shortListStatus: "ShortListed",
      __v: 0,
    },
    {
      _id: "62a6da29c24de3b84db48343",
      name: "Qwerst",
      dateOfBirth: "08/01/1996",
      age: 25,
      address: "new delhi, east noida, colony 45",
      pin: 784021,
      state: "wqqwQW",
      email: "random@test.com",
      shortListStatus: "ShortListed",
      __v: 0,
    },
    {
      _id: "62a6da29c24de3b84db48343",
      name: "Qwerst",
      dateOfBirth: "08/01/1996",
      age: 25,
      address: "new delhi, east noida, colony 45",
      pin: 784021,
      state: "wqqwQW",
      email: "random@test.com",
      shortListStatus: "ShortListed",
      __v: 0,
    },
    {
      _id: "62a6da29c24de3b84db48343",
      name: "Qwerst",
      dateOfBirth: "08/01/1996",
      age: 25,
      address: "new delhi, east noida, colony 45",
      pin: 784021,
      state: "wqqwQW",
      email: "random@test.com",
      shortListStatus: "ShortListed",
      __v: 0,
    },
    {
      _id: "62a6da29c24de3b84db48343",
      name: "Qwerst",
      dateOfBirth: "08/01/1996",
      age: 25,
      address: "new delhi, east noida, colony 45",
      pin: 784021,
      state: "wqqwQW",
      email: "random@test.com",
      shortListStatus: "ShortListed",
      __v: 0,
    },
  ];
  const handleChange = (event) => {};

  const [selectedRow, setSelectedRow] = React.useState({});
  const [dataValue, setDataValue] = useState([initialState]);
  const [editRow, setEditRow] = useState({});
  const editSelectedRow = (row) => {
    setEditRow(row);
    return <Navigate to="/AddCandidate" props={editRow} />;
  };
  const deleteSelectedRow = (row) => {
    setSelectedRow(row);
    deleteData(selectedRow._id);
  };
  useEffect(() => {
    /*  const data = getCandidate()
    data.then(function(res){
      console.log(res.data)
    }) */
    axios.get("http://localhost:5000/api/candidate").then(function (res) {
      console.log(res.data);
      setDataValue(res.data);
    });
  }, [dataValue.length]);
  console.log({ selectedRow });
  return (
    <Container fixed>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: "50%" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Date of Birth</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Results</TableCell>
              <TableCell align="right">Edit/Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataValue.map((row) => (
              <TableRow
                key={row.index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={() => deleteSelectedRow(row)}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.dateOfBirth}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Results
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value=""
                      label="Results"
                      onChange={handleChange}
                    >
                      <MenuItem value={"ShortListed"}>ShortListed</MenuItem>
                      <MenuItem value={"Rejected"}>Rejected</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell align="right">
                  <ModeEditOutlinedIcon onClick={() => editSelectedRow(row)} />
                  <DeleteIcon onClick={() => deleteSelectedRow(row)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link to="/addcandidate">Add more Candidate</Link>
    </Container>
  );
};

Candidate.propTypes = {
  /* 
  getCandidate: PropTypes.func.isRequired, */
  candidateValue: PropTypes.object,
  deleteData: PropTypes.func,
};
const mapStateToProps = (state) => ({
  candidate: state.candidate,
});

export default connect(mapStateToProps, { deleteData })(Candidate);
