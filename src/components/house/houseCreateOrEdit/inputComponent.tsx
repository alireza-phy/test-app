import { FormControl, InputLabel } from "@mui/material";
import { CustomizedInput } from "./styles";

type Props = {
  register: any;
  errors: any;
  title: string;
  name: string;
  placeHolder: string;
  textArea?: true;
};

function InputComponent(props: Props) {
  const { errors, register, title, name, placeHolder, textArea } = props;
  return (
    <FormControl sx={{ width: "100%" }} variant="standard">
      <InputLabel shrink sx={{ fontWeight: "600" }} htmlFor="input">
        {title}
      </InputLabel>
      <CustomizedInput
        {...register(`${name}`)}
        error={!!errors[`${name}`]}
        id="input"
        placeholder={placeHolder}
        size="small"
        aria-describedby="outlined-weight-helper-text"
        helperText={!!errors[`${name}`] && errors[`${name}`]?.message}
        multiline={textArea}
        rows={textArea ? 4 : 1}
      />
    </FormControl>
  );
}

export default InputComponent;
