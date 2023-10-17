import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';

const MultiSelect = (props: { options: any; placeHolder: string; selectedItems: any, onChangeHandler: any }) => {
  const { options, placeHolder, selectedItems, onChangeHandler } = props;

  return (
    <FormControl sx={{ m: 0, width: 300 }}>
      <InputLabel>{placeHolder}</InputLabel>
      <Select
        multiple
        value={selectedItems}
        onChange={onChangeHandler}
        input={<OutlinedInput label={placeHolder} />}
      >
        {options.map((option: string) => (
          <MenuItem key={option} value={option}>

            {option}

          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}


export default MultiSelect;