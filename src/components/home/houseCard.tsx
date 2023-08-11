import React, { useState, useContext } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Modal,
  Fade,
  Backdrop,
  Button,
} from "@mui/material";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import CropSquareOutlinedIcon from "@mui/icons-material/CropSquareOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/context";
import types from "../../store/types";

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

type Props = {
  data: any;
  editBtns?: boolean;
};

function HouseCard({ data, editBtns = true }: Props) {
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const { dispatch } = useContext(Context);

  let navigate = useNavigate();

  const handleOpenDeleteModal = (e: any) => {
    e.stopPropagation();
    setOpenDeleteModal && setOpenDeleteModal(true);
  };
  const handleCloseDeleteModal = (e: any) => {
    e.stopPropagation();
    setOpenDeleteModal && setOpenDeleteModal(false);
  };
  const handleCardClick = (id: string) => {
    console.log(id);
    navigate(`/house/${id}`);
  };

  const handleDeleteHouse = () => {
    setOpenDeleteModal && setOpenDeleteModal(false);
    dispatch({ type: types.DeleteHouseCard, data: data?.id });
  };

  return (
    <Card>
      <CardActionArea onClick={() => handleCardClick(data?.id)}>
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
          <img
            src={data?.image}
            alt="house"
            width={136}
            height={136}
            style={{ borderRadius: 8 }}
            loading="lazy"
          />
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
            <Typography variant="body1" fontWeight={600} color="#535353">
              &euro; {parseFloat(data?.price).toFixed(3)}
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography variant="body1" color="#a6a6a6">
                {data?.address?.addition}
              </Typography>
              <Typography variant="body1" color="#a6a6a6">
                {data?.address?.city}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <BedOutlinedIcon style={{ color: "#a6a6a6", fontSize: 24 }} />
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
                <CropSquareOutlinedIcon
                  style={{ color: "#a6a6a6", fontSize: 24 }}
                />
                <Typography variant="body1" color="#535353">
                  {data?.size} m2
                </Typography>
              </Box>
            </Box>
          </Box>
          {editBtns && (
            <Box
              sx={{
                zIndex: 1000,
                position: "absolute",
                top: 16,
                right: 16,
                display: "flex",
                gap: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <EditIcon
                color="primary"
                fontSize="medium"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/house/edit/${data?.id}`);
                }}
              />
              <DeleteForeverOutlinedIcon
                fontSize="medium"
                style={{ color: "#535353" }}
                onClick={handleOpenDeleteModal}
              />
            </Box>
          )}
        </CardContent>
      </CardActionArea>
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
    </Card>
  );
}

export default HouseCard;
