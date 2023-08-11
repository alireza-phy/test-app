import React, { useState, useEffect, useContext } from "react";
import house from "../../utils/images/house1.jpg";
import {
  Box,
  TextField,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Button,
  Select,
  MenuItem,
  FormHelperText,
  Stack,
} from "@mui/material";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import Layout from "../../common/layout";
import { useForm, SubmitHandler } from "react-hook-form";
import { alpha, styled } from "@mui/material/styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { v4 as uuidv4 } from "uuid";
import { Context } from "../../store/context";
import types from "../../store/types";

const schema = yup.object({
  streetName: yup.string().required("* street name is required"),
  postalCode: yup.string().required("* postal code is required"),
  city: yup.string().required("* city is required"),
  description: yup.string().required("* description is required"),
  image: yup.string().required("* image is required"),
  houseNumber: yup
    .number()
    .required("* house number is required")
    .typeError("you must specify a number"),
  price: yup.string().required("* price is required"),
  size: yup
    .number()
    .required("* size is required")
    .typeError("you must specify a number"),
  bathrooms: yup
    .number()
    .required("* amount of bathrooms is required")
    .typeError("you must specify a number"),
  bedrooms: yup
    .number()
    .required("* amount of bedrooms is required")
    .typeError("you must specify a number"),
  constructionDate: yup
    .number()
    .required("* date of construction is required")
    .typeError("you must specify a number"),
  addition: yup.string().optional(),
  garage: yup.string().required("* please select one option"),
});

type Props = {};

type Inputs = {
  streetName: string;
  image: string;
  houseNumber: number;
  addition: string | undefined;
  postalCode: string;
  city: string;
  price: string;
  size: number;
  bathrooms: number;
  bedrooms: number;
  garage: string;
  constructionDate: number;
  description: string;
};

const CustomizedContainer = styled(Box)(({ theme }) => ({
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
const CustomizedSelect = styled(Select)(({ theme }) => ({
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

const CustomizedInput = styled(TextField)(({ theme }) => ({
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

function HouseCreateOrEdit({}: Props) {
  let navigate = useNavigate();
  const params = useParams();
  const { dispatch, state } = useContext(Context);
  const [imageUrl, setImageUrl] = useState<any>(null);
  const {
    register,
    setValue,
    clearErrors,
    reset,
    getValues,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  useEffect(() => {
    if (params?.id) {
      const data = state?.houses.filter((item) => item?.id === params?.id)[0];
      reset({
        streetName: data?.address?.street,
        houseNumber: data?.address?.houseNumber,
        postalCode: data?.address?.postalCode,
        city: data?.address?.city,
        addition: data?.address?.addition,
        image: data?.image,
        price: data?.price,
        size: data?.size,
        garage: data?.garage,
        bedrooms: data?.bedrooms,
        bathrooms: data?.bathrooms,
        constructionDate: data?.constructionDate,
        description: data?.description,
      });
      setImageUrl(data?.image);
    }
  }, [params]);

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageUrl(reader.result);
    };

    file && reader.readAsDataURL(file);
    file && setValue("image", file);
    file && clearErrors("image");
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const finalData = {
      id: uuidv4(),
      creatorId: "12345",
      address: {
        street: data?.streetName,
        houseNumber: data?.houseNumber,
        postalCode: data?.postalCode,
        city: data?.city,
        addition: data?.addition,
      },
      image: imageUrl,
      price: data?.price,
      size: data?.size,
      garage: data?.garage,
      bedrooms: data?.bedrooms,
      bathrooms: data?.bathrooms,
      constructionDate: data?.constructionDate,
      description: data?.description,
    };

    console.log(finalData);
    dispatch({ type: types?.CreateHouseCard, data: finalData });
    reset();
    navigate(`/`);
  };

  console.log(getValues("garage"));
  return (
    <Layout>
      <Box>
        <CustomizedContainer></CustomizedContainer>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
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
          <Typography
            variant="h5"
            textAlign="left"
            fontWeight={600}
            component="h1"
          >
            {params?.id ? "Edit listing" : "Create New Listing"}
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container sx={{ width: "40%" }} spacing={2}>
              <Grid item xs={12}>
                <FormControl sx={{ width: "100%" }} variant="standard">
                  <InputLabel
                    shrink
                    sx={{ fontWeight: "600" }}
                    htmlFor="street-name"
                  >
                    Street name*
                  </InputLabel>
                  <CustomizedInput
                    {...register("streetName")}
                    error={!!errors.streetName}
                    id="street-name"
                    placeholder="Enter the street name"
                    size="small"
                    aria-describedby="outlined-weight-helper-text"
                    helperText={
                      !!errors.streetName && errors.streetName?.message
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl sx={{ width: "100%" }} variant="standard">
                  <InputLabel
                    shrink
                    sx={{ fontWeight: "600" }}
                    htmlFor="house-number"
                  >
                    House number*
                  </InputLabel>
                  <CustomizedInput
                    {...register("houseNumber")}
                    error={!!errors.houseNumber}
                    id="house-number"
                    size="small"
                    placeholder="Enter house number"
                    helperText={
                      !!errors.houseNumber && errors.houseNumber?.message
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl sx={{ width: "100%" }} variant="standard">
                  <InputLabel
                    shrink
                    sx={{ fontWeight: "600" }}
                    htmlFor="addition"
                  >
                    Addition (optional)
                  </InputLabel>
                  <CustomizedInput
                    {...register("addition")}
                    error={!!errors.addition}
                    id="addition"
                    size="small"
                    placeholder="e.g. A"
                    helperText={!!errors.addition && errors.addition?.message}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ width: "100%" }} variant="standard">
                  <InputLabel
                    shrink
                    sx={{ fontWeight: "600" }}
                    htmlFor="postal-code"
                  >
                    Postal code*
                  </InputLabel>
                  <CustomizedInput
                    {...register("postalCode")}
                    error={!!errors.postalCode}
                    id="postal-code"
                    placeholder="e.g. 1000 AA"
                    size="small"
                    aria-describedby="outlined-weight-helper-text"
                    helperText={
                      !!errors.postalCode && errors.postalCode?.message
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ width: "100%" }} variant="standard">
                  <InputLabel shrink sx={{ fontWeight: "600" }} htmlFor="city">
                    City*
                  </InputLabel>
                  <CustomizedInput
                    {...register("city")}
                    error={!!errors.city}
                    id="city"
                    placeholder="e.g. Utrecht"
                    size="small"
                    aria-describedby="outlined-weight-helper-text"
                    helperText={!!errors.city && errors.city?.message}
                  />
                </FormControl>
              </Grid>
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
              <Grid item xs={12}>
                <FormControl sx={{ width: "100%" }} variant="standard">
                  <InputLabel shrink sx={{ fontWeight: "600" }} htmlFor="price">
                    Price*
                  </InputLabel>
                  <CustomizedInput
                    {...register("price")}
                    error={!!errors.price}
                    id="price"
                    placeholder="e.g. &euro;150.000"
                    size="small"
                    aria-describedby="outlined-weight-helper-text"
                    helperText={!!errors.price && errors.price?.message}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl sx={{ width: "100%" }} variant="standard">
                  <InputLabel shrink sx={{ fontWeight: "600" }} htmlFor="size">
                    Size*
                  </InputLabel>
                  <CustomizedInput
                    {...register("size")}
                    error={!!errors.size}
                    id="size"
                    size="small"
                    placeholder="e.g. 60m2"
                    helperText={!!errors.size && errors.size?.message}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl sx={{ width: "100%" }} size="small">
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
                    Garage*
                  </Typography>
                  <CustomizedSelect
                    defaultValue={getValues("garage")}
                    // onChange={(e) => {
                    //   setValue(
                    //     "garage",
                    //     e.target.value === "true" ? true : false
                    //   );
                    //   console.log(e.target.value);
                    //   console.log(e.target.value === "true");
                    // }}
                    // {...register("garage")}
                    labelId="select-garage"
                    id="simple-select"
                    inputProps={{
                      "aria-label": "Without label",
                      inputRef: (ref: { value: any }) => {
                        if (!ref) return;
                        register("garage");
                      },
                    }}
                  >
                    <MenuItem value="true">Yes</MenuItem>
                    <MenuItem value="false">No</MenuItem>
                  </CustomizedSelect>
                  {!!errors.garage && (
                    <FormHelperText sx={{ color: "#d32f2f" }}>
                      {errors?.garage?.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl sx={{ width: "100%" }} variant="standard">
                  <InputLabel
                    shrink
                    sx={{ fontWeight: "600" }}
                    htmlFor="bedrooms"
                  >
                    Bedrooms*
                  </InputLabel>
                  <CustomizedInput
                    {...register("bedrooms")}
                    error={!!errors.bedrooms}
                    id="bedrooms"
                    size="small"
                    placeholder="Enter amount"
                    helperText={!!errors.bedrooms && errors.bedrooms?.message}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl sx={{ width: "100%" }} variant="standard">
                  <InputLabel
                    shrink
                    sx={{ fontWeight: "600" }}
                    htmlFor="bathrooms"
                  >
                    Bathrooms*
                  </InputLabel>
                  <CustomizedInput
                    {...register("bathrooms")}
                    error={!!errors.bathrooms}
                    id="bathrooms"
                    size="small"
                    placeholder="Enter amount"
                    helperText={!!errors.bathrooms && errors.bathrooms?.message}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ width: "100%" }} variant="standard">
                  <InputLabel
                    shrink
                    sx={{ fontWeight: "600" }}
                    htmlFor="construction-date"
                  >
                    Construction date*
                  </InputLabel>
                  <CustomizedInput
                    {...register("constructionDate")}
                    error={!!errors.constructionDate}
                    id="construction-date"
                    size="small"
                    placeholder="e.g. 1990"
                    helperText={
                      !!errors.constructionDate &&
                      errors.constructionDate?.message
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ width: "100%" }} variant="standard">
                  <InputLabel
                    shrink
                    sx={{ fontWeight: "600" }}
                    htmlFor="description"
                  >
                    Description*
                  </InputLabel>
                  <CustomizedInput
                    {...register("description")}
                    error={!!errors.description}
                    id="description"
                    size="small"
                    placeholder="Enter description"
                    helperText={
                      !!errors.description && errors.description?.message
                    }
                    multiline
                    rows={4}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} display="flex" justifyContent="end">
                <Button variant="contained" type="submit" sx={{ width: "40%" }}>
                  Post
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </Layout>
  );
}

export default HouseCreateOrEdit;
