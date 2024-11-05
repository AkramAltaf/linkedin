import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

interface LinkedInModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  content?: React.ReactNode;
  width?: number | string;
}

const LinkedInModal: React.FC<LinkedInModalProps> = ({
  open,
  onClose,
  title = "Modal Title",
  content = "Modal Content",
  width = 400,
}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: width,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {title && (
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
        )}
        {content && (
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {content}
          </Typography>
        )}
      </Box>
    </Modal>
  );
};

export default LinkedInModal;
