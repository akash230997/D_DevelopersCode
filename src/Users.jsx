/* eslint-disable array-callback-return */
import React, { useContext } from "react";
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
    // console.log(id)
    // console.log(dataFetchByContextApi);
    const comingData = dataFetchByContextApi.filter((currelem)=>{
        if(id){
            return currelem.id === Number(id);
        }
    })
    // console.log(comingData);
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
            <th>Name</th>
            <th>cardExpire</th>
            <th>cardNumber</th>
            <th>cardType</th>
            <th>currency</th>
            <th>iban</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {comingData.map((currElem, index) => {
              return (
                <>
                  <td>{currElem.firstName}</td>
                  <td>{currElem.bank.cardExpire}</td>
                  <td>{currElem.bank.cardNumber}</td>
                  <td>{currElem.bank.cardType}</td>
                  <td>{currElem.bank.currency}</td>
                  <td>{currElem.bank.iban}</td>
                </>
              );
            })}
          </tr>
        </tbody>
      </Table>
      <OtherComponent />
    </div>
  );
}

export default Users;
