import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

interface MultiSelectProps {
  options: string[];
  placeHolder: string;
  selectedItems: string[];
  onChangeHandler: any;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  placeHolder,
  selectedItems,
  onChangeHandler,
}) => {
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
};

export default MultiSelect;
