import React, { useContext, useState } from "react";
import house from "../../utils/images/house1.jpg";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  Button,
  Modal,
  Fade,
  Backdrop,
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
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../store/context";
import types from "../../store/types";

type Props = {};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  borderRadius: 4,
  px: 12,
  py: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 2,
};

function HouseDetail({}: Props) {
  const { dispatch, state } = useContext(Context);
  const params = useParams();
  let navigate = useNavigate();
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  const data = state?.houses?.filter((item) => item?.id === params?.id)[0];

  const handleOpenDeleteModal = (e: any) => {
    e.stopPropagation();
    setOpenDeleteModal && setOpenDeleteModal(true);
  };
  const handleCloseDeleteModal = (e: any) => {
    e.stopPropagation();
    setOpenDeleteModal && setOpenDeleteModal(false);
  };

  const handleDeleteHouse = () => {
    setOpenDeleteModal && setOpenDeleteModal(false);
    dispatch({ type: types.DeleteHouseCard, data: data?.id });
    navigate(`/`);
  };

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
                        Built in {data?.constructionDate}
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
                    onClick={handleOpenDeleteModal}
                  />
                </Box>
              </CardContent>
            </Card>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={openDeleteModal}
              onClose={handleCloseDeleteModal}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                backdrop: {
                  timeout: 500,
                },
              }}
            >
              <Fade in={openDeleteModal}>
                <Box sx={style}>
                  <Typography
                    id="transition-modal-title"
                    variant="h6"
                    component="h2"
                    fontWeight={600}
                    textAlign="center"
                  >
                    Delete listing
                  </Typography>
                  <Box>
                    <Typography
                      variant="body2"
                      id="transition-modal-description"
                      textAlign="center"
                    >
                      Are you share you want to delete this listing?
                    </Typography>
                    <Typography
                      variant="body2"
                      id="transition-modal-description"
                      textAlign="center"
                      mb={3}
                    >
                      This action cannot be undone.
                    </Typography>
                  </Box>

                  <Button
                    onClick={handleDeleteHouse}
                    variant="contained"
                    color="primary"
                    sx={{ padding: 1 }}
                  >
                    <Typography
                      variant="h3"
                      fontWeight={500}
                      fontSize={12}
                      textTransform="uppercase"
                    >
                      Yes,delete
                    </Typography>
                  </Button>
                  <Button
                    onClick={handleCloseDeleteModal}
                    variant="contained"
                    color="secondary"
                    sx={{ padding: 1 }}
                  >
                    <Typography
                      variant="h3"
                      fontWeight={500}
                      fontSize={12}
                      textTransform="uppercase"
                    >
                      Go back
                    </Typography>
                  </Button>
                </Box>
              </Fade>
            </Modal>
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
              {state?.houses &&
                state?.houses.map((house) => (
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
