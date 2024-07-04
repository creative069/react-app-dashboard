// src/App.js
import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Box } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import axios from 'axios';
import DataTable from '../DataTable';
import { format } from 'date-fns';
import { Pix } from '@mui/icons-material';

const App = () => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://run.mocky.io/v3/06b92ae6-478c-4681-8889-fdc847181b61');
        setData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleFilterData = () => {
    if (!fromDate || !toDate) {
      alert('Please select both dates.');
      return;
    }

    const formattedFromDate = format(fromDate, 'dd-MM-yyyy');
    const formattedToDate = format(toDate, 'dd-MM-yyyy');

    const filtered = data.filter(item => {
      const itemDate = item.created_at;
      return itemDate >= formattedFromDate && itemDate <= formattedToDate;
    });

    setFilteredData(filtered);
  };
//Search Bar Logic starts 
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = data.filter(item => 
      item.product_name.toLowerCase().includes(query)
    );

    setFilteredData(filtered);
  };
// Search Bar Logic ends 
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container>
        <h2 style={{ color: 'red' }}>Linux Patch Management Report</h2>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <DatePicker
            label="From Date"
            value={fromDate}
            onChange={(newValue) => setFromDate(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
          <DatePicker
            label="To Date"
            value={toDate}
            onChange={(newValue) => setToDate(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
          <div>
          <Button variant="contained" color="primary" onClick={handleFilterData} size='medium' sx={{ padding: '16px 32px' }} >
            Search
          </Button>
          </div>
          <TextField
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearch}
          sx={{ mb: 1 }}
        />
        </Box>
        
        <DataTable data={filteredData} />
      </Container>
    </LocalizationProvider>
  );
};

export default App;
