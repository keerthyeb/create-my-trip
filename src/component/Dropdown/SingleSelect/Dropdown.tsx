import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';

interface DropdownProps {
  options: string[];
  placeHolder: string;
  onChangeHandler: any;
}

const Dropdown: React.FC<DropdownProps> = ({ options, placeHolder, onChangeHandler }) => {
  return (
    <FormControl sx={{ m: 0, width: 300 }}>
      <InputLabel>{placeHolder}</InputLabel>

      <Select onChange={onChangeHandler} input={<OutlinedInput label={placeHolder} />}>
        {options.map((option: string) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
