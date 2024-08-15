import { useState } from 'react';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { Grid, Button, TextField, Container, Typography, } from '@mui/material';

export default function EduBackground() {
  const [submittedDate, setSubmittedDate] = useState(null);
  const [entryDate, setEntryDate] = useState(null);

  return (
    <Container
      sx={{
        background: '#fff',
        padding: { xs: 2, sm: 4 },
        borderRadius: 2,
        boxShadow: 3,
        width: '100%',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Educational background
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Topic level"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="The date topic submitted"
              value={submittedDate}
              onChange={(newValue: any) => {
                setSubmittedDate(newValue);
              }}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="High school"
            variant="outlined"
            placeholder="Enter your high school "
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Entry date"
              value={entryDate}
              onChange={(newValue: any) => {
                setEntryDate(newValue);
              }}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={12} display="flex" justifyContent="flex-end" alignItems="center">
          <Button variant="outlined" color="primary" sx={{ mr: 2 }}>
            Cancel
          </Button>
          <Button variant="contained" color="success">
            Next
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}
