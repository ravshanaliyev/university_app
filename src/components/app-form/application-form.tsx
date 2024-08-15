import { Button, Container, FormControlLabel, Grid, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import Iconify from '../iconify';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ApplicationForm() {
  const [value, setValue] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [givenDate, setGivenDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg">
      <Stack margin='30px 0' direction='row' alignItems='start' gap={2}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} bgcolor={'#f5f5f5'} width={300} padding={2} borderRadius={2}>
          <Tabs textColor="primary" indicatorColor="primary" orientation='vertical' sx={{ '& .MuiTabs-indicator': { display: 'none' } }} variant='fullWidth' value={value} onChange={handleChange} aria-label="basic tabs example" >
            <Tab sx={{ textTransform: 'none', justifyContent: 'flex-start' }} icon={<Iconify icon="carbon:user-profile" />} iconPosition="start" label="Basic information" {...a11yProps(0)} />
            <Tab sx={{ textTransform: 'none', justifyContent: 'flex-start' }} icon={<Iconify icon="carbon:book" />} iconPosition="start" label="Educational background" {...a11yProps(1)} />
            <Tab sx={{ textTransform: 'none', justifyContent: 'flex-start' }} icon={<Iconify icon="carbon:document" />} iconPosition="start" label="Parent’s info" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Container maxWidth="md" sx={{ background: '#fff', padding: 4, borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h6" gutterBottom>
              Basic information
            </Typography>
            <Grid container spacing={3}>
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
                    //@ts-ignore
                    renderInput={(params: any) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Grid>
              <Stack direction="column" margin={2}>
                <Typography variant="body2">
                  Gender
                </Typography>
                <Stack direction="row" gap={2} >
                  <RadioGroup row aria-label="gender" name="gender">
                    <FormControlLabel value="man" control={<Radio />} label="Man" />
                    <FormControlLabel value="woman" control={<Radio />} label="Woman" />
                  </RadioGroup>
                </Stack>
              </Stack>
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
                    //@ts-ignore
                    renderInput={(params: any) => <TextField {...params} fullWidth />}
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
                    //@ts-ignore
                    renderInput={(params: any) => <TextField {...params} fullWidth />}
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
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Stack>
    </Container>
  )
}
