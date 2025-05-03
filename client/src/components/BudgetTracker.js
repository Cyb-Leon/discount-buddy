import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import axios from 'axios';

function BudgetTracker({ setBudgetTitle }) {
  const [budget, setBudget] = useState({ total: 500, spent: 0 });
  const [newBudget, setNewBudget] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/budget').then(res => setBudget(res.data));
  }, []);

  const handleUpdate = async () => {
    const updatedBudget = { total: parseInt(newBudget) || budget.total, spent: budget.spent };
    await axios.post('http://localhost:5000/api/budget', updatedBudget);
    setBudget(updatedBudget);
    setNewBudget('');
  };

  return (
    <Box my={2}>
      <Typography variant="h6">{setBudgetTitle}</Typography>
      <Typography>Total Budget: R{budget.total}</Typography>
      <Typography>Spent: R{budget.spent}</Typography>
      <Box display="flex" mt={1}>
        <TextField
          label="Update Budget (R)"
          value={newBudget}
          onChange={(e) => setNewBudget(e.target.value)}
        />
        <Button variant="contained" onClick={handleUpdate} sx={{ ml: 1 }}>
          Update
        </Button>
      </Box>
    </Box>
  );
}


export default BudgetTracker;