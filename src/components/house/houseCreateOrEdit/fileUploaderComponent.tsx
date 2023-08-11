import { AddIconWrapper, ImageUploader } from "./styles";
import { Typography, Grid, FormHelperText, Stack } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

type Props = {
  errors: any;
  imageUrl: string;
  handleFileUpload: (event: any) => void;
};

const FileUploaderComponent = (props: Props) => {
  const { errors, imageUrl, handleFileUpload } = props;
  return (
    <Grid item xs={12} sx={{ zIndex: 2000 }}>
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "12px",
          mb: 1,
          color: "#00000090",
          textAlign: "left",
        }}
        id="select-garage"
      >
        Upload picture (PNG or JPG)*
      </Typography>
      <Stack direction="row" alignItems="center" spacing={2}>
        <label htmlFor="upload-image">
          {imageUrl ? (
            <img src={imageUrl} alt="Uploaded Image" width="200" />
          ) : (
            <ImageUploader>
              <AddIconWrapper>
                <AddRoundedIcon />
              </AddIconWrapper>
            </ImageUploader>
          )}

          <input
            id="upload-image"
            hidden
            accept="image/*"
            type="file"
            onChange={handleFileUpload}
          />
        </label>
      </Stack>
      {!!errors.image && (
        <FormHelperText sx={{ color: "#d32f2f" }}>
          {errors?.image?.message}
        </FormHelperText>
      )}
    </Grid>
  );
};

export default FileUploaderComponent;
