import { Box, Typography } from "@mui/material";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import { useNavigate } from "react-router-dom";

type Props = {};

function BackwardComponent({}: Props) {
  let navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        cursor: "pointer",
        zIndex: 2000,
      }}
      onClick={() => navigate(`/`)}
    >
      <KeyboardBackspaceOutlinedIcon />
      <Typography variant="h6" fontWeight={600} component="div">
        Back to overview
      </Typography>
    </Box>
  );
}

export default BackwardComponent;
