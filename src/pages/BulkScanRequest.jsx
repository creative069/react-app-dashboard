import React from 'react';
import Sidenav from '../Sidenav';
import Box  from "@mui/material/Box";
import List from './List';
import '../App.css';


export default function BulkScanRequest() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 10 }}>
          <h1>Bulk Scan Request</h1>
          <List />
        </Box>
      </Box>
    </>
  );
}
