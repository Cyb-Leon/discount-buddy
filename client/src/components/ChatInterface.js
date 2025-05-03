import React, { useState } from 'react';
import { TextField, Button, Box, Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';

function ChatInterface({ setDeals, deals }) {
  const [query, setQuery] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/deals', { query });
      setDeals(response.data.deals);
      setQuery('');
    } catch (error) {
      console.error('Error fetching deals:', error);
    }
  };

  return (
    <Box my={2}>
      <Box display="flex" mb={2}>
        <TextField
          fullWidth
          label="Ask for deals (e.g., grocery deals under R200)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="contained" onClick={handleSubmit} sx={{ ml: 1 }}>
          Search
        </Button>
      </Box>
      {deals.map(deal => (
        <Card key={deal.id} sx={{ mb: 1 }}>
          <CardContent>
            <Typography variant="h6">{deal.item}</Typography>
            <Typography>Retailer: {deal.retailer}</Typography>
            <Typography>Price: R{deal.price} (Save R{deal.discount})</Typography>
            <Typography>Location: {deal.location}</Typography>
            <Typography>Expires: {deal.expires}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}


export default ChatInterface;