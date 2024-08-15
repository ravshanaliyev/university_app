import { useState } from 'react';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { Grid, Radio, Button, TextField, Container, RadioGroup, Typography, FormControlLabel, } from '@mui/material';

export default function BasicInfo() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [givenDate, setGivenDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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
        Basic information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <TextField
            required
            fullWidth
            label="Full name"
            variant="outlined"
            placeholder="Enter your full name"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date of birth"
              value={selectedDate}
              onChange={(newValue: any) => {
                setSelectedDate(newValue);
              }}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="body2">
            Gender
          </Typography>
          <RadioGroup row aria-label="gender" name="gender">
            <FormControlLabel value="man" control={<Radio />} label="Man" />
            <FormControlLabel value="woman" control={<Radio />} label="Woman" />
          </RadioGroup>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            fullWidth
            label="Passport"
            variant="outlined"
            placeholder="Your passport serial number"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Given Date"
              value={givenDate}
              onChange={(newValue: any) => {
                setGivenDate(newValue);
              }}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="End Date"
              value={endDate}
              onChange={(newValue: any) => {
                setEndDate(newValue);
              }}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Citizenship"
            variant="outlined"
            placeholder="Your citizenship"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Telephone number"
            variant="outlined"
            placeholder="Enter your telephone number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Email"
            variant="outlined"
            placeholder="Enter your email"
          />
        </Grid>
        <Grid item xs={12} sm={6} display="flex" justifyContent="flex-end" alignItems="center">
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
