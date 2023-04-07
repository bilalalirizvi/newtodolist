import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useSelector } from "react-redux";

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "View All",
  "Low Priority",
  "Medium Priority",
  "High Priority",
  "Complete",
  "Incomplete",
];

function getStyles(name, filterBy, theme) {
  return {
    fontWeight:
      filterBy.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const SelectBox = ({ handleSelect, length }) => {
  const theme = useTheme();
  const COLORS = useSelector((state) => state.Theme.theme);
  const [filterBy, setFilterBy] = React.useState(["View All"]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setFilterBy(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    handleSelect(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <FormControl sx={{ width: { xs: "100%", sm: "300px" } }}>
        <InputLabel id="demo-multiple-chip-label">Filter By</InputLabel>
        <Select
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                border: `1px solid ${COLORS.primary}`,
              },
            },
            "& label.Mui-focused": {
              color: "black",
            },
          }}
          size="small"
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          value={filterBy}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Filter By" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => {
                const getColor = (key) => {
                  const obj = {
                    "View All": COLORS.gray,
                    "Low Priority": COLORS.green1,
                    "Medium Priority": COLORS.orange,
                    "High Priority": COLORS.red,
                    Complete: COLORS.gray,
                    Incomplete: COLORS.gray,
                  };
                  return obj[key];
                };
                return (
                  <Chip
                    key={value}
                    label={`${value} (${length})`}
                    size="small"
                    sx={{
                      backgroundColor: getColor(value),
                      color: COLORS.white,
                      width: "150px",
                    }}
                  />
                );
              })}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, filterBy, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectBox;
