import React from "react";
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
} from "@mui/material";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import Layout from "../../common/layout";
import { useForm, SubmitHandler } from "react-hook-form";
import { alpha, styled } from "@mui/material/styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  streetName: yup.string().required("* street name is required"),
  postalCode: yup.string().required("* postal code is required"),
  city: yup.string().required("* city is required"),
  description: yup.string().required("* description is required"),
  houseNumber: yup.number().required("* house number is required").typeError("you must specify a number"),
  price: yup.number().required("* price is required").typeError("you must specify a number"),
  size: yup.number().required("* size is required").typeError("you must specify a number"),
  bathrooms: yup.number().required("* amount of bathrooms is required").typeError("you must specify a number"),
  bedrooms: yup.number().required("* amount of bedrooms is required").typeError("you must specify a number"),
  constructionDate: yup.number().required("* date of construction is required").typeError("you must specify a number"),
  addition: yup.string().optional(),
  garage: yup.boolean().required("* please select one option").typeError("please select one option"),
});

type Props = {};

type Inputs = {
  streetName: string;
  houseNumber: number;
  addition: string | undefined;
  postalCode: string;
  city: string;
  price: number;
  size: number;
  bathrooms: number;
  bedrooms: number;
  garage: boolean;
  constructionDate: number;
  description: string;
};

const CustomizedInput = styled(TextField)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "white",
    border: "none",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
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

const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
function HouseCreateOrEdit({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  console.log(errors);
  return (
    <Layout>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <KeyboardBackspaceOutlinedIcon />
          <Typography variant="h6" fontWeight={600} component="div">
            Back to overview
          </Typography>
        </Box>
        <Grid container spacing={8}>
          <Grid item xs={8}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  justifyContent: "start",
                }}
              >
                <FormControl variant="standard">
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
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <FormControl variant="standard">
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
                    <FormControl variant="standard">
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
                        helperText={
                          !!errors.addition && errors.addition?.message
                        }
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                <FormControl variant="standard">
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
                <FormControl variant="standard">
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
                <FormControl variant="standard">
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
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <FormControl variant="standard">
                      <InputLabel
                        shrink
                        sx={{ fontWeight: "600" }}
                        htmlFor="size"
                      >
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
                    <FormControl size="small">
                      <Typography
                        sx={{
                          fontWeight: "600",
                          fontSize: "12px",
                          color: "#00000090",
                          textAlign: "left",
                        }}
                        id="select-garage"
                      >
                        Garage
                      </Typography>
                      <Select
                        {...register("garage")}
                        // value={age}
                        // onChange={handleChange}
                        labelId="select-garage"
                        id="simple-select"
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem value="true">Yes</MenuItem>
                        <MenuItem value="false">No</MenuItem>
                      </Select>
                      {!!errors.garage && (
                        <FormHelperText sx={{ color: "red" }}>
                          {errors?.garage?.message}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <FormControl variant="standard">
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
                        helperText={
                          !!errors.bedrooms && errors.bedrooms?.message
                        }
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl variant="standard">
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
                        helperText={
                          !!errors.bathrooms && errors.bathrooms?.message
                        }
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                <FormControl variant="standard">
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
                <FormControl variant="standard">
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
                  />
                </FormControl>
                <Button variant="contained" type="submit">
                  Post
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}

export default HouseCreateOrEdit;
