import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectSmall() {
  const [type, setType] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Age</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={type}
        label="Type"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Hardware</MenuItem>
        <MenuItem value={20}>Software</MenuItem>
      </Select>
    </FormControl>
  );
}
