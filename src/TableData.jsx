import React, { useContext } from "react";
import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { dataComingFromBack } from "./App";

function TableData() {
  const dataFetchByContextApi = useContext(dataComingFromBack);
//   console.log("dataComingFrom App", dataFetchByContextApi);

  //   function createData(name, calories, fat, carbs, protein) {
  //     return { name, calories, fat, carbs, protein };
  //   }

  //   const rows = [
  //     createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  //     createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  //     createData("Eclair", 262, 16.0, 24, 6.0),
  //     createData("Cupcake", 305, 3.7, 67, 4.3),
  //     createData("Gingerbread", 356, 16.0, 49, 3.9),
  //   ];

  return (
    <div className="App">
      <h1>D_Developers Data</h1>

      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>AGE</th>
            <th>EMAIL</th>
            <th>View More</th>
          </tr>
        </thead>
        <tbody>
          {dataFetchByContextApi.map((currElem, index) => {
            if (index < 20) {
              return (
                <tr key={index}>
                  <td>{currElem.id}</td>
                  <td>{currElem.firstName}</td>
                  <td>{currElem.lastName}</td>
                  <td>{currElem.age}</td>
                  <td>{currElem.email}</td>
                  <td>
                    <NavLink
                      to={`/userprofile/${currElem.id}`}
                      state={{
                        id: currElem.id,
                        bank: currElem.bank,
                        cardExpire: currElem.cardExpire,
                        cardNumber: currElem.cardNumber,
                        cardType: currElem.cardType,
                        currency: currElem.currency,
                        currElem: currElem.iban,
                      }}
                    >
                      <Button variant="text">View More</Button>
                    </NavLink>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>

      {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <td>S.No</td>
              <td>FirstName</td>
              <td>LastName</td>
              <td>Age</td>
              <td>Email</td>
              <td>View More</td>
              <TableCell>S.No</TableCell>
              <TableCell align="right">FirstName</TableCell>
              <TableCell align="right">LastName</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="center">
                  <Link to="/userprofile">
                    <Button variant="text">View More</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
    </div>
  );
}

export default TableData;
