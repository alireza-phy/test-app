import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import CropSquareOutlinedIcon from "@mui/icons-material/CropSquareOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../../common/deleteModal";

type Props = {
  data: any;
  editBtns?: boolean;
};

function HouseCard({ data, editBtns = true }: Props) {
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  let navigate = useNavigate();

  const handleOpenDeleteModal = (e: any) => {
    e.stopPropagation();
    setOpenDeleteModal && setOpenDeleteModal(true);
  };

  const handleCardClick = (id: string) => {
    console.log(id);
    navigate(`/house/${id}`);
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
      <DeleteModal
        id={data?.id}
        openDeleteModal={openDeleteModal}
        setOpenDeleteModal={setOpenDeleteModal}
      />
    </Card>
  );
}

export default HouseCard;
