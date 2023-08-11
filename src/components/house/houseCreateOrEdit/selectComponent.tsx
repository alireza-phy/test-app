import { CustomizedSelect } from "./styles";
import {
  Typography,
  FormControl,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { Controller } from "react-hook-form";

type Props = {
  setValue: any;
  setGarageStatus: (status: string) => void;
  garageStatus: string;
  control: any;
  errors: any;
  title: string;
  name: string;
};

function SelectComponent(props: Props) {
  const {
    errors,
    title,
    name,
    control,
    garageStatus,
    setGarageStatus,
    setValue,
  } = props;
  return (
    <FormControl sx={{ width: "100%" }} size="small">
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "12px",
          mb: 1,
          color: "#00000090",
          textAlign: "left",
        }}
        id="select"
      >
        {title}
      </Typography>
      <Controller
        name={`${name}`}
        control={control}
        render={() => (
          <CustomizedSelect
            value={garageStatus}
            onChange={(e: any) => {
              setValue(`${name}`, e?.target?.value);
              setGarageStatus(e?.target?.value);
            }}
            labelId="select"
            id="simple-select"
            inputProps={{
              "aria-label": "Without label",
            }}
          >
            <MenuItem value="yes">Yes</MenuItem>
            <MenuItem value="no">No</MenuItem>
          </CustomizedSelect>
        )}
      />
      {!!errors[`${name}`] && (
        <FormHelperText sx={{ color: "#d32f2f" }}>
          {errors[`${name}`]?.message}
        </FormHelperText>
      )}
    </FormControl>
  );
}

export default SelectComponent;
