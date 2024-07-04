import * as React from "react";
import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import axios from "axios";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
//https://run.mocky.io/v3/218432a3-4838-4d04-b4c9-cb9285290399

const rows = [];

export default function DataTableTest() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = useState([]);
  const [allproducts, setAllProducts] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    axios.get("https://run.mocky.io/v3/218432a3-4838-4d04-b4c9-cb9285290399")
    .then((response) => {
        setRows(response.data);
        setAllProducts(response.data);
    } )
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSelect = (date) => {
    let filtered = allproducts.filter((row)=>{
        let productDate = new Date(row.created_at);
        return (
            productDate >= date.selection.startDate &&
            productDate <= date.selection.endDate  
        );
    });
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    setRows(filtered);
    console.log(date);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  return (
    <>
      <Card sx={{ minWidth: 900, p: 4 }}>
        <CardContent>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
              />
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Created_At</TableCell>
                    <TableCell align="center">Product Id</TableCell>
                    <TableCell align="center">Product Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      let date = new Date(row["created_at"]);  
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.product_id}
                        >
                          <TableCell align="center">{date.toLocaleDateString('en-GB')}</TableCell>
                          <TableCell align="center">{row.product_id}</TableCell>
                          <TableCell align="center">{row.product_name}</TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[15, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </CardContent>
      </Card>
    </>
  );
}
