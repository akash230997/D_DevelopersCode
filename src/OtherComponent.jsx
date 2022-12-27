/* eslint-disable array-callback-return */
import React, { useContext } from 'react';
import Table from "react-bootstrap/Table";
import { dataComingFromBack } from './App';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function OtherComponent() {
    const dataFetchByContextApi = useContext(dataComingFromBack);
    // console.log("dataComingFrom App", dataFetchByContextApi);
  return (
    <div>
      <center>
        <h1>Other Users</h1>
      </center>
      <Table
        style={{ width: "100%" }}
        cellPadding="20px"
        striped
        border="1"
        cellSpacing="0"
        hover
        variant="dark"
      >
        <thead>
          <tr>
            <th>S.No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>email</th>
            <th>View More</th>
          </tr>
        </thead>
        <tbody>
          {dataFetchByContextApi.map((elem, index) => {
            if (index > 20 && index < 25) {
              return (
                <tr key={index}>
                  <td>{elem.id}</td>
                  <td>{elem.firstName}</td>
                  <td>{elem.lastName}</td>
                  <td>{elem.age}</td>
                  <td>{elem.email}</td>
                  <td propsID={elem.id}>
                    <Link to={`/userprofile/${elem.id}`}>
                      <Button variant="text">View More</Button>
                    </Link>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default OtherComponent