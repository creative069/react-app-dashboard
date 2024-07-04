import React from "react";
import Sidenav from "../Sidenav";
import Box from "@mui/material/Box";
import DataTableTest from "./DataTableTest";
import DataTableTest2 from "./DataTableTest2"
import DataTableTest3 from "./DataTableTest3"

{/* <h2 style={{ color: 'blue' }}>NESC Security MarketPlace Linux Patch Management</h2>  */}
export default function MyRequest() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 6 }}>
          <h2 style={{ color: '#10346a' }}>NESC Security MarketPlace Linux Patch Management</h2> 
          <DataTableTest3 />
        </Box>
      </Box>
    </>
  );
}
