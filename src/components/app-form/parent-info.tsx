import { useState } from 'react';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { Grid, Button, TextField, Container, Typography, } from '@mui/material';

export default function ParentInfo() {
  const [fatherDate, setFatherDate] = useState(null);
  const [motherDate, setMotherDate] = useState(null);

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
        Parent&#39;s full information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Father’s full name "
            variant="outlined"
            placeholder="Enter your father’s full name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Father’s DOB"
              value={fatherDate}
              onChange={(newValue: any) => {
                setFatherDate(newValue);
              }}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            fullWidth
            label="Father’s passport"
            variant="outlined"
            placeholder="Enter your father’s serial number"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            fullWidth
            label="Father’s phone"
            variant="outlined"
            placeholder="Enter your father’s phone number"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            fullWidth
            label="Father’s occupation"
            variant="outlined"
            placeholder="Enter your father’s occupation"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Mother’s full name"
            variant="outlined"
            placeholder="Enter your mother’s full name"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Mother’s DOB"
              value={motherDate}
              onChange={(newValue: any) => {
                setMotherDate(newValue);
              }}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            fullWidth
            label="Mother’s passport"
            variant="outlined"
            placeholder="Enter your mother’s serial number"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            fullWidth
            label="Mother’s phone"
            variant="outlined"
            placeholder="Enter your mother’s phone number"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            fullWidth
            label="Mother’s occupation"
            variant="outlined"
            placeholder="Enter your mother’s occupation"
          />
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
