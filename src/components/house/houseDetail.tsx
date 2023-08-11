import React, { useContext } from "react";
import house from "../../utils/images/house1.jpg";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
} from "@mui/material";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import Layout from "../../common/layout";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import CropSquareOutlinedIcon from "@mui/icons-material/CropSquareOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EuroOutlinedIcon from "@mui/icons-material/EuroOutlined";
import CarpenterOutlinedIcon from "@mui/icons-material/CarpenterOutlined";
import GarageOutlinedIcon from "@mui/icons-material/GarageOutlined";
import HouseCard from "../home/houseCard";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/context";

type Props = {};
const data = {
  id: "123",
  creatorId: "234",
  address: {
    street: "Stockvisstraat",
    houseNumber: "132",
    postalCode: 2,
    city: "Amsterdam",
    addition: "1011AA",
  },
  image: house,
  price: "500.000",
  size: 120,
  garage: true,
  bedrooms: 1,
  bathrooms: 1,
  constructionData: 1990,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

function HouseDetail({}: Props) {
  const { dispatch, state } = useContext(Context);
  let navigate = useNavigate();
  return (
    <Layout>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Grid container rowSpacing={2} columnSpacing={8}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
            }}
            onClick={() => navigate(`/`)}
          >
            <KeyboardBackspaceOutlinedIcon />
            <Typography variant="h6" fontWeight={600} component="div">
              Back to overview
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardMedia
                sx={{ height: 400 }}
                image={data?.image}
                title="house"
              />
              <CardContent
                sx={{
                  position: "relative",
                  p: 2,
                  display: "flex",
                  justifyContent: "start",
                  gap: 2,
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    alignItems: "start",
                  }}
                >
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Typography variant="h6" fontWeight={600} component="div">
                      {data?.address?.street}
                    </Typography>
                    <Typography variant="h6" fontWeight={600} component="div">
                      {data?.address?.houseNumber}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <LocationOnOutlinedIcon
                      style={{ color: "#a6a6a6", fontSize: 24 }}
                    />
                    <Typography variant="body1" color="#a6a6a6">
                      {data?.address?.addition}
                    </Typography>
                    <Typography variant="body1" color="#a6a6a6">
                      {data?.address?.city}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <EuroOutlinedIcon
                        style={{ color: "#a6a6a6", fontSize: 24 }}
                      />
                      <Typography
                        variant="body1"
                        fontWeight={600}
                        color="#535353"
                      >
                        {parseFloat(data?.price).toFixed(3)}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <CropSquareOutlinedIcon
                        style={{ color: "#a6a6a6", fontSize: 24 }}
                      />
                      <Typography variant="body1" color="#535353">
                        {data?.size} m2
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <CarpenterOutlinedIcon
                        style={{ color: "#a6a6a6", fontSize: 24 }}
                      />
                      <Typography
                        variant="body1"
                        fontWeight={600}
                        color="#535353"
                      >
                        Built in {data?.constructionData}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <BedOutlinedIcon
                        style={{ color: "#a6a6a6", fontSize: 24 }}
                      />
                      <Typography variant="body1" color="#535353">
                        {data?.bedrooms}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <BathtubOutlinedIcon
                        style={{ color: "#a6a6a6", fontSize: 18 }}
                      />
                      <Typography variant="body1" color="#535353">
                        {data?.bathrooms}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <GarageOutlinedIcon
                        style={{ color: "#a6a6a6", fontSize: 18 }}
                      />
                      <Typography variant="body1" color="#535353">
                        {data?.garage ? "Yes" : "No"}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    variant="body1"
                    color="#535353"
                    textAlign="justify"
                  >
                    {data?.description}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    zIndex: 1000,
                    position: "absolute",
                    top: 12,
                    right: 12,
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <EditIcon
                    color="primary"
                    fontSize="medium"
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate(`/house/edit/${data?.id}`)}
                    />
                  <DeleteForeverOutlinedIcon
                    fontSize="medium"
                    style={{ color: "#535353", cursor: "pointer" }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={5}>
            <Typography
              variant="h6"
              textAlign="left"
              fontWeight={600}
              component="div"
              mb={2}
            >
              Recommended for you
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {state?.houses && state?.houses.map((house) => (
                <Box key={house.id}>
                  <HouseCard editBtns={false} data={house} />
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}

export default HouseDetail;
