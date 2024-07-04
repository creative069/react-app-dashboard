import React from "react";
import Sidenav from "../Sidenav";
import NavBar from "../NavBar";
import Box from "@mui/material/Box";


export default function Dashboard() {
  return (
    <>
      <Box component="main"  sx={{ display: "flex" }} height={30}>
        <NavBar />
        <Box sx={{ flexGrow: 1, p: 6 }}>
          {/* <h1>Dashboard</h1> */}
        </Box>
      </Box>
    </>
  );
}
