import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "styled-components";

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
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContainer width={width}>
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
      </ModalContainer>
    </Modal>
  );
};

export default LinkedInModal;

const ModalContainer = styled(Box)<{ width?: number | string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => props.width || "400px"};
  background-color: ${(props) => props.theme.colors.background || "white"};
  border: 2px solid #000;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.2); // Equivalent to boxShadow: 24 in Material UI
  padding: 1rem;
`;
