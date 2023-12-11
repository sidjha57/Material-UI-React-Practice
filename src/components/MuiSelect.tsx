import { Box, Menu, MenuItem, TextField } from '@mui/material';
import { useState } from 'react';

export const MuiSelect = () => {
  const [country, setCountry] = useState<string>('');
  const [countries, setCountries] = useState<string[]>([]);
  console.log({ country });
  console.log({ countries });

  return (
    <Box width="250px">
      <TextField
        label="Select country"
        value={country}
        select
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setCountry(event.target.value);
        }}
        fullWidth
      >
        <MenuItem value="In">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Austrailia</MenuItem>
      </TextField>


      <TextField
        label="Select country"
        value={countries}
        select
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const value = event.target.value;
          setCountries(typeof value === 'string' ? value.split(',') : value);
        }}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size='small'
        color='secondary'
        helperText='Select your country'
      >
        <MenuItem value="In">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Austrailia</MenuItem>
      </TextField>
    </Box>
  );
};
