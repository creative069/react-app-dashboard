// src/DataTable.js
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@mui/material';

const DataTable = ({ data }) => {
  const columns = [
    { field: 'product_id', headerName: 'Product ID', width: 150 },
    { field: 'product_name', headerName: 'Product Name', width: 200 },
    { field: 'created_at', headerName: 'Created At', width: 150 },
  ];

  const rows = data.map((item, index) => ({
    id: index + 1,
    product_id: item.product_id,
    product_name: item.product_name,
    created_at: item.created_at,
  }));


  return (
    <>
    <Container style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </Container>
    </>
  );
};

export default DataTable;
