import { useContext } from "react";
import { Box, Typography, Button, Modal, Fade, Backdrop } from "@mui/material";
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
  id: string;
  setOpenDeleteModal: (state: boolean) => any;
  openDeleteModal: boolean;
};

function DeleteModal(props: Props) {
  const { id, openDeleteModal, setOpenDeleteModal } = props;
  const { dispatch } = useContext(Context);
  let navigate = useNavigate();

  const handleCloseDeleteModal = (e: any) => {
    e.stopPropagation();
    setOpenDeleteModal && setOpenDeleteModal(false);
  };

  const handleDeleteHouse = () => {
    setOpenDeleteModal && setOpenDeleteModal(false);
    dispatch({ type: types.DeleteHouseCard, data: id });
    navigate(`/`);
  };

  return (
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
  );
}

export default DeleteModal;
