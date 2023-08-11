import { useState, useEffect, useContext } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import Layout from "../../../common/layout";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Context } from "../../../store/context";
import types from "../../../store/types";
import { CustomizedContainer } from "./styles";
import FileUploaderComponent from "./fileUploaderComponent";
import BackwardComponent from "../../../common/backwardComponent";
import InputComponent from "./inputComponent";
import SelectComponent from "./selectComponent";

const schema = yup.object({
  streetName: yup.string().required("* street name is required"),
  postalCode: yup.string().required("* postal code is required"),
  city: yup.string().required("* city is required"),
  description: yup.string().required("* description is required"),
  image: yup.string().required("* image is required"),
  houseNumber: yup
    .number()
    .required("* house number is required")
    .typeError("* you must specify a number"),
  price: yup.string().required("* price is required"),
  size: yup
    .number()
    .required("* size is required")
    .typeError("* you must specify a number"),
  bathrooms: yup
    .number()
    .required("* amount of bathrooms is required")
    .typeError("* you must specify a number"),
  bedrooms: yup
    .number()
    .required("* amount of bedrooms is required")
    .typeError("* you must specify a number"),
  constructionDate: yup
    .number()
    .required("* date of construction is required")
    .typeError("* you must specify a number"),
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

function HouseCreateOrEdit({}: Props) {
  let navigate = useNavigate();
  const params = useParams();
  const { dispatch, state } = useContext(Context);
  const [imageUrl, setImageUrl] = useState<any>(null);
  const [garageStatus, setGarageStatus] = useState<string>("");
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
      setGarageStatus(data?.garage);
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
          <BackwardComponent />
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
                <InputComponent
                  title="Street name*"
                  name="streetName"
                  placeHolder="Enter the street name"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={6}>
                <InputComponent
                  title="House number*"
                  name="houseNumber"
                  placeHolder="Enter house number"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={6}>
                <InputComponent
                  title="Addition (optional)"
                  name="addition"
                  placeHolder="e.g. A"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={12}>
                <InputComponent
                  title="Postal code*"
                  name="postalCode"
                  placeHolder="e.g. 1000 AA"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={12}>
                <InputComponent
                  title="City*"
                  name="city"
                  placeHolder="e.g. Utrecht"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <FileUploaderComponent
                errors={errors}
                imageUrl={imageUrl}
                handleFileUpload={handleFileUpload}
              />
              <Grid item xs={12}>
                <InputComponent
                  title="Price*"
                  name="price"
                  placeHolder="e.g. &euro;150.000"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={6}>
                <InputComponent
                  title="Size*"
                  name="size"
                  placeHolder="e.g. 60m2"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={6}>
                <SelectComponent
                  setValue={setValue}
                  setGarageStatus={setGarageStatus}
                  garageStatus={garageStatus}
                  control={control}
                  errors={errors}
                  title="Garage*"
                  name="garage"
                />
              </Grid>
              <Grid item xs={6}>
                <InputComponent
                  title="Bedrooms*"
                  name="bedrooms"
                  placeHolder="Enter amount"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={6}>
                <InputComponent
                  title="Bathrooms*"
                  name="bathrooms"
                  placeHolder="Enter amount"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={12}>
                <InputComponent
                  title="Construction date*"
                  name="constructionDate"
                  placeHolder="e.g. 1990"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={12}>
                <InputComponent
                  title="Description*"
                  name="description"
                  placeHolder="Enter description"
                  register={register}
                  errors={errors}
                  textArea={true}
                />
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
