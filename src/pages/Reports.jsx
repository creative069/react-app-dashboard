import React, { useEffect, useState } from "react";
import Sidenav from "../Sidenav";
import Box from "@mui/material/Box";
import axios from "axios";

export default function Reports() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 5 }}>
          <div className="container">
            <div className="mt-3">
              <h3>Fetch Data from API in React with Axios</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((user, index) => {
                    return (
                      <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address.city}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
}
