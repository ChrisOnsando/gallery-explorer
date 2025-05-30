import React from 'react';
import { CircularProgress, Box } from '@mui/material';

function Spinner() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
      <CircularProgress />
    </Box>
  );
}

export default Spinner;
