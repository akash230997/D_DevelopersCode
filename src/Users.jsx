import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import {dataComingFromBack} from './App';
import OtherComponent from "./OtherComponent";

//getting id from context:ID
function Users() {
    const dataFetchByContextApi = useContext(dataComingFromBack);
    console.log(dataFetchByContextApi);
    let { id } = useParams();
    console.log(id)
    const comingData = dataFetchByContextApi.filter((currelem,elem)=>{
        return currelem.id === id;
    })
    console.log(comingData);
    // debugger
  return (
    <div>
      <h1>User Details</h1>
      <Table
        style={{ width: "80%" }}
        cellPadding="10px"
        striped
        border="1"
        cellSpacing="0"
        hover
        variant="dark"
      >
        <thead>
          <tr>
            <th>Bank</th>
            <th>cardExpire</th>
            <th>cardNumber</th>
            <th>cardType</th>
            <th>currency</th>
            <th>iban</th>
          </tr>
        </thead>
        <tbody>
          {dataFetchByContextApi.filter((elem,index)=>{

            
          })}

          {/* {dataFetchByContextApi.map((currElen, index) => {
            return (
              <tr key={currElen.id}>
                <td>{currElen.bank}</td>
                <td>{currElen.cardExpire}</td>
                <td>{currElen.cardType}</td>
                <td>{currElen.currency}</td>
                <td>{currElen.iban}</td>
              </tr>
            );
          })} */}
        </tbody>
      </Table>
      <OtherComponent />
    </div>
  );
}

export default Users;
