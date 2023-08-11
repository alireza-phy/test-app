import { alpha, styled } from "@mui/material/styles";
import { Box, TextField, Select } from "@mui/material";
import house from "../../../utils/images/house1.jpg";

export const CustomizedInput = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    padding: 0,
  },
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 10,
    position: "relative",
    backgroundColor: "white",
    border: "none",
    fontSize: 12,
    // width: "auto",
    padding: "10px 12px",
    width: "100%",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.5)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
  "& fieldset": {
    border: "none",
  },
}));

export const CustomizedContainer = styled(Box)(() => ({
  position: "absolute",
  opacity: 0.3,
  top: 0,
  left: 0,
  backgroundImage: `url(${house})`,
  filter: "blur(8px)",
  "-webkit-filter": "blur(8px)",
  height: "100%",
  width: "100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "250%",
}));

export const CustomizedSelect = styled(Select)(() => ({
  "& .MuiSelect-outlined": {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 7,
  },
  "& fieldset": {
    border: "none",
  },
}));

export const ImageUploader = styled(Box)`
  cursor: pointer;
  width: 8rem;
  height: 8rem;
  border-radius: 0.5rem;
  border: 2px gray dashed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const AddIconWrapper = styled(Box)`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  border: 1px solid gray;
`;
